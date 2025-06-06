// Página de envio e edicao de HH

// -imports Ract, Redux- >
import { useEffect, useState } from "react";
import * as styled from "./admStyles.js";

import SVGEmployee from "../../assets/icons/adm/Employees_icon.jsx";
import SVGUser from "../../assets/icons/adm/User_icon.jsx";
import SVGUsinas from "../../assets/icons/adm/Usinas_icon.jsx";
import SVGTools from "../../assets/icons/adm/Atividades_icon.jsx";
// import SVGEmployees from "../../assets/icons/adm/Colaboradores_icon.js";
// import SVGCentroCusto from "../../assets/icons/adm/CentroC_icon.js";
// import SVGDepartments from "../../assets/icons/adm/Departments_icon.js";
// import SVGAdictives from "../../assets/icons/adm/Adictives_icon.js";
// import SVGTeam from "../../assets/icons/adm/Team_icon.js";
// import SVGAppUsers from "../../assets/icons/adm/Users_icon.js";
// import SVGPages from "../../assets/icons/adm/Pages_icon.js";
// import SVGStatus from "../../assets/icons/adm/Status_icon.js";
// import SVGLogs from "../../assets/icons/adm/Logs_icon.js";
import SVGArrowRight from "../../assets/icons/adm/ArrowRight_icon.jsx";

import Usinas from "./Usinas/usinas.jsx";
import AddUsina from "./Usinas/addUsina/addusina.jsx";
import Employees from "./Employees/Employees.jsx";
import AddEmployee from "./Employees/addEmployee/addEmployee.jsx";
import Users from "./Users/Users.jsx";
import AddUser from "./Users/addUser/addUser.jsx";
import Departments from "./Departments/departments.jsx";
import AddFunction from "./Departments/addDepartments/addDepartments.jsx";
import Atividades from "./Atividades/Atv.jsx";
import AddArea from "./Atividades/addArea/addArea.jsx";

export const Adm = ({
  windowHeight,
  toastMessage,
  modalMessage,
  modalInfo,
}) => {
  const [pageTrail, setPageTrail] = useState(
    JSON.parse(localStorage.getItem("PageTrail")) || ["Administrativo"]
  );
  const [editData, setEditData] = useState(
    localStorage.getItem("editData") || ""
  );

  const handleSelectPage = (page, index = null, editId = "") => {
    let newPageTrail = [];

    if (editId) {
      setEditData(editId);
      localStorage.setItem("editData", editId);
    } else {
      setEditData("");
      localStorage.removeItem("editData");
    }

    if (index !== null && index < pageTrail.length) {
      newPageTrail = pageTrail.slice(0, index);
      newPageTrail[index] = page;
    } else {
      newPageTrail = [...pageTrail, page];
    }

    setPageTrail(newPageTrail);
    localStorage.setItem("PageTrail", JSON.stringify(newPageTrail));
  };

  const pageSelector = () => {
    switch (pageTrail[pageTrail.length - 1]) {
      case "Colaboradores":
        return (
          <Employees
            toastMessage={toastMessage}
            modalMessage={modalMessage}
            openPage={handleSelectPage}
            modalInfo={modalInfo}
          />
        );
      case "Adicionar Funcionário":
      case "Editar Funcionário":
        return <AddEmployee toastMessage={toastMessage} editData={editData} />;
      case "Departamentos":
        return (
          <Departments
            toastMessage={toastMessage}
            modalMessage={modalMessage}
            openPage={handleSelectPage}
            modalInfo={modalInfo}
          />
        );
      case "Adicionar Função":
      case "Editar Função":
        return <AddFunction toastMessage={toastMessage} editData={editData} />;
      case "Usinas/Obras":
        return (
          <Usinas
            toastMessage={toastMessage}
            modalMessage={modalMessage}
            openPage={handleSelectPage}
            modalInfo={modalInfo}
          />
        );
      case "Adicionar Usina":
      case "Editar Usina":
        return <AddUsina toastMessage={toastMessage} editData={editData} />;
      case "Atividades de Campo":
        return (
          <Atividades
            toastMessage={toastMessage}
            modalMessage={modalMessage}
            openPage={handleSelectPage}
            modalInfo={modalInfo}
          />
        );
      case "Adicionar Atividade":
      case "Editar Atividade":
        return <AddArea toastMessage={toastMessage} editData={editData} />;
      case "Usuários":
        return (
          <Users
            toastMessage={toastMessage}
            modalMessage={modalMessage}
            openPage={handleSelectPage}
            modalInfo={modalInfo}
          />
        );
      case "Adicionar Usuário":
      case "Editar Usuário":
        return <AddUser toastMessage={toastMessage} editData={editData} />;
      default:
        alert("Página em construção");
        setPageTrail(["Administrativo"]);
    }
  };

  return (
    <styled.contentDiv $windowHeight={windowHeight}>
      {pageTrail[pageTrail.length - 1] === "Administrativo" ? (
        <>
          <styled.infoBlocksDiv>
            <styled.infoBlock $first={true}>
              <styled.infoIconDiv $first={true}>
                <SVGEmployee width="50" height="50" />
              </styled.infoIconDiv>
              <styled.infoTitleDiv>
                <h1>001</h1>
                <h4>Funcionários Cadastrados</h4>
              </styled.infoTitleDiv>
            </styled.infoBlock>
            <styled.infoBlock>
              <styled.infoIconDiv>
                <SVGUser width="50" height="50" />
              </styled.infoIconDiv>
              <styled.infoTitleDiv>
                <h1>001</h1>
                <h4>Usuários Cadastrados</h4>
              </styled.infoTitleDiv>
            </styled.infoBlock>
          </styled.infoBlocksDiv>
          <styled.content>
            <styled.optionsBlockDiv>
              {/* <styled.optionsTitleDiv>
                Controle de Empresa
              </styled.optionsTitleDiv>
               <styled.optionButton
                onClick={() => handleSelectPage("Colaboradores", 1)}
              >
                <div>
                  <SVGEmployees width="30" height="35" />
                </div>
                <span>Colaboradores</span>
              </styled.optionButton>
              <styled.optionButton
                onClick={() => handleSelectPage("Centros de Custos", 1)}
              >
                <div>
                  <SVGCentroCusto width="20" height="20" />
                </div>
                <span>Centros de Custos</span>
              </styled.optionButton>
              <styled.optionButton
                onClick={() => handleSelectPage("Departamentos", 1)}
              >
                <div>
                  <SVGDepartments width="20" height="20" />
                </div>
                <span>Departamentos</span>
              </styled.optionButton>
              <styled.optionButton
                onClick={() => handleSelectPage("Aditivos", 1)}
              >
                <div>
                  <SVGAdictives width="20" height="20" />
                </div>
                <span>Aditivos</span>
              </styled.optionButton>
              <styled.optionButton
                onClick={() => handleSelectPage("Equipes", 1)}
              >
                <div>
                  <SVGTeam width="20" height="20" />
                </div>
                <span>Equipes</span>
              </styled.optionButton> */}
              <styled.optionsTitleDiv>Controle de Obra</styled.optionsTitleDiv>
              <styled.optionButton
                onClick={() => handleSelectPage("Usinas/Obras", 1)}
              >
                <div>
                  <SVGUsinas width="20" height="20" />
                </div>
                <span>Usinas/Obras</span>
              </styled.optionButton>
              <styled.optionButton
                onClick={() => handleSelectPage("Atividades de Campo", 1)}
              >
                <div>
                  <SVGTools width="20" height="20" />
                </div>
                <span>Atividades de Campo</span>
              </styled.optionButton>
            </styled.optionsBlockDiv>
            {/* <styled.optionsBlockDiv>
              <styled.optionsTitleDiv>
                Controle da aplicação
              </styled.optionsTitleDiv>
              <styled.optionButton
                onClick={() => handleSelectPage("Usuários", 1)}
              >
                <div>
                  <SVGAppUsers width="20" height="20" />
                </div>
                <span>Usuários</span>
              </styled.optionButton>
              <styled.optionButton
                onClick={() => handleSelectPage("Páginas", 1)}
              >
                <div>
                  <SVGPages width="17" height="20" />
                </div>
                <span>Páginas</span>
              </styled.optionButton>
              <styled.optionButton
                onClick={() => handleSelectPage("Status", 1)}
              >
                <div>
                  <SVGStatus width="20" height="20" />
                </div>
                <span>Status</span>
              </styled.optionButton>
              <styled.optionButton
                onClick={() => handleSelectPage("Histórico", 1)}
              >
                <div>
                  <SVGLogs width="20" height="20" />
                </div>
                <span>Histórico</span>
              </styled.optionButton>
            </styled.optionsBlockDiv> */}
          </styled.content>
        </>
      ) : (
        <>
          <styled.pageTrailDiv>
            {pageTrail.map((page, index) => (
              <span key={index}>
                <SVGArrowRight width="20" height="20" />
                <span onClick={() => handleSelectPage(page, index)}>
                  {page}
                </span>
              </span>
            ))}
          </styled.pageTrailDiv>
          <styled.pageContent>{pageSelector()}</styled.pageContent>
        </>
      )}
    </styled.contentDiv>
  );
};
