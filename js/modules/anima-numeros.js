export default function initAnimaNumeros(){

  function animaNumeros(){

    const numeros = document.querySelectorAll('[data-numero]');
  
  
  numeros.forEach((numero)=>{
  
    const total = +numero.innerText;
    const incremento = Math.floor(total / 100);
  
    let start = 0;
    const timer = setInterval(()=>{
  
      start = start + incremento;
      numero.innerText = start;
    
  
      if(start > total){
        numero.innerText = total;
  
        clearInterval(timer);
      }
  
    },25 * Math.random());
   
  })
  
  }
  
  
  
  // O observador fica de olho em determinada parte do site. No caso a seção
  //Usamos no caso a mutação. Ele fica olhando  e caso ocorra o evento ele ativa as classes e eventos.
  
  function handleMutation(mutation){
  
    if(mutation[0].target.classList.contains('ativo'));
   
    {
  
    observer.disconnect();
     animaNumeros();
   
    }
   
   
   };
   
   const observerTarget = document.querySelector('.numeros');
   
   const observer = new MutationObserver(handleMutation);
   
   observer.observe(observerTarget, {attributes: true});
  
}


initAnimaNumeros();