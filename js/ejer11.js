/*
11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp
*/

let edad1 = parseInt(prompt("Indique la edad de la primera persona:"))
let nom1 = prompt("Indique el nombre de la primera persona:")
let edad2 = parseInt(prompt("Indique la edad de la segunda persona:"))
let nom2 = prompt("Indique el nombre de la segunda persona:")
let edad3 = parseInt(prompt("Indique la edad de la tercera persona:"))
let nom3 = prompt("Indique el nombre de la tercera persona:")

let mayor = Math.max(edad1, edad2, edad3)

switch(mayor){
    case(edad1):
        document.write("<p>El mayor de todos es: ", nom1, "</p>")
        break
    case(edad2):
        document.write("<p>El mayor de todos es: ", nom2, "</p>")
        break
    case(edad3):
        document.write("<p>El mayor de todos es: ", nom3, "</p>")
        break
}