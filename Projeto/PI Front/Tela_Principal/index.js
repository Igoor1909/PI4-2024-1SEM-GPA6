
// document.addEventListener('DOMContentLoaded', () => {
//     const burger = document.querySelector('.burger');
//     const navLinks = document.querySelector('.nav-links');
//     const closeButton = document.querySelector('.popup .close');

  
//     // Função para alternar o menu
//     function toggleMenu() {
//       navLinks.classList.toggle('active');
//       burger.classList.toggle('toggle');
//     }
  
//     // Evento de clique para o burger
//     burger.addEventListener('click', toggleMenu);
//   });
  
//   // Código para abrir o pop-up de cadastro de produto
//   document.getElementById('btnCadastrarProduto').addEventListener('click', function() {
//     document.getElementById('popupCadastro').style.display = 'block';
//   });
  
//    // Evento de clique para o botão 'X' para fechar o pop-up
//    closeButton.addEventListener('click', () => {
//     document.getElementById('popupCadastro').style.display = 'none';
//   });

//   // Código para fechar o pop-up e criar um card de produto
//   document.getElementById('formProduto').addEventListener('submit', function(event) {
//     event.preventDefault();
    
//     // Obter os valores do formulário
//     var nome = document.getElementById('nomeProduto').value;
//     var descricao = document.getElementById('descricaoProduto').value;
//     var preco = document.getElementById('precoProduto').value;
    
//     // Criar o card do produto
//     var card = document.createElement('div');
//     card.classList.add('card');
//     card.innerHTML = '<h3>' + nome + '</h3><p>' + descricao + '</p><p>Preço: R$' + preco + '</p>';
    
//     // Adicionar o card na página
//     document.getElementById('produtosContainer').appendChild(card);
    
//     // Fechar o pop-up
//     document.getElementById('popupCadastro').style.display = 'none';
    
//     // Limpar o formulário
//     document.getElementById('formProduto').reset();
//   });
  
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const closeButton = document.querySelector('.popup .close');
  
    // Função para alternar o menu
    function toggleMenu() {
      navLinks.classList.toggle('active');
      burger.classList.toggle('toggle');
    }
  
    // Evento de clique para o burger
    burger.addEventListener('click', toggleMenu);
  
    // Evento de clique para o botão 'X' para fechar o pop-up
    closeButton.addEventListener('click', () => {
      document.getElementById('popupCadastro').style.display = 'none';
    });
  
    // Código para abrir o pop-up de cadastro de produto
    document.getElementById('btnCadastrarProduto').addEventListener('click', function() {
      document.getElementById('popupCadastro').style.display = 'block';
    });
  
    // Código para fechar o pop-up e criar um card de produto
    document.getElementById('formProduto').addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Obter os valores do formulário
      var nome = document.getElementById('nomeProduto').value;
      var descricao = document.getElementById('descricaoProduto').value;
      var preco = document.getElementById('valorUnidadeProduto').value;
      var marca = document.getElementById('marcaProduto').value;
      var quantidadeInicial = document.getElementById('quantidadeInicialProduto').value;
      // Adicione aqui a lógica para capturar e processar a imagem do produto
  
      // Criar o card do produto
      var card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = '<h3>' + nome + '</h3><p>' + descricao + '</p><p>Marca: ' + marca + '</p><p>Preço: R$' + preco + '</p><p>Quantidade Inicial: ' + quantidadeInicial + '</p>';
      
      // Adicionar o card na página
      document.getElementById('produtosContainer').appendChild(card);
      
      // Fechar o pop-up
      document.getElementById('popupCadastro').style.display = 'none';
      
      // Limpar o formulário
      document.getElementById('formProduto').reset();
    });
  });
  