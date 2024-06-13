

// Listar todas as imagens no console
const imagens = document.querySelectorAll('img');
imagens.forEach((img, index) => {
    console.log(`Imagem ${index + 1}:`, img.src);
});

// Incorporar texto 
const parisParagraph = document.getElementById('paris-paragraph');
parisParagraph.textContent += ' É um lugar cheio de cultura, história e beleza arquitetônica. Não é à toa que é um dos destinos mais desejados pelos viajantes ao redor do mundo.';
