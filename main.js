"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const produto_1 = require("./produto");
const estoque_1 = require("./estoque");
const movimentacao_1 = require("./movimentacao");
const relatorio_1 = require("./relatorio");
const estoque = new estoque_1.Estoque();
const movimentacao = new movimentacao_1.Movimentacao(estoque);
const relatorio = new relatorio_1.Relatorio(estoque);
// Adicionando produtos
estoque.adicionarProduto(new produto_1.Produto("Mouse", 50, 10));
estoque.adicionarProduto(new produto_1.Produto("Teclado", 100, 3));
estoque.adicionarProduto(new produto_1.Produto("Monitor", 800, 6));
// Movimentações
movimentacao.entrada("Teclado", 5);
movimentacao.saida("Mouse", 2);
movimentacao.entradaLote("Monitor", 1, 3); // lote de entrada
// Gerar relatório
relatorio.gerarRelatorio();
