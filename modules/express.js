const express = require("express");
const UserModel = require("../scr/models/user.model"); // Chama o modelo do banco de dados

const app = express();

app.use(express.json()); //Sempe tem quer definir o uso do JSON

app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const user = await UserModel.findById(id);
    return res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
//Get = requisita dados
app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.status(200).json(users);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// Post = envia dados
app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Path = atualiza dados parciais
app.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true }); //new mostra a atualização do postman
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//Sempre tem que criar uma porta e depois tem que rodar ela
const port = 8080;
app.listen(port, () => console.log("Rodando com Express na porta", port));

//Sempre colocar os endpoint em uma função assincrona e no try/catch