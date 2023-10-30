/*17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.
*/

let texto = prompt("Ingrese su texto:")
let posVocal

for(let i=0; i<texto.length; i++){
    let c = texto.charAt(i)
    if(c === "a" || c === 'e' || c === 'i' || c === 'o' || c === 'u'){
        posVocal = i
        break
    }
}

if(posVocal === undefined){
    document.write("<p> Este texto no posee vocales</p>")   
}else{
    document.write("<p> La posición (contando el 0) de la primera vocal del texto es: ", posVocal,"</p>")
}