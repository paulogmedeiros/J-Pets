const { PrismaClient } = require('@prisma/client');
class EmpresasRepository {

    constructor() {
        this.prisma = new PrismaClient();
    }

    // retorno todas as empresas
    async selectEmpresas() {
        return await this.prisma.empresas.findMany({
            select: {
                id: true,
                nome_fantasia: true,
                status_pagamento: true
            }
        })
    }

    // retorno a empresa que tem esse cnpj
    async selectEmpresaPorCNPJ(cnpj) {
        return await this.prisma.empresas.findFirst({
            where: {
                cnpj: cnpj
            }
        })
    }

    async selectCupom(id) {
        return await this.prisma.empresas.findFirst({
            where: {
                id: id
            },
            select: {
                nome_cupom: true
            }
        })
    }

    async selectEmpresaPorId(id) {
        return await this.prisma.empresas.findFirst({
            where: {
                id: id
            }
        })
    }

    async selectEmpresasPorServicoId(id) {
        return await this.prisma.empresas.findMany({
            where: {
                empresas_servicos: {
                    some: {
                        servico_id: id
                    }
                }
            }
        })
    }

    async selectEmpresaPorModeloId(modeloId) {
        return await this.prisma.empresas.findMany({
            where: {
                empresas_modelos: {
                    some: {
                        modelo_id: modeloId
                    }
                }
            }
        })
    }
    
    // retorno a empresa que tem esse nome fantasia
    async selectEmpresaPorNomeFantasia(nomeFantasia) {
        return await this.prisma.empresas.findFirst({
            where: {
                nome_fantasia: nomeFantasia
            }
        })
    }

    async selectEmpresasPorId(id) {
        return await this.prisma.empresas.findFirst({
            where: {
                id
            }
        })
    }

    async selectEmpresaPorTelefone(telefone) {
        return await this.prisma.empresas.findFirst({
            where: {
                telefone
            }
        })
    }

    // criando nova empresa
    async insertEmpresas(data) {

        return await this.prisma.$transaction(async (prismaTx) => {
            const login = await prismaTx.login.create({
                data: {
                    email: data.email,
                    senha: data.senha,
                    tipo: 'EMP',
                }
            })

            await prismaTx.empresas.create({
                data: {
                    cnpj: data.cnpj,
                    nome_fantasia: data.nomeFantasia,
                    login_id: login.id,
                }
            })
        })

    }

    async insertCriarInformacoesEmpresa(data, id) {
        return await this.prisma.empresas.update({
            where: {
                id: id
            },
            data: {
                cep: data.cep,
                rua: data.rua,
                bairro: data.bairro,
                cidade: data.cidade,
                uf: data.uf,
                telefone: data.telefone,
                numero_residencia: data.numeroResidencia,
                dia_semana_fim: data.diaSemanaFim,
                dia_semana_inicio: data.diaSemanaInicio,
                hora_abertura: data.horaAbertura,
                hora_fechamento: data.horaFechamento,
            }
        })
    }

    async updateCriarCupom(data, id) {
        return await this.prisma.empresas.update({
            where: {
                id: id
            },
            data: {
                porcentagem_cupom: data.porcentagemCupom,
                nome_cupom: data.nomeCupom
            },
            select: {
                nome_cupom: true,
                porcentagem_cupom: true
            }
        })
    }

    async updateCancelarAssinatura(id) {
        return await this.prisma.empresas.update({
            where: {
                id: id
            },
            data: {
                status_pagamento: false
            },
        })
    }

    async updateRemoverFotoPerfil(id) {
        return await this.prisma.empresas.update({
            where: {
                id: id
            },
            data: {
                foto_perfil: null
            },
        })
    }

    async updateStatus(id, status) {
        return await this.prisma.empresas.update({
            where: {
                id: id
            },
            data: {
                status_ativo: status
            },
        })
    }

    async updateExcluirCupom(id) {
        return await this.prisma.empresas.update({
            where: {
                id: id
            },
            data: {
                porcentagem_cupom: null,
                nome_cupom: null
            },
            select: {
                nome_cupom: true
            }
        })
    }

    async updateEmpresasImagem(id, foto_perfil) {
        return await this.prisma.empresas.update({
            where: {
                id: id
            },
            data: {
                foto_perfil
            }
        })
    }
}

module.exports = new EmpresasRepository()