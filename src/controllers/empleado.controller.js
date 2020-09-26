const Empleado = require("../models/empleado.model");
const bcrypt = require("bcrypt");

const empleadoController = {
  listarEmpleados: (req, res) => {
    Empleado.find((error, empleadoDB) => {
      if (error) {
        return res.status(400).json({
          ok: false,
          error,
        });
      }
      return res.json({
        ok: true,
        empleados: empleadoDB,
      });
    });
  },
  registrarEmpleado: (req, res) => {
    let body = req.body;
    let empleado = new Empleado({
      nombres: body.nombres,
      apellidos: body.apellidos,
      email: body.email,
      password: bcrypt.hashSync(body.password, 10),
      telefono: body.telefono,
      grado: body.grado,
    });
    empleado.save((error, empleadoDB) => {
      if (error) {
        return res.status(400).json({
          ok: false,
          error,
        });
      }
      return res.json({
        ok: true,
        empleado: empleadoDB,
      });
    });
  },
  cambiarEmpleado: (req, res) => {
    res.json("cambiarEmpleado");
  },
  borrarEmpleado: (req, res) => {
    res.json("borrarEmpleado");
  },
};

module.exports = empleadoController;
