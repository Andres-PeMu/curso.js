// codigo del cuadrado

 console.group("cuadrado");


function perimetroCuadrado(lado){
    return lado * 4;
} 


function areaCuadrado(lado) {
    return lado * lado;
} 


console.groupEnd();

// codigo del triangulo

console.group("triangulos")


function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}


function areaTriangulo(base, altura) {
    return (base * altura)/2;
}


console.groupEnd();

// codigo del circunferencia

console.group("circunferencia")


function perimetroCircunferencia(radio) {
    const PI = Math.PI;
    const diametro = radio * 2;    
    return diametro * PI;
}


function areaCircunferencia(radio){
    const PI = Math.PI;
    return (radio * radio) * PI;
}  

console.groupEnd();

// interactuando con html

function perimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function areaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}
