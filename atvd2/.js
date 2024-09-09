let vetor = [];

function adicionarValor() {
    // Pega o valor do input
    const valorInput = document.getElementById('valor');
    const valor = parseFloat(valorInput.value);

    // Se o valor for um número válido, adiciona ao vetor
    if (!isNaN(valor)) {
        vetor.push(valor);
        atualizarDisplay();  // Atualiza os elementos de exibição
    }

    // Limpa o input e foca novamente para o próximo valor
    valorInput.value = '';
    valorInput.focus();
}

function atualizarDisplay() {
    // Atualiza o elemento que exibe os valores do vetor
    document.getElementById('valoresVetor').textContent = JSON.stringify(vetor);
    
    // Atualiza o elemento que exibe a média dos valores
    document.getElementById('mediaValores').textContent = calcularMedia(vetor).toFixed(2);
}

function calcularMedia(arr) {
    // Se o vetor estiver vazio, retorna 0
    if (arr.length === 0) return 0;
    
    // Soma todos os elementos do vetor
    const soma = arr.reduce((acc, curr) => acc + curr, 0);
    
    // Calcula a média (soma / quantidade de elementos)
    const media = soma / arr.length;

    return media;
}
