function one(){
    bt1.removeEventListener('click',one);
    bt1.classList.add('hidden');
    bt2.classList.remove('hidden');
    
}
function two(){
    bt2.classList.add('hidden');
    bt3.classList.remove('hidden');
}
function three(){
    bt3.classList.add('hidden');
    bt2.classList.remove('hidden');
}
const bt1 = document.querySelector('#one');
bt1.addEventListener('click',one);
const bt2 = document.querySelector('#two');
bt2.addEventListener('click',two);
const bt3 = document.querySelector('#three');
bt3.addEventListener('click',three);
