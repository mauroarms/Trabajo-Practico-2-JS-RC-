/*15- Realiza un script que cuente el número de vocales que tiene un texto.
*/
let texto = prompt("Ingrese su texto:").toLowerCase()
let vocales = 0

for(let i=0; i<texto.length; i++){
    let c = texto.charAt(i)
    if(c === "a" || c === 'e' || c === 'i' || c === 'o' || c === 'u'){
        vocales++
    }
}

document.write("La cantidad de vocales es igual a: ",vocales)

