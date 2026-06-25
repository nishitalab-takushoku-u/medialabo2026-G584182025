function greeting() {
    p.textContent = (aisatu);
}
let b = document.querySelector('button#print');
let i = document.querySelector('input[name="shimei"]'); 
let p = document.querySelector('p#message');
let shimei = i.value;
let aisatu = 'こんにちは、' + shimei + 'さん';
b.addEventListener('click', greeting);