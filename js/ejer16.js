/*16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
*/

let texto = prompt("Ingrese su texto:")
let textoInverso = ""

for(let i=texto.length; i>=0; i--){
    textoInverso += texto.charAt(i)
}

document.write("<p>",textoInverso,"</p>")