import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const port = process.env.PORT;

import "./db/database.js";
import UserRoutes from "./src/Routes/UserRoutes.js";
import HHControllerRoutes from "./src/Routes/ControleHHRoutes.js";
import WorkRoutes from "./src/Routes/WorkRoutes.js";
import EmployeeRoutes from "./src/Routes/EmployeeRoutes.js";
import ActivityRoutes from "./src/Routes/activityRoutes.js";
import RoleRoutes from "./src/Routes/RoleRoutes.js";
import PageRoutes from "./src/Routes/PagesRoutes.js";
import PredictedRoutes from "./src/Routes/predictedRoutes.js";

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: "GET, POST, PUT, DELETE",
    allowedHeaders: [
      "Origin",
      "X-Requested-With",
      "Content-Type",
      "Access-Control-Allow-Credentials",
    ],
    exposedHeaders: ["Access-Control-Allow-Credentials"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/user", UserRoutes);
app.use("/api/hhcontroll", HHControllerRoutes);
app.use("/api/work", WorkRoutes);
app.use("/api/predicted", PredictedRoutes);
app.use("/api/employee", EmployeeRoutes);
app.use("/api/activity", ActivityRoutes);
app.use("/api/role", RoleRoutes);
app.use("/api/page", PageRoutes);

app.use("/*", (req, res) => {
  res.status(404).json({
    message: "Endpoint não encontrado",
    status: false,
  });
});

app.use((err, req, res, next) => {
  if (err instanceof mongoose.Error && err.name === "MongooseError") {
    return res
      .status(500)
      .json({ status: false, message: "Erro interno do servidor" });
  }
  next(err);
});

app.listen(port, () => {
  console.log(`Servidor no link -> http://localhost:${port}`);
});
