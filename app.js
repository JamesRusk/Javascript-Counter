let count = 0;

//SIMPLE VARIANT WITHOUT IF STATMENTS
// const value = document.getElementById('value');
// const increaseBtn = document.querySelector('.increase');
// const decreaseBtn = document.querySelector('.decrease');
// const resetBtn = document.querySelector('.reset');

// increaseBtn.addEventListener('click', function (e) {
//   count++;
//   value.textContent = count;
// });

// decreaseBtn.addEventListener('click', function () {
//   count--;
//   value.textContent = count;
// });

// resetBtn.addEventListener('click', function () {
//   count = 0;
//   value.textContent = count;
// });

// USING IF STATEMENTS
const value = document.getElementById('value');
const btn = document.querySelectorAll('.btn');

btn.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains('decrease')) {
      count--;
    } else if (styles.contains('increase')) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = 'green';
    }
    if (count < 0) {
      value.style.color = 'red';
    }
    if (count == 0) {
      value.style.color = 'black';
    }
    value.textContent = count;
  });
});
