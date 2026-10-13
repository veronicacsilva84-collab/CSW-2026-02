// Exibe um espaço reservado quando a foto ainda não foi copiada.
const fallback = new URL('../imagens/placeholder.svg', document.currentScript.src).href;
document.querySelectorAll('img').forEach((imagem) => {
  function substituir() {
    imagem.dataset.arquivoOriginal = imagem.getAttribute('src');
    imagem.src = fallback;
    imagem.alt = 'Foto a adicionar: ' + imagem.alt;
  }
  imagem.addEventListener('error', substituir, { once: true });
  if (imagem.complete && imagem.naturalWidth === 0) substituir();
});
