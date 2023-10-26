/*
3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp
*/

let frase
let cadenas = ""
let verificador = true

while(verificador){

    verificador = confirm("Presione:\n- 'Aceptar' si desea agregar una nueva frase\n- 'Cancelar' si desea finalizar el programa")
    if(!verificador){
        break
    }

    frase = prompt("Ingrese la frase:")
    cadenas += (frase + " - ") 
}

cadenas = cadenas.substring(0,cadenas.length-3) //Sacar ultimo guión
document.write(cadenas)

