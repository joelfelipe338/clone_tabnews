function status(request, response) {
  response.status(200).json({chave: "Servidor retornando status 200"})
}

export default status