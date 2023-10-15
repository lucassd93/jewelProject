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
// gatos
function ajax_get(url, callback) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        console.log('responseText:' + xmlhttp.responseText);
        try {
          var data = JSON.parse(xmlhttp.responseText);
        } catch (err) {
          console.log(err.message + " in " + xmlhttp.responseText);
          return;
        }
        callback(data);
      }
    };
 
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
  }
 
  ajax_get('https://api.thecatapi.com/v1/images/search?size=full', function(data) {
    var html = '<img src="' + data[0]["url"] + '">';
    document.getElementById("image").innerHTML = html;
  });

