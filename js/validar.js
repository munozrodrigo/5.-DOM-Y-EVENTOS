function validarMatricula() {
	let matricula = {
		actual: [
			'^(AE)?\\d{3}[A-Z]{2}$',
			'La patente debe empezar con AE por ser 2021, seguido de 3 catacteres numéricos y finalizar con 2 letras mayúsculas. Ejemplo: AE123AE',
		],
		pasado: [
			'^(AD)?\\d{3}[A-Z]{2}$',
			'La patente debe empezar con AD por ser 2020, seguido de 3 catacteres numéricos y finalizar con 2 letras mayúsculas. Ejemplo: AD123DA',
		],
		antepas: [
			'^(AC)?\\d{3}[A-Z]{2}$',
			'La patente debe empezar con AC por ser 2019, seguido de 3 catacteres numéricos y finalizar con 2 letras mayúsculas. Ejemplo: AC123CA',
		],
	};
	let patenteA = document.getElementById('patente');
	let auto = document.getElementById('auto').value;

	let validador = new RegExp(matricula[auto][0]);

	if (validador.test(patenteA.value)) {
		patenteA.setCustomValidity('');
	} else {
		patenteA.setCustomValidity(matricula[auto][1]);
	}
}

window.onload = function () {
	document.getElementById('auto').onchange = validarMatricula;
	document.getElementById('patente').oninput = validarMatricula;
};
