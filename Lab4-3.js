function one(){
    const Oboxs = document.querySelector('#Obox');
    document.getElementById('Obox').style.backgroundColor = "red";

}
function two(){
    const Iboxs = document.querySelector('#Ibox');
    document.getElementById('Ibox').style.backgroundColor = "pink";

}
function tree(){
    const Oboxs = document.querySelector('#Obox');
    document.getElementById('Obox').style.backgroundColor = "orange";
    const Iboxs = document.querySelector('#Ibox');
    document.getElementById('Ibox').style.backgroundColor = "yellow";
}
const Oboxs = document.querySelector('#Obox');
Oboxs.addEventListener('click',one);
const Iboxs = document.querySelector('#Ibox');
Iboxs.addEventListener('click',two);
const button = document.querySelector('#bt');
button.addEventListener('click',tree);
