var i=0; // indice de la primera foto a mostrar

// lista de fotos que queremos mostrar en la galeria
var fotos=[
    'imagenes/eiffel.jpg',
    'imagenes/hotel.jpg',
    'imagenes/galeria.jpg',
    'imagenes/bridge.jpg',
    'imagenes/pink.jpg',
];

// funcion que muestra las fotos en las imagenes de la galeria
function mostrar(){
    // recupera las fotos en las imagenes de la galeria
    let imagenes = document.querySelectorAll('#galeria img');

    // coloca las fotos en las imagenes
    for(let j=0; j<imagenes.length; j++)
        imagenes[j].src = fotos[(i+j) % fotos.length];
    }

   
    //desplaza a la izquierda
    function avanzar(){
        i = (i + 1) % fotos.length;   //calcula el nuevo indice
        mostrar();              // muestra las fotos
    }

    //desplaza a la derecha
    function retroceder(){
        i=((i-1)+fotos.length)%fotos.length; // calcula el nuevo indice
        mostrar();                  // muestra las fotos
    }

    // cuando cargue completamente el documento
    window.onload = function(){
         // comportamiento de los botones
         botonNext.addEventListener('click' , avanzar);
         botonBack.addEventListener('click' , retroceder);

         mostrar();                        // muestra las fotos iniciales
         setInterval(avanzar, 3000); //programa el avance automatico
         
    }

  window.onload = function () {

    const botonNext = document.getElementById("botonNext");
    const botonBack = document.getElementById("botonBack");

    botonNext.addEventListener('click', avanzar);
    botonBack.addEventListener('click', retroceder);

    mostrar();
    setInterval(avanzar, 3000);

  };
    
