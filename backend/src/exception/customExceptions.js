class ExcecaoGenericaDeErro extends Error {
    constructor(mensage) {
        super(mensage);
        this.name = 'ExcecaoGenericaDeErro';
        this.status = 400
    }
}

module.exports = {
    ExcecaoGenericaDeErro
};