import database from "infra/database.js";

async function status(request, response) {
  const result = await database.query("SELECT 1 + 1 as sominha");
  console.log(result.rows);
  response
    .status(200)
    .json({ chave: "Esse aqui é um bom teste, não é? :) Ou não?" });
}
export default status;
