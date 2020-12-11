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
    let tipo = 0;
    

    do {
        if((numero % i === 0)) {
        tipo = tipo + 1;           
    } 
     i--;
    } while(i >= 1);
    if(tipo === 2) {
        return true;
    } else {
        return false;
    }  
}

obtenerMultiplos(inicio, fin) {
let i = inicio;
let string = "";

do {
    if(i % 3 === 0) {
        string = string + i; 
    }
    i++;
} while (i <= fin)
return string;

}



}

let app = new App();
console.log("Probando: sumatoriaSerieUno()");
console.log(app.sumatoriaSerieUno(9));
console.log("Probando: sumatoriaSerieDos()");
console.log(app.sumatoriaSerieDos(7));
console.log("Probando: esPrimo()");
console.log(app.esPrimo(131));
console.log("Probando: obtenerMultiplos()");
console.log(app.obtenerMultiplos(1,9));