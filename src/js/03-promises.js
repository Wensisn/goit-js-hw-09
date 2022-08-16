import Notiflix from 'notiflix';

const refs = {
  form : document.querySelector('.form'),
  inpDelay : document.querySelector('input[name="delay"]'),
  inpStep : document.querySelector('input[name="step"]'),
  inpAmount : document.querySelector('input[name="amount"]'),
}

refs.form.addEventListener('submit', startAmounts);

function createPromise(position, delay) {
  return new Promise ((resolve , reject) => {
    const shouldResolve = Math.random() > 0.3;

  setTimeout(() => {
    if (shouldResolve) {
      resolve({position, delay})
    } else {
      reject({position, delay})
    }
  } , 2000)
  })
}

function startAmounts(e) {

  e.preventDefault();

  let delay = refs.inpDelay.valueAsNumber;
  const stepValue = refs.inpStep.valueAsNumber;
  const amountValue = refs.inpAmount.valueAsNumber;

  for (let i = 1; i <= amountValue; i++) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${i} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${i} in ${delay}ms`
        );
      });
    delay += stepValue;
  }
}


