const repository = require("../repositorys/servicosRepository.js")

class ServicosService{
  
    async findServico(){
        return await repository.selectServico()
    }
}

module.exports = new ServicosService()