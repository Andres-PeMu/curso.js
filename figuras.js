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
    const perimetro = parseInt(lado1) + parseInt(lado2) + parseInt(base);
    return perimetro;
}


function areaTriangulo(base, altura) {
    const area = (parseInt(base) * parseInt(altura))/2;
    return area;
}

function areaTrianguloIs(lado, base) {
    const area = Math.sqrt((parseInt(lado)*parseInt(lado))-((parseInt(base)*parseInt(base))/4));
    return area;
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

function inPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function inAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function inPerimetoTriangulo(){
    const input = document.getElementById("InputTriangulo1");
    const value1 = input.value;
    const input2 = document.getElementById("InputTriangulo2");
    const value2 = input2.value;
    const input3 = document.getElementById("InputTriangulo3");
    const value3 = input3.value;
    const perimetro = perimetroTriangulo(value1,value2,value3);
    alert(perimetro);
}

function inAreaTriangulo(){
    const input1 = document.getElementById("InputTriangulo3");
    const value1 = input1.value;
    const input2 = document.getElementById("InputAltura");
    const value2 = input2.value;

    const area = areaTriangulo(value1,value2);
    alert(area);
}

function inAreaTrianguloIs(){
    const input1 = document.getElementById("InputTrianguloIs3");
    const value1 = input1.value;

    const input2 = document.getElementById("InputAlturaIs");
    const value2 = input2.value;

    const area = areaTrianguloIs(value1,value2);
    alert(area);
}