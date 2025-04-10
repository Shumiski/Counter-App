export function setupCounter() {
  const counterIncreaseEL = document.querySelector('.counter__button--increase');
  const counterDecreaseEL = document.querySelector('.counter__button--decrease');
  const counterResetEL = document.querySelector('.counter__reset-buton');
  const element = document.querySelector('.counter__value');
  const counterEL = document.querySelector('.counter');
  const counterSubtitleEL = document.querySelector('.counter__subtitle');
  let count = 0;
  
  counterIncreaseEL.addEventListener('click', () => {
    console.log('increase');
    if (count < 5) {
      count++;
      element.textContent = count;
    }
    changeColor();

  });
  
  counterDecreaseEL.addEventListener('click', () => {
    console.log('decrease');
    if (count > 0) {
      count--;
      element.textContent = count;
    }
    changeColor();

  });

  counterResetEL.addEventListener('click', () => {
    console.log('reset');
    count = 0;
    element.textContent = count;
    changeColor();

  });


  const changeColor = () => {
    if(count == 5) {
      counterEL.classList.add('counter__limit');
      element.classList.add('counter__limit');
      counterSubtitleEL.innerHTML = 'Limit Reached.<br> Buy a Pro Plan.';
      

      counterIncreaseEL.disabled = true;
      counterDecreaseEL.disabled = true;
    }else{
      counterEL.classList.remove('counter__limit');
      element.classList.remove('counter__limit');
      counterSubtitleEL.innerHTML = 'How many cups of coffee have you had today?';

      counterIncreaseEL.disabled = false;
      counterDecreaseEL.disabled = false;
    }
  }
  

}
