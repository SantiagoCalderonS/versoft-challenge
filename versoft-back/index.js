const app = require("./src/app");
//________________________________DATOS DE ENTORNO
require("dotenv").config();
const {PORT} = process.env
//___________________________________



app.listen(PORT, ()=>console.log("iniciado"))