console.log('Olá mundo!');

// Define uma cor de fundo aleatória
function mudarFundo() {
    document.body.style.backgroundColor = gerarCorAleatoria();
}

// Função para criar um fundo com estrelas coloridas
function criarEstrela() {
    const estrela = document.createElement('div');
    const tamanho = Math.random() * 10 + 5; // Tamanho entre 5px e 15px
    estrela.style.position = 'absolute';
    estrela.style.width = `${tamanho}px`;
    estrela.style.height = `${tamanho}px`;
    estrela.style.backgroundColor = gerarCorAleatoria(); // Cor aleatória
    estrela.style.borderRadius = '50%';
    estrela.style.opacity = Math.random(); // Opacidade aleatória
    estrela.style.left = `${Math.random() * window.innerWidth}px`;
    estrela.style.top = `${Math.random() * window.innerHeight}px`;
    estrela.style.animation = `spin ${Math.random() * 10 + 5}s linear infinite`; // Animação de rotação

    document.body.appendChild(estrela);

    // Remove a estrela após um tempo
    setTimeout(() => {
        document.body.removeChild(estrela);
    }, 10000); // Tempo total para a estrela existir
}

// Cria uma estrela a cada 500ms
setInterval(criarEstrela, 500);

// Função para criar círculos coloridos
function criarCirculo() {
    let circulo = document.createElement('div');
    let tamanho = Math.random() * 100 + 20; // Tamanho aleatório entre 20px e 120px
    circulo.style.width = `${tamanho}px`;
    circulo.style.height = `${tamanho}px`;
    circulo.style.borderRadius = '50%'; // Para formar um círculo
    circulo.style.position = 'absolute';
    circulo.style.backgroundColor = gerarCorAleatoria(); // Cor aleatória
    circulo.style.left = `${Math.random() * (window.innerWidth - tamanho)}px`;
    circulo.style.top = `${Math.random() * (window.innerHeight - tamanho)}px`;
    circulo.style.transition = 'transform 0.5s, opacity 0.5s'; // Transição suave

    document.body.appendChild(circulo);

    // Animação de desaparecimento
    setTimeout(() => {
        circulo.style.transform = 'scale(0)';
        circulo.style.opacity = '0';
    }, 100); // Aguarda um pouco antes de começar a desaparecer

    // Remove o círculo após a animação
    setTimeout(() => {
        document.body.removeChild(circulo);
    }, 1000); // Tempo total para desaparecer
}

// Função para gerar uma cor aleatória
function gerarCorAleatoria() {
    const letras = '0123456789ABCDEF';
    let cor = '#';
    for (let i = 0; i < 6; i++) {
        cor += letras[Math.floor(Math.random() * 16)];
    }
    return cor;
}

// Criar um círculo a cada 500ms
setInterval(criarCirculo, 500);

// Mudando a cor de fundo a cada 3 segundos
setInterval(mudarFundo, 3000);

// Criando um novo elemento de texto
let novoElemento = document.createElement('h1');
novoElemento.innerText = 'Hello, World! English! (Inglês) Ok?!';
document.body.appendChild(novoElemento);

// Estilizando o texto
novoElemento.style.position = 'absolute';
novoElemento.style.top = '20px';
novoElemento.style.left = '20px';
novoElemento.style.color = 'white'; // Cor do texto
novoElemento.style.fontSize = '24px';
novoElemento.style.zIndex = '10'; // Coloca o texto acima dos círculos

// Estilos para a animação de rotação
const estiloEstrelas = document.createElement('style');
estiloEstrelas.innerHTML = `
@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
`;
document.head.appendChild(estiloEstrelas);
