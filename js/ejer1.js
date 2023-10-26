// 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

let edad = prompt("Ingrese su edad:")


if(!isNaN(edad)){
    if(edad>18){
        document.write("<p>Usted ya puede conducir ya que posee: ",edad," años</p>")
    }else{
        document.write("<p>Usted NO puede conducir ya que posee: ",edad," años</p>")
    } 
}else{
    document.write("<p>El dato ingresado NO es un numero, ingresar un valor válido</p>")
}