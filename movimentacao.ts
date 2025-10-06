//Controle de Entradas e Saídas -
    //Nesse utilizei herança e polimofismo ( embora nao tenha subclasses ainda, está preparado para isso)
// MÉTODOS: Entrada, Saída e Entrada em Lote (adiciona várias unidades de um produto de uma vez só.)
    
//É como o funcionário que cuida e registra quando entra ou sai produto.


import { Estoque } from "./estoque";

export class Movimentacao {
  constructor(private estoque: Estoque) {}

  entrada(nome: string, quantidade: number): void {
    const produto = this.estoque.buscarProduto(nome);
    if (produto) produto.quantidade += quantidade;
    else console.log("Produto não encontrado!");
  }

  saida(nome: string, quantidade: number): void {
    const produto = this.estoque.buscarProduto(nome);
    if (produto) {
      produto.quantidade -= quantidade;
      if (produto.quantidade < 0) produto.quantidade = 0;
    } else {
      console.log("Produto não encontrado!");
    }
  }

  entradaLote(nome: string, quantidade: number, vezes: number): void {
    const produto = this.estoque.buscarProduto(nome);
    if (produto) produto.quantidade += quantidade * vezes;
    else console.log("Produto não encontrado!");
  }
}
