let vetor = [];

function adicionarValor() {
    const valorInput = document.getElementById('valor');
    const valor = parseFloat(valorInput.value);

    if (!isNaN(valor)) {
        vetor.push(valor);
        atualizarDisplay();  // Atualiza os elementos de exibição
    }

    valorInput.value = '';
    valorInput.focus();
}

function atualizarDisplay() {
   
    document.getElementById('valoresVetor').textContent = JSON.stringify(vetor);
    
   
    document.getElementById('mediaValores').textContent = calcularMedia(vetor).toFixed(2);
}

function calcularMedia(arr) {
  
    if (arr.length === 0) return 0;
    const soma = arr.reduce((acc, curr) => acc + curr, 0);
    const media = soma / arr.length;
    return media;
}
