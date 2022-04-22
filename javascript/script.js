let numero = parseInt (prompt ("Ingrese un número para descubrir todos sus números de la suerte"))
//los números pares serán los de la suerte

for ( let i = 0; i <= numero; i++){

if ( i === 10){
    continue
} else if (i===18){
    continue
} else if (i===36) {
    continue
} else if (i===44){
    continue
} else if (i===50){
    break
}

if(i % 2 === 0){
    console.log (i)
}
}