const ServicosRepository = require("../repositorys/servicosRepository.js")

class ServicosService{
  
    async findServico(){
        return await ServicosRepository.selectServico()
    }
}

module.exports = new ServicosService()