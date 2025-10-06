//Esse arquivo define a classe Produto- Esse arquivo define as própriedades e métodos

// ATRIBÚTOS:
        //nome → nome do produto
        //preco → preço unitário
        //quantidade → quantas unidades tem no estoque
        //estoqueMinimo → quantidade mínima antes de dar alerta
        
// MÉTODOS:
// get valorTotal() ----É um getter que nesse exemplo, usei para calcular automaticamente o valor total do produto... preço * quantidade (quando for chamado, por isso o return)
        
//É como a ficha de cada produto — com nome, preço, quantidade e regras para saber se está em falta.
     
export class Produto {
  constructor(
    public nome: string,
    public preco: number,
    public quantidade: number,
    public estoqueMinimo: number = 5 // estoque mínimo padrão
  ) {}

  get valorTotal(): number {
    return this.preco * this.quantidade;
  }

  estaAbaixoDoMinimo(): boolean {
    return this.quantidade < this.estoqueMinimo;
  }
}
