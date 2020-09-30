const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema;

let listRoles = {
  values: ["ADMIN_ROLE", "USER_ROLE"],
  message: "{VALUE} no es un rol valido",
};

const EmpleadoSchema = new Schema({
  nombres: { type: String, required: [true, "El nombre es obligatorio"] },
  apellidos: {
    type: String,
    required: [true, "Los apellidos son obligatorio"],
  },
  email: {
    type: String,
    required: [true, "El email es requerido"],
    unique: true,
  },
  password: { type: String, required: true },
  telefono: { type: Number, min: 0, max: 1000000000 },
  role: { type: String, default: "USER_ROLE", enum: listRoles },
  estado: { type: Boolean, default: true, required: false },
});

EmpleadoSchema.plugin(uniqueValidator, { message: "{PATH} es un valor unico" });

module.exports = mongoose.model("Empleado", EmpleadoSchema);
