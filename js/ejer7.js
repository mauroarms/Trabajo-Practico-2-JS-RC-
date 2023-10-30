/*
7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1
*/


let longPiramide = parseInt(prompt("Indique el valor (menor a 50):"))
while(longPiramide>50){
    longPiramide = parseInt(prompt("Indicar un valor MENOR a 50:"))
}

for(let i=longPiramide; i>=1 ; i--){
    document.write("<p>")
    for(let j=1; j<=i; j++){
         document.write(i)
    }
    document.write("</p>")
}