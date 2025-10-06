"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Relatorio = void 0;
class Relatorio {
    constructor(estoque) {
        this.estoque = estoque;
    }
    gerarRelatorio() {
        const produtos = this.estoque.listarProdutos();
        console.log("\n=== RELATÓRIO DE ESTOQUE ===");
        produtos.forEach(p => {
            console.log(`${p.nome} - Qtd: ${p.quantidade} - R$${p.preco.toFixed(2)} - Total: R$${p.valorTotal().toFixed(2)}`);
        });
        console.log("\nValor total do estoque: R$" + this.estoque.valorTotalEstoque().toFixed(2));
        const baixos = this.estoque.verificarEstoqueBaixo();
        if (baixos.length > 0) {
            console.log("\n⚠️ Produtos abaixo do estoque mínimo:");
            baixos.forEach(p => console.log(`- ${p.nome} (Qtd: ${p.quantidade})`));
        }
        else {
            console.log("\n✅ Nenhum produto abaixo do estoque mínimo.");
        }
    }
}
exports.Relatorio = Relatorio;
