export default function initmodal(){

const botaoAbrir = document.querySelector('[data-modal="abrir"]');
const botaoFechar = document.querySelector('[data-modal="fechar"]');
const containerModal = document.querySelector('[data-modal="container"]');

if(botaoAbrir && botaoFechar && containerModal){

  
function toggleModal(e){

  e.preventDefault();
  containerModal.classList.toggle('ativo');

}
function cliqueForaModal(e){

if(e.target === this){
  toggleModal(e);
}
}

botaoAbrir.addEventListener('click',toggleModal);
botaoFechar.addEventListener('click',toggleModal);
containerModal.addEventListener('click',cliqueForaModal);

}
}

