'use strict'


const grande  = document.querySelector('.grande')
const punto   = document.querySelectorAll('.punto')


// Cuando CLICK en punto
    //saber la posicion de punto
    //aplicar transform translateX a grande
    //quitar clase activo a punto
    //añadir activo a punto clickeado


punto.forEach( ( cadaPunto, i )=> {
    punto[i].addEventListener('click',()=>{


        let posicion = i
        // posicion=0 transformX= 0
        //posicion=1 transformZ= -50%
        //operacion = posicion * -50%
        let operacion = posicion * -50


        grande.style.transform = `translateX(${ operacion }%`
       
        punto.forEach((cadaPunto, i)=>{
            punto[i].classList.remove('activo')
        })
        punto[i].classList.add('activo')
    })
})
