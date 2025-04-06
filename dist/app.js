"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 10101;
app.get("/", (request, response) => {
    response.status(200).send("Hello World");
});
app.listen(PORT, () => {
    console.log("Servidor ejecutándose en el puerto: ", PORT);
}).on("error", (error) => {
    throw new Error(error.message);
});
// en el punto 8 me salio este error despues de mandar el comando npx tsc -w
// no aparece como en la imagen como si el servidor estuviera corriendo
// el paso nuevo habla de la segunda terminal
// como se saca la nueva terminal no importa que sea powershell 
// sale un mensaje servidor ejecutandose en el puerto 10101
