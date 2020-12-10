export default class App {
sumatoriaSerieUno(numero) {
    let suma = 0;  

    for(let i = 1; i <= numero; i = i + 1) {        
        suma = suma + (1/i);
    }
    return suma;
}


sumatoriaSerieDos(numero) {
    let i = 1;
    let suma = 0;

    while(i <= numero) {
        if(i % 2 === 0 || i === 1) {
            suma = suma + (1/i);           
        } else {
            suma = suma - (1/i);            
        }   
        i = i + 1;
    }
    return suma;
}
    
esPrimo(numero) {
    let i = numero;    
    let tipo;

    do {
        if((i % 2 === 0) && (i !== 2)|| (i === 1) || (i % (Math.sqrt(i)) === 0) || (i % 3 === 0) && (i !== 3) || (i % 5 === 0) && (i !== 5) || (i % 7 === 0) && (i !== 7) || (i % 13 === 0) && (i !== 13)) {
            tipo = false;
        } else {
            tipo = true;
        }
        i++;
    } while(i <= numero);
    return tipo;
 
}


}

let app = new App();
console.log("Probando: sumatoriaSerieUno()");
console.log(app.sumatoriaSerieUno(9));
console.log("Probando: sumatoriaSerieDos()");
console.log(app.sumatoriaSerieDos(7));
console.log("Probando: esPrimo()");
console.log(app.esPrimo(131));