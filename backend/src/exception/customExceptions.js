class ExcecaoIdNaoEncontrado extends Error {
    constructor(mensage) {
        super(mensage);
        this.name = 'ExcecaoIdNaoEncontrado';
        this.status = 400
    }
}

module.exports = {
    ExcecaoIdNaoEncontrado
};