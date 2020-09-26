const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EmpleadoSchema = new Schema({
  nombres: { type: String, required: true },
  apellidos: { type: String, required: true },
  email: {
    type: String,
    required: [true, "El email es requerido"],
  },
  password: { type: String, required: true },
  telefono: { type: Number, min: 0, max: 1000000000 },
  grado: { type: String, required: true },
});

module.exports = mongoose.model("Empleado", EmpleadoSchema);
