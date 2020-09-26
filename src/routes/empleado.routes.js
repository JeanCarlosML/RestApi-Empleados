const express = require("express");
const empleadoController = require("../controllers/empleado.controller");
const routes = express.Router();

routes.get("/empleado", empleadoController.listarEmpleados);
routes.post("/empleado", empleadoController.registrarEmpleado);
routes.put("/empleado/:id", empleadoController.cambiarEmpleado);
routes.delete("/empleado/:id", empleadoController.borrarEmpleado);

module.exports = routes;
