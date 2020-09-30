const mongoose = require("mongoose");

let URI = process.env.NODE_ENV || "dev";
let dataBaseURI = "";

if (URI == "dev") {
  dataBaseURI = "mongodb://localhost:27017/negocio";
} else {
  dataBaseURI =
    "mongodb+srv://jeanxxjean:rTsvOnr1JUJiEqcf@cluster0.byux7.mongodb.net/negocio?retryWrites=true&w=majority";
}

mongoose.connect(
  dataBaseURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  (err) => {
    if (err) throw new Error("Error al conectarse a la BD");
    console.log("Base de datos conectada correctamente");
  }
);
