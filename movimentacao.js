"use strict";
//Histórico de entradas e saídas -
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movimentacao = void 0;
class Movimentacao {
    constructor(estoque) {
        this.estoque = estoque;
    }
    entrada(nome, quantidade) {
        const produto = this.estoque.buscarProduto(nome);
        if (produto)
            produto.quantidade += quantidade;
    }
    saida(nome, quantidade) {
        const produto = this.estoque.buscarProduto(nome);
        if (produto) {
            produto.quantidade -= quantidade;
            if (produto.quantidade < 0)
                produto.quantidade = 0;
        }
    }
    entradaLote(nome, quantidade, vezes) {
        const produto = this.estoque.buscarProduto(nome);
        if (produto)
            produto.quantidade += quantidade * vezes;
    }
}
exports.Movimentacao = Movimentacao;
