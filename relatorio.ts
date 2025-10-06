// Gera relatóros do estoque atual. (Em algum momento irei fazer um histórico de movimentações também)
// MÉTODOS: gerarRelatorio() / gerarResumoEstoque()
        
//Seria como um setor de contabilidade que mostra o que tem, quanto vale, e o que precisa ser reposto.


import { Estoque } from "./estoque";

export class Relatorio {
  private estoque: Estoque | null = null; // Initialize as null, update as needed

  constructor(estoque?: Estoque) {
    if (estoque) {
      this.estoque = estoque;
    }
  }

  gerarRelatorio(): void {
    console.log("\n=== RELATÓRIO DE ESTOQUE ===");
    if (!this.estoque) {
      console.log("Estoque não está disponível.");
      return;
    }

    const produtos = this.estoque.getProdutos();
    if (produtos.length === 0) {
      console.log("Nenhum produto cadastrado para gerar relatório.");
      return;
    }

    produtos.forEach((p) => {
      if (p && p.nome && p.quantidade != null && p.valorTotal != null) {
        console.log(
          `Produto: ${p.nome} | Quantidade: ${p.quantidade} | Valor total: R$${p.valorTotal.toFixed(2)}`
        );
      }
    });

    console.log(`\n💰 Valor total do estoque: R$${this.estoque.calcularValorTotal().toFixed(2)}\n`);
  }

  gerarResumoEstoque(): void {
    if (!this.estoque) {
      console.log("\nEstoque não está disponível.");
      return;
    }

    console.log("\nValor total do estoque: R$" + this.estoque.calcularValorTotal().toFixed(2));

    const baixos = this.verificarEstoqueBaixo();
    if (baixos.length > 0) {
      console.log("\nProdutos abaixo do estoque mínimo:");
      baixos.forEach((p) => console.log(`- ${p.nome} (Qtd: ${p.quantidade})`));
    } else {
      console.log("\nNenhum produto abaixo do estoque mínimo.");
    }
  }

  private verificarEstoqueBaixo(): { nome: string; quantidade: number }[] {
    if (!this.estoque) {
      return [];
    }
    return this.estoque.getProdutos()
      .filter((p) => p && p.estaAbaixoDoMinimo())
      .map((p) => ({ nome: p.nome, quantidade: p.quantidade }));
  }
}