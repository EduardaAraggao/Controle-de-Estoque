"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estoque = void 0;
class Estoque {
    constructor() {
        this.produtos = [];
    }
    adicionarProduto(produto) {
        this.produtos.push(produto);
    }
    removerProduto(nome) {
        this.produtos = this.produtos.filter(p => p.nome !== nome);
    }
    listarProdutos() {
        return this.produtos;
    }
    buscarProduto(nome) {
        return this.produtos.find(p => p.nome === nome);
    }
    valorTotalEstoque() {
        return this.produtos.reduce((total, p) => total + p.valorTotal(), 0);
    }
    verificarEstoqueBaixo() {
        return this.produtos.filter(p => p.estaAbaixoDoMinimo());
    }
}
exports.Estoque = Estoque;
