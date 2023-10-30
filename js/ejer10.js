/*10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

Ejercicios con Math

*/

const filas = parseInt(prompt("Ingrese las filas:"))
const columnas = parseInt(prompt("Ingrese las columnas:"))
let producto = filas*columnas
let estructura = ""


for(let i=0 ; i<filas ; i++){
    estructura += "\t\t<tr>"
            for(let j=0 ; j<columnas; j++){
                estructura += `\n\t\t\t<td> ${producto} </td>`
                producto--
            }
    estructura += "\n\t\t</tr>\n"

}

const sintaxis = `
<table>
    <tbody>
${estructura}
    </tbody>
</table>
`             

document.write(sintaxis)
document.write("<p>Visualice el codigo de la tabla por consola</p>")
console.log(sintaxis)