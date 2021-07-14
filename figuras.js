// Variable RESULTADO

function modificarResultado(resultado, unidad) {
	let resultadoElem = document.querySelector('.resultado h3');

	resultadoElem.innerHTML = '';
	resultadoElem.innerHTML += resultado + unidad;
}

// Codigo del cuadrado

console.group('Cuadrado');

function perimetroCuadrado(lado) {
	return lado * 4;
}

function areaCuadrado(lado) {
	return lado * lado;
}

console.groupEnd();

// Codigo del triangulo

console.group('Triangulo');

function perimetroTriangulo(lado1, lado2, lado3) {
	return lado1 + lado2 + lado3;
}

function areaTriangulo(base, altura) {
	return (base * altura) / 2;
}

console.groupEnd();

// Codigo del Circulo

console.group('Circulo');

function diametroCirculo(radio) {
	return radio * 2;
}

const PI = Math.PI;

function perimetroCirculo(radio) {
	const diametro = diametroCirculo(radio);
	return diametro * PI;
}

function areaCirculo(radio) {
	return radio * radio * PI;
}

console.groupEnd();

//Conectamos con el HTML

//Cuadradp
function calcularPerimetroCuadrado() {
	const input = document.getElementById('inputCuadrado');
	const value = input.value;

	const perimetro = perimetroCuadrado(value);

	modificarResultado(perimetro, 'cm');
}

function calcularAreaCuadrado() {
	const input = document.getElementById('inputCuadrado');
	const value = input.value;

	const area = areaCuadrado(value);

	modificarResultado(area, 'cm²');
}

//Triangulo
function calcularPerimetroTriangulo() {
	const input1 = document.getElementById('inputTriangulo1');
	const value1 = Number(input1.value);
	const input2 = document.getElementById('inputTriangulo2');
	const value2 = Number(input2.value);
	const input3 = document.getElementById('inputTriangulo3');
	const value3 = Number(input3.value);

	const perimetro = perimetroTriangulo(value1, value2, value3);

	modificarResultado(perimetro, 'cm');
}

function calcularAreaTriangulo() {
	const input1 = document.getElementById('baseTriangulo');
	const value1 = Number(input1.value);
	const input2 = document.getElementById('alturaTriangulo');
	const value2 = Number(input2.value);

	const area = areaTriangulo(value1, value2);

	modificarResultado(area, 'cm²');
}

//Circulo
function calcularDiametroCirculo() {
	const input1 = document.getElementById('inputRadio');
	const value1 = Number(input1.value);

	const diametro = diametroCirculo(value1);

	modificarResultado(diametro, 'cm');
}

function calcularPerimetroCirculo() {
	const input1 = document.getElementById('inputRadio');
	const value1 = Number(input1.value);

	const area = perimetroCirculo(value1);

	modificarResultado(area, 'cm');
}

function calcularAreaCirculo() {
	const input1 = document.getElementById('inputRadio');
	const value1 = Number(input1.value);

	const area = areaCirculo(value1);

	modificarResultado(area, 'cm²');
}
