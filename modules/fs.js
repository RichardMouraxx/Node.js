const fs = require("fs");
const path = require("path");

//Criar uma pasta
/* fs.mkdir(path.join(__dirname, "/test"), (error) => {
    if(error) {
     return   console.log(`Error: ${error}`)
    }

    console.log('Pasta criada com sucesso!')
});
 */

// Criar um arquivo
/* fs.writeFile(path.join(__dirname, '/test', 'test.txt'), 'Hello node', (error) => {
    if(error){
        return console.log('Error', error)
    }

    console.log('Arquivo criado com sucesso')
}) */

//Adicionar mais conteudo
/* fs.appendFile(path.join(__dirname, '/test', 'test.txt'), '\n Hello World', (error) => {
    if(error){
        return console.log('Erro', error)
    }

    console.log('Adicionado o conteudo')
}) */

//Ler arquivo
/* fs.readFile(path.join(__dirname, "/test", "test.txt"), "utf8", (error, data) => {
  if (error) {
    return console.log("Erro", error);
  }

  console.log(data)
});
 */