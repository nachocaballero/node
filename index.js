function add (x1, x2) {
return x1 + x2;
}

function substract (x1, x2) {
return x1 - x2;
}

function multiply (x1, x2) {
return x1 * x2;
}

function divide (x1, x2) {
    if (x2 == 0) {
        console.log ('No se puede dividir con la presencia de un Cero'); } 
        else {return x1 / x2;}
    }

console.log (add(1,2));
