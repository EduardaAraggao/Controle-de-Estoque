// Esse arquivo gerencia os produtos e quantidades no estoque
      // Foi aplicado produtos com array 
    //MÉTODOS
        // adicionarProduto
        // buscarProduto
        // listarProdutos
        // calcularValorTotal
        
//É "guardião" do estoque — sabe o que tem, quanto vale, e avisa quando algo está acabando.
        
import { Produto } from "./produto";

export class Estoque {
  private produtos: Produto[] = [];

  adicionarProduto(produto: Produto): void {
    if (!produto || typeof produto.nome !== "string") {
      throw new Error("Produto inválido");
    }
    const existente = this.buscarProduto(produto.nome);
    if (existente) {
      existente.quantidade += produto.quantidade;
    } else {
      this.produtos.push(produto);
    }
  }

  buscarProduto(nome: string): Produto | undefined {
    if (!nome || typeof nome !== "string") {
      return undefined;
    }
    return this.produtos.find((p) => p.nome === nome);
  }

  listarProdutos(): void {
    if (!this.produtos || this.produtos.length === 0) {
      console.log("Nenhum produto cadastrado.");
      return;
    }
    console.log("\n=== LISTA DE PRODUTOS ===");
    this.produtos.forEach((p) => {
      if (!p || !p.nome || p.preco == null || p.quantidade == null || p.valorTotal == null) {
        console.log("Erro: Produto com dados inválidos.");
        return;
      }
      console.log(
        `Produto: ${p.nome} / Preço: R$${p.preco.toFixed(2)} / Quantidade: ${
          p.quantidade
        } | Valor total: R$${p.valorTotal.toFixed(2)}`
      );
      if (p.estaAbaixoDoMinimo()) {
        console.log(`  Atenção: o produto "${p.nome}" está abaixo do estoque mínimo!`);
      }
    });
  }

  calcularValorTotal(): number {
    if (!this.produtos || this.produtos.length === 0) {
      return 0;
    }
    return this.produtos.reduce((acc, p) => acc + (p.valorTotal || 0), 0);
  }

  getProdutos(): Produto[] {
    return [...this.produtos];
  }
}
