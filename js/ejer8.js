/*
8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……
*/

let longPiramide = parseInt(prompt("Indique el valor (menor a 50):"))
let puntero
while(longPiramide>50){
    longPiramide = parseInt(prompt("Indicar un valor MENOR a 50:"))
}

for(let i=1;i<=longPiramide;i++){
    puntero = 1
    document.write("<p>")
    for(let j=1; j<=i; j++){
        document.write(puntero)
        puntero++
    }
    document.write("</p>")    
}