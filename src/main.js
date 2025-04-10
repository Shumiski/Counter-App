import './style.css'

import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
 <div class="counter">
      <h1 class="counter__title">Counter</h1>
      <h2 class="counter__subtitle">Use this to count your coffee cups</h2>
      <span class="counter__value">0</span>
      <button class="counter__reset-buton">
        <i class="fas fa-sync-alt counter__reset-icon"></i>
      </button>

      <div class="counter__buttons">
        <button class="counter__button counter__button--decrease">
          <i class="fas fa-minus counter__icon counter__icon--minus"></i>
        </button>
        <button class="counter__button counter__button--increase">
          <i class="fas fa-plus counter__icon counter__icon--plus"></i>
        </button>
        
      </div>
    </div>
`

setupCounter(document.querySelector('.counter__value'));
