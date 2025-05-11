// Definição de um componente de contador utilizando Web Components
class CounterButton extends HTMLElement {
    // Construtor inicializa o componente
    constructor() {
      super();
      // Cria um Shadow DOM para encapsular o estilo e a estrutura
      this.attachShadow({ mode: 'open' });
      
      // Inicializa o estado do contador
      this._count = 0;
      
      // Renderiza o componente
      this.render();
      
      // Adiciona os event listeners para os botões
      this.setupEventListeners();
    }
    
    // Método para renderizar o HTML e CSS do componente
    render() {
      this.shadowRoot.innerHTML = `
        <style>
          /* Estilização do componente */
          .counter-container {
            display: flex;
            align-items: center;
            gap: 10px;
            font-family: Arial, sans-serif;
          }
          button {
            padding: 8px 12px;
            font-size: 16px;
            cursor: pointer;
            border: none;
            border-radius: 4px;
            background-color: #007bff;
            color: white;
          }
          button:hover {
            background-color: #0056b3;
          }
          .count-display {
            font-size: 18px;
            font-weight: bold;
          }
        </style>
        <div class="counter-container">
          <button id="decrement">-</button>
          <span class="count-display">${this._count}</span>
          <button id="increment">+</button>
        </div>
      `;
    }
    
    // Método para configurar os listeners de eventos
    setupEventListeners() {
      const incrementButton = this.shadowRoot.getElementById('increment');
      const decrementButton = this.shadowRoot.getElementById('decrement');
      
      // Incrementa o contador ao clicar no botão "+"
      incrementButton.addEventListener('click', () => {
        this._count++;
        this.render();
      });
      
      // Decrementa o contador ao clicar no botão "-"
      decrementButton.addEventListener('click', () => {
        this._count--;
        this.render();
      });
    }
    
    // Getter e setter para o atributo count (opcional, para manipulação externa)
    get count() {
      return this._count;
    }
    
    set count(value) {
      this._count = parseInt(value, 10);
      this.render();
    }
    
    // Observa mudanças no atributo count
    static get observedAttributes() {
      return ['count'];
    }
    
    // Atualiza o contador quando o atributo count é alterado
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'count') {
        this.count = newValue;
      }
    }
  }
  
  // Registra o componente com um nome de tag personalizado
  customElements.define('counter-button', CounterButton);