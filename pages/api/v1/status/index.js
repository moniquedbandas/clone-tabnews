function status(request, response) {
  response
    .status(200)
    .json({ chave: "Esse aqui é um bom teste, não é? :) Ou não?" });
}
export default status;
