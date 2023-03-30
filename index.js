const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    
    const timer = setInterval(function() {

        let secondsThis = seconds%60;
        let minutes = seconds/60%60;
        let hour = seconds/60/60%60;

        if (seconds <= 0) {
            clearInterval(timer);
            timerEl.innerHTML = 'hh:mm:ss';
        } else {
            const strTimer = `${Math.trunc(hour) < 10 ? '0' + Math.trunc(hour) : Math.trunc(hour)} :
                              ${Math.trunc(minutes) < 10 ? '0' + Math.trunc(minutes) : Math.trunc(minutes)} :
                              ${secondsThis < 10 ? '0' + secondsThis : secondsThis}`;
            timerEl.innerHTML = strTimer;
        }

        --seconds;

    }, 1000);

  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
    const value = inputEl.value.replace(/\D+/g, '');
    inputEl.value = value;
  // Очистите input так, чтобы в значении
  // оставались только числа
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});