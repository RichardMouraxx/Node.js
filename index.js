//Pega o modulo desestruturado com {}
/* const Person = require("./person");
const person = new Person("Richard"); */

const dotenv = require("dotenv");
const connecctToDatabase = require("./scr/database/connect");

dotenv.config(); // Sempre colocar o .env antes de chamar outras funções, se nâo, pode dar erros
connecctToDatabase();

require('./modules/express')

//require("./modules/path");
//require("./modules/fs");
//require('./modules/http');
