class CalculadoraEstacionamento {
    constructor() {
        this.valorInput = document.getElementById('valor');
        this.calcularBtn = document.getElementById('calcular');
        this.resultadoDiv = document.getElementById('resultado');
        this.tempoElem = document.getElementById('tempo');
        this.trocoElem = document.getElementById('troco');
        this.erroElem = document.getElementById('mensagem-erro');
        
        this.configurarEventos();
    }
    
    configurarEventos() {
        this.calcularBtn.addEventListener('click', () => this.calcular());
        this.valorInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.calcular();
            }
        });
    }
    
    calcular() {
        const valor = parseFloat(this.valorInput.value);
        
        // Validar o valor inserido
        if (isNaN(valor) || valor < 1) {
            this.exibirErro();
            return;
        }
        
        // Calcular tempo e troco
        const { tempo, troco } = this.calcularTempoETroco(valor);
        
        // Exibir resultado
        this.exibirResultado(tempo, troco);
    }
    
    calcularTempoETroco(valor) {
        // A lógica foi corrigida para verificar qual faixa de tempo o valor inserido
        // pode comprar, checando do preço mais alto para o mais baixo.
        if (valor > 4.75) {
            return { tempo: 180, troco: valor - 4.75 };
        } else if (valor >= 4.75) {
            return { tempo: 150, troco: valor - 4.75 };
        } else if (valor >= 3.75) {
            return { tempo: 120, troco: valor - 3.75 };
        } else if (valor >= 2.75) {
            return { tempo: 90, troco: valor - 2.75 };
        } else if (valor >= 1.75) {
            return { tempo: 60, troco: valor - 1.75 };
        } else if (valor >= 1.00) {
            return { tempo: 30, troco: valor - 1.00 };
        }
    }
    
    exibirResultado(tempo, troco) {
        this.erroElem.style.display = 'none';
        
        this.tempoElem.textContent = `Tempo: ${tempo} minutos`;
        this.trocoElem.textContent = `Troco: R$ ${troco.toFixed(2)}`;
        
        this.resultadoDiv.style.display = 'block';
    }
    
    exibirErro() {
        this.resultadoDiv.style.display = 'none';
        this.erroElem.style.display = 'block';
    }
}

// Inicializar a aplicação quando o documento estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    new CalculadoraEstacionamento();
});