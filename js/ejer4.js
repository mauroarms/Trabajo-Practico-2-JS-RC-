/*
4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
*/

let verificador = true
let num
let numeros = 0
let sumatoria = ""

while(verificador){

    verificador = confirm("Presione:\n- 'Aceptar' si desea agregar una nuevo numero\n- 'Cancelar' si desea finalizar el programa")
    if(!verificador){
        break
    }

    num = parseInt(prompt("Ingrese el numero:"))

    while(isNaN(num)){
        alert("DATO INVALIDO!!!")
        num = parseInt(prompt(" Ingrese el numero:"))
    }
    numeros += num
    sumatoria += (num + " + ")
}

sumatoria = sumatoria.substring(0, sumatoria.length-3)
document.write(sumatoria+" = "+numeros)