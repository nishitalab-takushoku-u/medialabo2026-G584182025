function result(){
  let X = document.querySelector('input[name="left"]');
  let Y = document.querySelector('input[name="right"]');
  let x = Number(X.value);
  let y = Number(Y.value);
  let r = x + y;
  p.textContent = r;
}
let b = document.querySelector('button#calc');
let p = document.querySelector('span#answer');
b.addEventListener('click', result);