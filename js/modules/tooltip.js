export default function initToolTip(){
  

  const tooltips = document.querySelectorAll('[data-tooltip]');


  tooltips.forEach((item)=>{
  
    item.addEventListener('mouseover', onmouseOver);
  
  });
  
  function onmouseOver(e){
  
  const tooltipBox = criarTooltipBox(this);
  tooltipBox.style.top = e.pageY + 20 + 'px';
  tooltipBox.style.left = e.pageX + 20 + 'px';
  
  onMouseMove.tooltipBox = tooltipBox;
  this.addEventListener('mousemove', onMouseMove);
  
  onMouseLeave.tooltipBox = tooltipBox;
  onMouseLeave.element = this;
  this.addEventListener('mouseleave', onMouseLeave);
  
  
  }
  
  const onMouseLeave = {
  
    handleEvent(e){
  
     this.tooltipBox.remove();
     this.element.removeEventListener('mouseleave', onMouseLeave);
     this.element.removeEventListener('mousemove', onMouseMove);
  
    }
  }
  
  //pésquise mais sobre este handle event. Neste caso, podemos passar um objeto na callback function;
  
  const onMouseMove = {
  
    handleEvent(e){
    
  this.tooltipBox.style.top = e.pageY + 'px';
  this.tooltipBox.style.left = e.pageX + 'px';
  
      
  
    }
  }
  
  function criarTooltipBox(element){
  
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
  
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  
  }


}

