import Work from "../Models/workModel.js";

class WorkController {
  static async getWork(req, res) {
    try {
      if (!req.user.user.isManager) {
        return res.status(403).json({
          message: "Sem permissão",
          status: false,
        });
      }

      const { workId } = req.params;

      const work = await Work.findById(workId).exec();

      if (!work) {
        return res.status(404).json({
          message: "Obra não encontrada",
          status: false,
        });
      }

      res.status(200).json({
        message: "Obra encontrada com sucesso",
        employee,
        status: true,
      });
    } catch (e) {
      res.status(500).json({
        message: "Erro interno do servidor",
        status: false,
      });
    }
  }

  static async getUserWorks(req, res) {
    try {
      if (!req.user.user.isManager) {
        return res.status(403).json({
          message: "Sem permissão",
          status: false,
        });
      }
      const userId = req.user.user._id;

      const userWorks = await Work.find({ managerIds: userId });

      if (!userWorks.length) {
        return res.status(404).json({
          message: "Usuário Sem Obras",
          status: false,
        });
      }

      res.status(200).json({
        message: "Obras do usuário encontradas com sucesso",
        userWorks,
        status: true,
      });
    } catch (e) {
      res.status(500).json({
        message: "Erro interno do servidor",
        status: false,
      });
    }
  }
  static async createWork(req, res) {
    try {
      if (!req.user.user.isManager) {
        return res.status(403).json({
          message: "Sem permissão",
          status: false,
        });
      }

      const { name, location, startDate, endDate, isActive, managerIds } =
        req.body;

      if (!name || !location || !startDate) {
        return res.status(400).json({
          message: "Todos os campos são obrigatórios",
          status: false,
        });
      }

      Work.create({
        name,
        location,
        startDate,
        endDate,
        isActive,
        managerIds,
      });

      res.status(201).json({
        message: "Obra criada com sucesso",
        status: true,
      });
    } catch (e) {
      res.status(500).json({
        message: "Erro interno do servidor " + e.message,
        status: false,
      });
    }
  }
  static async getAllWorks(req, res) {
    try {
      if (!req.user.user.isManager) {
        return res.status(403).json({
          message: "Sem permissão",
          status: false,
        });
      }
      const { page = 1, limit = 10 } = req.query;
      const works = await Work.find()
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .exec();

      res.status(200).json({
        message: "Obras listadas com sucesso",
        works,
        status: true,
      });
    } catch (e) {
      res.status(500).json({
        message: "Erro interno do servidor",
        status: false,
      });
    }
  }
  static async updateWork(req, res) {
    try {
      if (!req.user.user.isManager) {
        return res.status(403).json({
          message: "Sem permissão",
          status: false,
        });
      }
      const workId = req.params.workId;
      const { name, location, startDate, endDate, isActive, managerIds } =
        req.body;

      if (
        !name &&
        !location &&
        !startDate &&
        !endDate &&
        !managerIds &&
        isActive !== true &&
        isActive !== false
      ) {
        return res.status(400).json({
          message: "Nenhum dado para atualizar",
          status: false,
        });
      }

      const updateData = {};
      if (name) updateData.name = name;
      if (location) updateData.location = location;
      if (startDate) updateData.startDate = startDate;
      if (endDate) updateData.endDate = endDate;
      if (isActive === true || isActive === false)
        updateData.isActive = isActive;
      if (managerIds && Array.isArray(managerIds))
        updateData.managerIds = managerIds;

      const work = await Work.findByIdAndUpdate(
        workId,
        {
          $set: updateData,
        },
        { new: true }
      ).exec();

      if (!work) {
        return res.status(404).json({
          message: "Obra não encontrada",
          status: false,
        });
      }

      res.status(200).json({
        message: "Obra atualizada com sucesso",
        work,
        status: true,
      });
    } catch (e) {
      res.status(500).json({
        message: "Erro interno do servidor " + e.message,
        status: false,
      });
    }
  }
  static async deleteWork(req, res) {
    try {
      if (!req.user.user.isManager) {
        return res.status(403).json({
          message: "Sem permissão",
          status: false,
        });
      }
      const workId = req.params.workId;

      const work = await Work.findByIdAndDelete(workId).exec();

      if (!work) {
        return res.status(404).json({
          message: "Obra não encontrada",
          status: false,
        });
      }
      res.status(200).json({
        message: "Obra excluída com sucesso",
        status: true,
      });
    } catch (e) {
      res.status(500).json({
        message: "Erro interno do servidor " + e.message,
        status: false,
      });
    }
  }
}

export default WorkController;
