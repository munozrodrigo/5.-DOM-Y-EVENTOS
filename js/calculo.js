function mostrar(tipo) {
	//Declaramos un parámetro
	let caja = document.getElementById(tipo); //Le indicamos donde lo va a usar al parámetro. Que elemento utilice para seleccionar el ID
	caja.style.display = 'block';
}

function ocultar(tipo) {
	let caja2 = document.getElementById(tipo);
	caja2.style.display = 'none';
}

function calcularapp() {
	let ap1 = 300000;
	let ap2 = 200000;

	let precioapp = parseInt(
		prompt(
			'Para calcular solo Apps móvil y web escriba: 1\nPara calcular apps generales escriba: 2\nPara calcular todas escriba: 3'
		)
	);
	switch (precioapp) {
		case 1:
			document.getElementById('tot_app').innerHTML = '$ ' + ap1;
			break;
		case 2:
			document.getElementById('tot_app').innerHTML = '$ ' + ap2;
			break;
		case 3:
			document.getElementById('tot_app').innerHTML = '$ ' + (ap1 + ap2);
			break;
		default:
			alert('El valor es incorrecto');
			break;
	}
}

function calcularsist() {
	let si1 = 300000;
	let si2 = 400000;
	let si3 = 600000;
	let si4 = 800000;

	let preciosist = parseInt(
		prompt(
			'Para calcular solo Sistemas a medida: 1\nPara calcular Sistemas de gestión y administración escriba: 2\nPara calcular Sistemas financiero escriba: 3\nPara calcular Sistemas de salud: escriba: 4\nPara calcular todas escriba: 5'
		)
	);
	switch (preciosist) {
		case 1:
			document.getElementById('tot_sist').innerHTML = '$ ' + si1;
			break;
		case 2:
			document.getElementById('tot_sist').innerHTML = '$ ' + si2;
			break;
		case 3:
			document.getElementById('tot_sist').innerHTML = '$ ' + si3;
			break;
		case 4:
			document.getElementById('tot_sist').innerHTML = '$ ' + si4;
			break;
		case 5:
			document.getElementById('tot_sist').innerHTML =
				'$ ' + (si1 + si2 + si3 + si4);
			break;
		default:
			alert('El valor es incorrecto');
			break;
	}
}

function calcularmark() {
	let ma1 = 100000;
	let ma2 = 80000;

	let preciomark = parseInt(
		prompt(
			'Para calcular solo Marketing escriba: 1\nPara calcular diseño escriba: 2\nPara calcular todas escriba: 3'
		)
	);
	switch (preciomark) {
		case 1:
			document.getElementById('tot_mark').innerHTML = '$ ' + ma1;
			break;
		case 2:
			document.getElementById('tot_mark').innerHTML = '$ ' + ma2;
			break;
		case 3:
			document.getElementById('tot_mark').innerHTML = '$ ' + (ma1 + ma2);
			break;
		default:
			alert('El valor es incorrecto');
			break;
	}
}
