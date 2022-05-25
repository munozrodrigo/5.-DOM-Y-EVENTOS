//Uso de datos ingresados por el usuario
let nombre = prompt("Hola. ¿Cuál es tu nombre?");
let edad = parseInt(prompt(nombre + ". Ingrese su edad"));
(edad >= 15)?alert("Bienvenid@ " + nombre + " a nuestro sitio web. Está autorizado"):alert("Lamentamos informarle " + nombre + ", que ésta es una página de negocios. No está autorizado.\nLo esperamos en un futuro :)");