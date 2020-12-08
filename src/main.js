export default class App {
sumatoriaSerieUno(numero) {
    let suma = 0;  
    let variable = (1/numero);  

    for(let i = 0; i <= 3.29; i = i + 1 + (1/2) + (1/3) + (1/4) + (1/5) + variable) {        
        if(variable === (1/0)) {
            suma = suma + i + 1 + (1/2) + (1/3) + (1/4) + (1/5) + variable;
        } else {
            suma = suma + i;
        }
    }
    return suma;
}
   
}

let app = new App();
console.log(app.sumatoriaSerieUno(1000000000));
