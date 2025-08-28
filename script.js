// Aguarda o carregamento completo do conteúdo da página antes de executar o script.
document.addEventListener('DOMContentLoaded', () => {

    // Seleciona os elementos do HTML com os quais vamos interagir.
    const valorInput = document.getElementById('valor');
    const calcularBtn = document.getElementById('calcular');
    const resultadoP = document.getElementById('resultado');

    // Adiciona um "ouvinte" de evento para o clique no botão.
    calcularBtn.addEventListener('click', () => {
        // Pega o valor digitado no campo, converte para um número de ponto flutuante (decimal).
        const valorInserido = parseFloat(valorInput.value);
        let tempoPermanencia = 0;
        let troco = 0;
        let mensagem = '';

        // Verifica se o valor inserido é um número válido.
        if (isNaN(valorInserido) || valorInserido <= 0) {
            mensagem = 'Por favor, insira um valor válido.';
        } else if (valorInserido >= 3.00) {
            tempoPermanencia = 120;
            troco = valorInserido - 3.00;
            mensagem = `Tempo de permanência: ${tempoPermanencia} minutos (Máximo).`;
        } else if (valorInserido >= 1.75) {
            tempoPermanencia = 60;
            troco = valorInserido - 1.75;
            mensagem = `Tempo de permanência: ${tempoPermanencia} minutos.`;
        } else if (valorInserido >= 1.00) {
            tempoPermanencia = 30;
            troco = valorInserido - 1.00;
            mensagem = `Tempo de permanência: ${tempoPermanencia} minutos.`;
        } else {
            mensagem = 'Valor insuficiente. O mínimo é R$ 1,00.';
        }

        
        if (troco > 0) {
            mensagem += ` Troco: R$ ${troco.toFixed(2).replace('.', ',')}.`;
        }

        resultadoP.textContent = mensagem;
    });
});