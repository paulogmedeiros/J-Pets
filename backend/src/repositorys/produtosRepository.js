const { PrismaClient } = require('@prisma/client');
class ProdutosRepository {

    constructor() {
        this.prisma = new PrismaClient();
    }

    async insertProdutos(data) {
        return await this.prisma.produtos.create({
            data:{
                animal_id: data.animal_id,
                nome: data.nome
            }
        })
    }

    async selectProdutos(){
       return await this.prisma.produtos.findMany()
    }

    async selectProdutosMarcaModelos(){
        return await this.prisma.produtos.findMany({
            select:{
                nome:true,
                 marcas:{
                    select:{
                        nome:true,
                        modelos:{
                            select:{
                                nome:true,
                            }
                        }
                    }

                 }
            }
        })
    }
    
}

module.exports = new ProdutosRepository()