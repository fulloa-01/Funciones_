var colorx;

window.onload = function(){
    colorPresionado();
 
}

function colorPresionado(){
    document.addEventListener('keydown', function (event) {
        if (event.key === 'a') {
            /* Cambiar a color 1 */
            colorx = "green"

        } else if (event.key === 's') {
            /* Cambiar a color 2 */
            colorx = "blue"
            
        } else if (event.key === 'd') {
            /* Cambiar a color 3 */
            colorx = "yellow"
        }
        console.log(colorx)
        })
        
}

function colorFondo(idNum){
    var identificador = document.getElementById(idNum)
    identificador.style.backgroundColor = colorx
}

