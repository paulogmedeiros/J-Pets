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
        // return await this.prisma.produtos.findMany({
        //     select:{
        //         id:true,
        //         nome:true,
        //          marcas:{
        //             select:{
        //                 id:true,
        //                 nome:true,
        //                 modelos:{
        //                     select:{
        //                         id:true,
        //                         nome:true,
        //                     }
        //                 }
        //             }

        //          }
        //     }
        // })
        return await this.prisma.modelos.findMany({
            select:{
                id:true,
                nome:true,
                marcas:{
                    select:{    
                        id:true,
                        nome:true,
                        produtos:{
                            select:{
                                id:true,
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