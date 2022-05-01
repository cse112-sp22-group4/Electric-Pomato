class e extends HTMLElement{connectedCallback(){this.updateState()}updateState(){this.input.disabled?this.defaultMode():this.editMode()}colorTomatos(e,t){this.tomatos.forEach(((i,s)=>{i.classList.value=s<e?"".concat(t,"-tomato"):"white-tomato"}))}render(){this.input.disabled?this.colorTomatos(Number(this.input.value),"green"):this.colorTomatos(Number(this.input.value),"red")}handleClick(e){const{left:t,right:i}=this.querySelector(".slider-tomato-container").getBoundingClientRect();this.input.value=Math.min(Math.ceil((e.clientX-t+1)/((i-t)/5)),5)}handleMouseLeave(){this.colorTomatos(Number(this.input.value),"red")}handleMouseMove(e){const{left:t,right:i}=this.querySelector(".slider-tomato-container").getBoundingClientRect(),s=Math.min(Math.max(Math.ceil((e.clientX-t)/((i-t)/5)),1),5);this.colorTomatos(s,"red")}editMode(){this.render(),this.container.style.cursor="pointer",this.container.addEventListener("click",this.handleClick),this.container.addEventListener("mouseleave",this.handleMouseLeave),this.container.addEventListener("mousemove",this.handleMouseMove)}defaultMode(){this.render(),this.container.style.cursor="default",this.container.removeEventListener("click",this.handleClick),this.container.removeEventListener("mouseleave",this.handleMouseLeave),this.container.removeEventListener("mousemove",this.handleMouseMove)}constructor(){super(),this.appendChild(document.querySelector("#tomato-slider-template").content.cloneNode(!0)),this.input=this.firstElementChild,this.container=this.lastElementChild,this.tomatos=this.querySelectorAll(".slider-tomato > g"),this.input.style.display="none",this.handleClick=this.handleClick.bind(this),this.handleMouseMove=this.handleMouseMove.bind(this),this.handleMouseLeave=this.handleMouseLeave.bind(this);new MutationObserver((e=>{e.forEach((e=>{"disabled"===e.attributeName&&(console.log("disabled mutation"),this.updateState())}))})).observe(this.input,{attributes:!0})}}customElements.define("tomato-slider",e);