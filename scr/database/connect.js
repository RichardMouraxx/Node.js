//Conectando com o banco de dados (MongoDB)

const mongoose = require("mongoose");

const connecctToDatabase = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodedicasparadevs.sncd0jg.mongodb.net/?retryWrites=true&w=majority`,
    (error) => {
      if (error) {
        return console.log(
          "Ocorreu um erro ao se conectar com o banco de dados: ",
          error
        );
      }

      return console.log("Conectado com sucesso");
    }
  );
};

module.exports = connecctToDatabase;

// Nunca colocar as senhas diretamente no código, sempre usar o .env para guardar dados sensíveis 