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
      role: body.role,
    });
    // Ejecutar el metodo save para guardar Empleado
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
    let { body } = req;
    let { id } = req.params;
    Empleado.findByIdAndUpdate(
      id,
      body,
      { new: true, runValidators: true, context: "query" },
      (err, empleadoDB) => {
        if (err) {
          return res.status(400).json({
            ok: false,
            err,
          });
        }
        return res.json({
          ok: true,
          empleadoDB: empleadoDB,
        });
      }
    );
  },
  borrarEmpleado: (req, res) => {
    const { id } = req.params;
    Empleado.findByIdAndUpdate(
      id,
      { estado: false },
      { new: true },
      (error, empleadoDeshabilitado) => {
        if (error) {
          return res.status(400).json({
            ok: false,
            error,
          });
        }
        return res.status(200).json({
          ok: true,
          empleadoDeshabilitado,
        });
      }
    );
  },
};

module.exports = empleadoController;
