class ExcecaoGenericaDeErro extends Error {
    constructor(message) {
        super(message);
        this.name = 'ExcecaoGenericaDeErro';
        this.status = 400
    }
}

module.exports = {
    ExcecaoGenericaDeErro
};