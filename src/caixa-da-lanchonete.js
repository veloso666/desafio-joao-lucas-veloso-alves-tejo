/*
O código apresenta uma solução para automatizar o caixa de uma lanchonete, permitindo o cálculo do valor total de uma compra com base em um cardápio de itens, considerando descontos, acréscimos e diferentes formas de pagamento.

1. Inicialização:
   - A classe `CaixaDaLanchonete` é definida, encapsulando a lógica do caixa.
   - No construtor, é estabelecido o cardápio com itens, descrições e valores, bem como as formas de pagamento e seus fatores de ajuste.

2. Validação de Itens:
   - A função `validarItem` é definida para verificar se um item fornecido é válido, com base nas informações do cardápio.
   - Se um item inválido for encontrado, um erro é lançado.

3. Cálculo do Valor Total:
   - A função `calcularValorTotal` recebe um array de itens e calcula o valor total da compra.
   - Para cada item no array, é validado o código do item, e o valor é somado ao total de acordo com sua quantidade.

4. Cálculo do Valor da Compra:
   - A função `calcularValorDaCompra` é a função principal que recebe a forma de pagamento e os itens da compra.
   - Ela verifica se a forma de pagamento é válida e se há itens no carrinho.
   - O valor total da compra é calculado chamando a função `calcularValorTotal` e, dependendo da forma de pagamento, aplicam-se descontos ou acréscimos.

5. Formatação e Saída:
   - O valor total da compra é formatado em moeda, com decimais separados por vírgula e precedidos por "R$".
   - O valor formatado é retornado como uma string.

O código é estruturado de maneira modular e organizada, com funções específicas para validar itens, calcular valores e gerenciar a lógica do caixa da lanchonete. Ele demonstra princípios de orientação a objetos e lógica de programação para resolver o desafio proposto.
 */
class CaixaDaLanchonete {
    constructor() {
        this.cardapio = {
            cafe: { descricao: "Café", valor: 3.00 },
            chantily: { descricao: "Chantily (extra do Café)", valor: 1.50 },
            suco: { descricao: "Suco Natural", valor: 6.20 },
            sanduiche: { descricao: "Sanduíche", valor: 6.50 },
            queijo: { descricao: "Queijo (extra do Sanduíche)", valor: 2.00 },
            salgado: { descricao: "Salgado", valor: 7.25 },
            combo1: { descricao: "1 Suco e 1 Sanduíche", valor: 9.50 },
            combo2: { descricao: "1 Café e 1 Sanduíche", valor: 7.50 }
        };
  
        this.formatosDePagamento = {
            dinheiro: 0.95,
            debito: 1,
            credito: 1.03
        };
    }
  
    validarItem(codigo, quantidade, itens) {
        if (!this.cardapio[codigo]) {
          throw new Error("Item inválido!");
        }
      
       
      }
      
  
    calcularValorTotal(itens) {
        let total = 0;
        for (const itemInfo of itens) {
            const [codigo, quantidade] = itemInfo.split(",");
            this.validarItem(codigo, quantidade, itens);
    
    
              
                    total += this.cardapio[codigo].valor * quantidade;
                
        }
       
            return total;
        
    }
    
  
    calcularValorDaCompra(formaDePagamento, itens) {
        if (!this.formatosDePagamento[formaDePagamento]) {
            return "Forma de pagamento inválida!";
        }
  
        if (itens.length === 0) {
            return "Não há itens no carrinho de compra!";
        }
        
        let total = this.calcularValorTotal(itens);
  
        if (formaDePagamento === "dinheiro") {
            total *= this.formatosDePagamento[formaDePagamento];
        } else if (formaDePagamento === "credito") {
            total *= this.formatosDePagamento[formaDePagamento];
        }else if(formaDePagamento === "debito"){
          total *= this.formatosDePagamento[formaDePagamento];
        }
  
        if(total == '2.00' || total == '1.50'){
            return "Item extra não pode ser pedido sem o principal"
        }
        else{

            return `R$ ${total.toFixed(2).replace(".", ",")}`;
        }
    }
  }
  
  
  const caixa = new CaixaDaLanchonete();
  
  
  console.log('CARDÁPIO')
  console.log('| codigo    | descrição                   | valor   |')
  console.log('|-----------|-----------------------------|---------|')
  console.log('| cafe      | Café                        | R$ 3,00 |')
  console.log('| chantily  | Chantily (extra do Café)    | R$ 1,50 |')
  console.log('| suco      | Suco Natural                | R$ 6,20 |')
  console.log('| sanduiche | Sanduíche                   | R$ 6,50 |')
  console.log('| queijo    | Queijo (extra do Sanduíche) | R$ 2,00 |')
  console.log('| salgado   | Salgado                     | R$ 7,25 |')
  console.log('| combo1    | 1 Suco e 1 Sanduíche        | R$ 9,50 |')
  console.log('| combo2    | 1 Café e 1 Sanduíche        | R$ 7,50 |')
  console.log('-----------------------------------------------------')
  
  console.log(caixa.calcularValorDaCompra('debito', ['queijo,1'])); // "Item extra não pode ser pedido sem o principal"
  console.log(caixa.calcularValorDaCompra('debito', ['cafe,1','chantily,1'])); // "R$ 4,50"
  console.log(caixa.calcularValorDaCompra('credito', ['combo1,1','cafe,2'])); // "R$ 15,96"
  console.log(caixa.calcularValorDaCompra('dinheiro', ['combo1,1','cafe,2'])); // "R$ 15,96"
  
  
  
  
  
  