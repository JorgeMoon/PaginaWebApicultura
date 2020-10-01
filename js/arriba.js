/* BOTON ARRIBA */
window.onscroll = function(){
   
     if(document.documentElement.scrollTop > 750){
        document.querySelector('.go-up-container').classList.add('btn-show');
    }else{
        document.querySelector('.go-up-container').classList.remove('btn-show');
    } 
}
document.querySelector('.go-up-container')
.addEventListener('click', () =>{
    window.scrollTo({
        top:0,
        behavior:'smooth',
    });
});

/* BOTON SWITCH */

const btnSwitch =  document.querySelector('#switch');

btnSwitch.addEventListener('click',() =>{
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
    
    
} ) 

/* $('.svg-inject').svgInject(); */
/* DARK MODO FONDO BLANCO */
 var darky = document.getElementByID('icoDark');        /* defino mi variable */

if(body.classList.contains('dark')==true){
    darky.classList.add('.svg-inject-ico');
}
else{
    darky.classList.remove('.svg-inject-ico');
} 
 