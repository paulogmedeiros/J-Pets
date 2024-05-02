const loginRepository = require("../repositorys/loginRepository.js")
const bcrypt = require("bcryptjs") 

class LoginService{
  
    async logar(data){
        const user = await loginRepository.selectLogar(data)

        let logado = bcrypt.compareSync(data.senha, user.senha);

        return user;
    }
}

module.exports = new LoginService()