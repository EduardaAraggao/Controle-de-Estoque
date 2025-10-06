// Arquivo mair importante do projeto, onde tudo é amarrado e o menu é exibido.
        // Integrei as classes aqui e criei o menu interativo.
// Usei a biblioteca prompt-sync para ajudar a entrada de dados no terminal.

//É como um painel de controle que o usuário escolhe o que quer fazer e o sistema executa.


import promptSync from "prompt-sync";
import { Estoque } from "./estoque";
import { Movimentacao } from "./movimentacao";
import { Produto } from "./produto";
import { Relatorio } from "./relatorio";

const prompt = promptSync({ sigint: true });
const estoque = new Estoque();
const movimentacao = new Movimentacao(estoque);

let opcao = 0;

do {
  console.log("\n===== MENU DO ESTOQUE =====");
  console.log("1 - Cadastrar produto");
  console.log("2 - Entrada de produto");
  console.log("3 - Saída de produto");
  console.log("4 - Entrada em lote");
  console.log("5 - Listar produtos");
  console.log("6 - Gerar relatório");
  console.log("0 - Sair");

  opcao = Number(prompt("Escolha uma opção: "));

  switch (opcao) {
    case 1: {
      const nome = prompt("Nome do produto: ");
      const preco = Number(prompt("Preço: "));
      const quantidade = Number(prompt("Quantidade: "));
      const estoqueMinimo = Number(prompt("Estoque mínimo: "));
      const produto = new Produto(nome, preco, quantidade, estoqueMinimo);
      estoque.adicionarProduto(produto);
      break;
    }

    case 2: {
      const nome = prompt("Nome do produto: ");
      const quantidade = Number(prompt("Quantidade a adicionar: "));
      movimentacao.entrada(nome, quantidade);
      break;
    }

    case 3: {
      const nome = prompt("Nome do produto: ");
      const quantidade = Number(prompt("Quantidade a remover: "));
      movimentacao.saida(nome, quantidade);
      break;
    }

    case 4: {
      const nome = prompt("Nome do produto: ");
      const quantidade = Number(prompt("Quantidade por lote: "));
      const vezes = Number(prompt("Número de lotes: "));
          movimentacao.entradaLote(nome, quantidade, vezes);
      break;
    }

    case 5:
      estoque.listarProdutos();
      break;

    case 6:
      gerarRelatorio(estoque);
      break;

    case 0:
      console.log("Saindo, até logo...");
      break;

    default:
      console.log("Ops! Opção inválida!");
  }
} while (opcao !== 0);
function gerarRelatorio(estoque: Estoque) {
  const relatorio = new Relatorio(estoque);
  relatorio.gerarRelatorio();
 
}

