const bodyElement = document.querySelector("body")


bodyElement.addEventListener('mousemove' , (event)=>{

    const Xposition = event.offsetX
    const Yposition = event.offsetY  
   const SpanElemet = document.createElement("span");
   SpanElemet.style.left = Xposition + "0.5px"
   SpanElemet.style.top = Yposition + "0.5px"
   bodyElement.appendChild(SpanElemet)
    const size = Math.random()*100
   SpanElemet.style.height = size + "px"
   SpanElemet.style.width = size + "px"
   setTimeout(() => {
    SpanElemet.remove();
   }, 3000);
});

