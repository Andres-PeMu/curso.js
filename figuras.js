// codigo del cuadrado

 console.group("cuadrado");


// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado * 4;
} 


// console.log("El perimetro del cuadrados es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return lado * lado;
} 

//console.log("El Area del cuadrados es: " + areaCuadrado + "cm cuadrados");

console.groupEnd();

// codigo del triangulo

console.group("triangulos")

//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;
//const alturaTriangulo = 5.5;

// console.log("Los lados del triangulo miden: " 
// + ladoTriangulo1 
// + "cm" + ", " 
// + ladoTriangulo2 
// + "cm"
// + baseTriangulo
// + "cm"
// );

//console.log("La altura del triangulo: " 
//+ alturaTriangulo 
//+ "cm"
//);

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

// console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
    return (base * altura)/2;
}

// console.log("El Area del triangulo es: " + areaTriangulo + "cm cuadrados");

console.groupEnd();

// codigo del circunferencia

console.group("circunferencia")

//const radio = 4;


//console.log("El radio del triangulo mide: " 
//+ radio
//+ "cm"
//);



function perimetroCircunferencia(radio) {
    const PI = Math.PI;
    const diametro = radio * 2;    
    return diametro * PI;
}

//console.log("El perimetro de la circunferencia es: " + perimetroCircunferencia + "cm");

function areaCircunferencia(radio){
    const PI = Math.PI;
    return (radio * radio) * PI;
}  

//console.log("El Area de la circunferencia es: " + areaCircunferencia + "cm cuadrados");

console.groupEnd();
