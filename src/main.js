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
    
        

  
}

let app = new App();
console.log("Probando: sumatoriaSerieUno()");
console.log(app.sumatoriaSerieUno(3));
console.log("Probando: sumatoriaSerieDos()");
console.log(app.sumatoriaSerieDos(7));



