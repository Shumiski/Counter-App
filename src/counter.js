export function setupCounter() {
  const counterIncreaseEL = document.querySelector('.counter__button--increase');
  const counterDecreaseEL = document.querySelector('.counter__button--decrease');
  const counterResetEL = document.querySelector('.counter__reset-buton');
  const element = document.querySelector('.counter__value');
  let count = 0;
  
  counterIncreaseEL.addEventListener('click', () => {
    console.log('increase');
    count++;
    element.textContent = count;
  });
  
  counterDecreaseEL.addEventListener('click', () => {
    console.log('decrease');
    if (count > 0) {
      count--;
      element.textContent = count;
    }
  });

  counterResetEL.addEventListener('click', () => {
    console.log('reset');
    count = 0;
    element.textContent = count;
  })
}
