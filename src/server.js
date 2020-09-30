const express = require("express");
const routes = require("./routes/empleado.routes");
const morgan = require("morgan");
require("./config/conexion");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(routes);

routes.use("/", express.static(__dirname + "/public"));

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), (e) => {
  if (e)
    throw new Error(
      console.log(
        `Error al iniciar el servidor en el puerto ${app.get("port")}`
      )
    );
  console.log(
    `Servidor iniciado correctamente en el puerto ${app.get("port")}`
  );
});
