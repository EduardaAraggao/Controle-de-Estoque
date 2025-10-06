"use strict";
//Modelo dos produtos- Esse arquivo define as própriedades e métodos
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
// ATRIBÚTOS: 
//id → identificador único (a gente usa Date.now() no main)
//nome → nome do produto
//preco → preço unitário
//quantidade → quantas unidades tem no estoque
//estoqueMinimo → quantidade mínima antes de dar alerta
// MÉTODOS:
// get valorTotal() ----É um getter que nesse exemplo, usei para calcular automaticamente o valor total do produto... preço * quantidade (quando for chamado, por isso o return)
class Produto {
    constructor(nome, preco, quantidade, estoqueMinimo = 5) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
        this.estoqueMinimo = estoqueMinimo;
    }
    valorTotal() {
        return this.preco * this.quantidade;
    }
    estaAbaixoDoMinimo() {
        return this.quantidade < this.estoqueMinimo;
    }
}
exports.Produto = Produto;
