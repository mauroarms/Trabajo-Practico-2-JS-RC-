/*
6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1
22
333
4444
55555
666666*/


let contador=1

for(let i=1; i<=30; i++){
    document.write("<p>")
    for(let j=1; j<=contador; j++){
        document.write(i)
    }
    document.write("</p>")
    contador++
}