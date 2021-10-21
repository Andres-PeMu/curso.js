// codigo del cuadrado

console.group("cuadrado");

const ladoCuadrado = 5;

console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;

console.log("El perimetro del cuadrados es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log("El Area del cuadrados es: " + areaCuadrado + "cm cuadrados");

console.groupEnd();

// codigo del triangulo

console.group("triangulos")

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log("Los lados del triangulo miden: " 
+ ladoTriangulo1 
+ "cm" + ", " 
+ ladoTriangulo2 
+ "cm"
+ baseTriangulo
+ "cm"
);

console.log("La altura del triangulo: " 
+ alturaTriangulo 
+ "cm"
);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;

console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;

console.log("El Area del triangulo es: " + areaTriangulo + "cm cuadrados");

console.groupEnd();

// codigo del circunferencia

console.group("circunferencia")

const radio = 4;
const PI = Math.PI;
console.log("El radio del triangulo mide: " 
+ radio
+ "cm"
);

const diametro = radio * 2;
const perimetroCircunferencia = diametro * PI;

console.log("El perimetro de la circunferencia es: " + perimetroCircunferencia + "cm");

const areaCircunferencia = (radio * radio) * PI;

console.log("El Area de la circunferencia es: " + areaCircunferencia + "cm cuadrados");

console.groupEnd();
