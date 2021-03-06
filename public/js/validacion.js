var exprDNI = /[0-9]{8}[A-Z]/;
var exprCaracterRaro = /[!@#$%^&*(),.?":{}\/\\|'<>;´¨\+\`\[\]¡¿ºª€~]+/;
var exprTildes = /^[A-Za-záéíóúÁÉÍÓÚ\s]+$/;
var exprNombreApellidos = /^[A-Za-z ,.'-]+$/;
var exprNumero = /[0-9]{9}/;
var exprMatricula = /[0-9]{4} [A-Z]{3}/;
var exprSql = /\b(ALTER|CREATE|DELETE|DROP|EXEC(UTE){0,1}|INSERT( +INTO){0,1}|MERGE|SELECT|UPDATE|UNION( +ALL){0,1})\b/;
var exprCode = /{((.|\n|\r)*)}/;
var exprSalario = /^[0-9]{0,4}$/;
var exprNss = /[0-9]{2} [0-9]{10}/;

function validateAnyo(){
	var num = document.getElementById("anyo");
	var numero = num.value;
	
	num.style.cssText = "background-color: #f1f1f1";
	var error;
	
	var resultado = true;
	console.log(numero);
	if(numero <= 1900){
		error = 'Años a partir de 1900.';
		$("#anyo").css("border", '1px solid red');
		$("#anyo").css("background", '#ffeeee');
		resultado = false;
	} else if(numero > new Date().getFullYear()){
		error = 'Años anteriores al año actual.';
		$("#anyo").css("border", '1px solid red');
		$("#anyo").css("background", '#ffeeee');
		resultado = false;
	} else if(!/[0-9]{4}/.test(numero)){
		error = 'Utilice un formato adecuado para el año introducido.';
		$("#anyo").css("border", '1px solid red');
		$("#anyo").css("background", '#ffeeee');
		resultado = false;
	} else {
		error = "";
		num.style.cssText = "background-color: #f1f1f1";
	}
	num.setCustomValidity(error);
	return resultado;
}

function validateUsos(){
	var filtro = document.getElementById("filtroUsos");
	var filtroValue = filtro.value.trim();
	
	var error = '';
	
	var apellidosCheck = true;
	if(!exprNombreApellidos.test(filtroValue)){
		apellidosCheck = false;
	}

	var modeloCheck = filtroValue.length<=20;
	
	var matriculaCheck = true;
	if(!exprMatricula.test(filtroValue)){
		matriculasCheck = false;
	}
	
	var resCheck = (apellidosCheck || matriculaCheck) && modeloCheck;
	
	var exprCheck = true;
	if(exprCaracterRaro.test(filtroValue)){
		exprCheck = false;
	}
	
	resCheck = resCheck && exprCheck;
	
	if(!resCheck){
		error = 'Búsqueda no válida. Ha de ser menor a 20 caracteres y con un formato de matrícula o nombre válido.';
		filtro.setCustomValidity(error);
	}
	return error;
}

function validateFormListAlumnosView(){
	var filtro = document.getElementById("filtro");
	var filtroValue = filtro.value.trim();

	var numeroDNI = filtroValue.substr(0, 8);
	var letra = filtroValue.substr(-1);
	
	var dniCheck = true;
	var error = '';
	if(!(exprDNI.test(filtroValue))){
		dniCheck = false;
	} else if(letra!=letraDNI(numeroDNI)){
		dniCheck = false;
	} else if(filtroValue==''){
		dniCheck = false;
	}

	var nombreApellidosCheck = true;
	if(!exprNombreApellidos.test(filtroValue)){
		nombreApellidosCheck = false;
	}

	var lengthCheck = filtroValue.length<30;

	var resCheck = (dniCheck || nombreApellidosCheck) && lengthCheck;

	if(!resCheck) {
		error = "Búsqueda no válida. Compruebe la validez del DNI o del nombre o apellidos introducidos.";
		filtro.setCustomValidity(error);
	}

	return error;
}

function validateSalario(){
	var salario = document.getElementById("salario");
	var salarioValue = salario.value;

	var resultado = true;
	var error;
	
	salario.style.cssText = "background-color: #f1f1f1";

	if(salarioValue==''){
		error = "Inserte un valor para el salario.";
		$("#salario").css("border", '1px solid red');
		$("#salario").css("background", '#ffeeee');
		resultado = false;
	} else if(!exprSalario.test(salarioValue)){
		error = "El salario ha de ser positivo y estar comprendido entre 0 y 5000.";
		$("#salario").css("border", '1px solid red');
		$("#salario").css("background", '#ffeeee');
		resultado = false;
	} else {
		error = '';
	}
	salario.setCustomValidity(error);
	return error;
}

function validateNSS(){
		
	var nss = document.getElementById("nss");
	var nssValue = nss.value;
	
	var resultado = true;
	var error;
	
	nss.style.cssText = "background-color: #f1f1f1";
	
	if(nssValue==''){
		error = "Inserte un número de la Seguridad Social.";
		$("#nss").css("border", '1px solid red');
		$("#nss").css("background", '#ffeeee');
		resultado = false;
	} else if(!exprNss.test(nssValue)){
		error = "Formato incorrecto, compruebe el dato introducido.";
		$("#nss").css("border", '1px solid red');
		$("#nss").css("background", '#ffeeee');
		resultado = false;
	} else {
		error = '';
	}
	nss.setCustomValidity(error);
	return error;
}

function validateDNI2(){
		
	var dni = document.getElementById("dni");
	var dniValue = dni.value;
	
	var numeroDNI = dniValue.substr(0, 8);
	var letra = dniValue.substr(-1);
	
	var resultado = true;
	var error;
	
	dni.style.cssText = "background-color: #f1f1f1";
	
	if (!(dniValue.length == 9) || (!exprDNI.test(dniValue))) {
		error = "Introduzca un DNI válido";
		$("#dni").css("border", '1px solid red');
		$("#dni").css("background", '#ffeeee');
		resultado = false;
	} else if (letra != letraDNI(numeroDNI)) {
		error = "El DNI debe contener la letra adecuada";
		$("#dni").css("border", '1px solid red');
		$("#dni").css("background", '#ffeeee');
		resultado = false;
	} else if(dniValue==''){
		error = 'Introduzca su DNI';
		$("#dni").css("border", '1px solid red');
		$("#dni").css("background", '#ffeeee');
		resultado = false;
	} else {
		error = "";
	}
	dni.setCustomValidity(error);
	return error;
}

function validateNombre2(){
	var nombre = document.getElementById("nombre");
	var nombreValue = nombre.value;

	var resultado = true;
	var error;
	
	nombre.style.cssText = "background-color: #f1f1f1";
	
	if (nombreValue.length==0) {
		error="Introduzca un nombre";
		$("#nombre").css("border", '1px solid red');
		$("#nombre").css("background", '#ffeeee');
		resultado=false;
		
	} else if(!exprNombreApellidos.test(nombreValue)){
		error = "Introduzca un nombre válido.";
		$("#nombre").css("border", '1px solid red');
		$("#nombre").css("background", '#ffeeee');
		resultado = false;
	} else {
		error = "";
	}
	nombre.setCustomValidity(error);
	return resultado;
}

function validateApellidos2(){
	var apellidos = document.getElementById("apellidos");
	var apellidosValue = apellidos.value;

	var resultado = true;
	var error;
	
	apellidos.style.cssText = "background-color: #f1f1f1";
	
	if(apellidosValue==''){
		error = 'Introduzca unos apellidos';
		$("#apellidos").css("border", '1px solid red');
		$("#apellidos").css("background", '#ffeeee');
		resultado = false;
		
	} else if(!exprNombreApellidos.test(apellidosValue)){
		error = 'Introduzca unos apellidos válidos.';
		$("#apellidos").css("border", '1px solid red');
		$("#apellidos").css("background", '#ffeeee');
		resultado = false;
	} else {
		error = '';
	}
	apellidos.setCustomValidity(error);
	return resultado;
}

function validateTelefono(){
	var telefono = document.getElementById("telefono");
	var telefonoValue = telefono.value.trim();
	
	var error;
	var resultado = true;
	
	telefono.style.cssText = "background-color: #f1f1f1";
	
	if (telefonoValue == '') {
		error = 'Introduzca su número de teléfono.';
		$("#telefono").css("border", '1px solid red');
		$("#telefono").css("background", '#ffeeee');
		resultado = false;
	} else if (!exprNumero.test(telefonoValue) || telefonoValue.length > 9) {
		error = 'Un número de teléfono debe contener 9 números.';
		$("#telefono").css("border", '1px solid red');
		$("#telefono").css("background", '#ffeeee');
		resultado = false;
	} else {
		error = "";
	}
	telefono.setCustomValidity(error);
	return resultado;
}

function soloNumeros(){
	var num = document.getElementById("anyo");
	var numero = num.value;

	num.style.cssText = "background-color: #f1f1f1";
	
	if(numero.length >= 6){
		error = 'Año demasiado largo.';
		$("#anyo").css("border", '1px solid red');
		$("#anyo").css("background", '#ffeeee');
	}
	else if(!/[0-9]{4}/.test(numero)){
		error = 'Usa números.';
		$("#anyo").css("border", '1px solid red');
		$("#anyo").css("background", '#ffeeee');
	}
	else {
		error = "";
		num.style.cssText = "background-color: #f1f1f1";
	}
	num.setCustomValidity(error);
	return (error.length == 0);
}

function letraDNI(numeroDNI) {
	var numero = numeroDNI % 23;
	var letra = "";
	switch (numero) {
		case 0:
			letra = "T";
			break;
		case 1:
			letra = "R";
			break;
		case 2:
			letra = "W";
			break;
		case 3:
			letra = "A";
			break;
		case 4:
			letra = "G";
			break;
		case 5:
			letra = "M";
			break;
		case 6:
			letra = "Y";
			break;
		case 7:
			letra = "F";
			break;
		case 8:
			letra = "P";
			break;
		case 9:
			letra = "D";
			break;
		case 10:
			letra = "X";
			break;
		case 11:
			letra = "B";
			break;
		case 12:
			letra = "N";
			break;
		case 13:
			letra = "J";
			break;
		case 14:
			letra = "Z";
			break;
		case 15:
			letra = "S";
			break;
		case 16:
			letra = "Q";
			break;
		case 17:
			letra = "V";
			break;
		case 18:
			letra = "H";
			break;
		case 19:
			letra = "L";
			break;
		case 20:
			letra = "C";
			break;
		case 21:
			letra = "K";
			break;
		case 22:
			letra = "E";
			break;
	}
	return letra;
}

// NUEVO PC
function validationModeloPc(){
	document.getElementById('modelo').style.cssText = "background-color: #f1f1f1;";
	var model = document.getElementById("modelo");
	var modelo = model.value;
	
	var error;
	if(!(modelo.length <= 25)){
		error = "+25 carácteres no permitido.";
		document.getElementById('modelo').style.cssText = "background-color: #ffeeee;";
	}
	else if(exprCaracterRaro.test(modelo)){
		error = "Se han usado carácteres no permitidos.";
		document.getElementById('modelo').style.cssText = "background-color: #ffeeee;";
	} else if(modelo.length == 0) {
		error = "No puede ser vacio.";
		document.getElementById('modelo').style.cssText = "background-color: #ffeeee;";
	} else {
		error = "";
		document.getElementById('modelo').style.cssText = "background-color: #f1f1f1;";
	}
	
	model.setCustomValidity(error);
	return (error==0);
}

function validationSO(){
	document.getElementById('so').style.cssText = "background-color: #f1f1f1;";
	var sistema = document.getElementById("so");
	var so = sistema.value;
	
	var error;
	if(!(so.length <= 25)){
		error = "+25 carácteres no permitido.";
		document.getElementById('so').style.cssText = "background-color: #ffeeee;";
	}
	else if(exprCaracterRaro.test(so)){
		error = "Se han usado carácteres no permitidos.";
		document.getElementById('so').style.cssText = "background-color: #ffeeee;";
	} else if(so.length == 0) {
		error = "No puede ser vacio.";
		document.getElementById('so').style.cssText = "background-color: #ffeeee;";
	} else {
		error = "";
		document.getElementById('so').style.cssText = "background-color: #f1f1f1;";
	}
	
	sistema.setCustomValidity(error);
	return (error==0);
}


// VALIDACION LOGIN 
function userValidation() {
	document.getElementById('uname').style.cssText = "background-color: #f1f1f1;";
	var name = document.getElementById("uname");
	var nombre = name.value;

	var error;
	var valid = true;

	valid = valid && (nombre.length <= 20);

	// Caracteres excesivos
	if (valid) {

		// No hay error de caracteres no permitidos
		if (/"/.test(nombre) || /'/.test(nombre)) {
			error = "No uses carácteres inválidos, las comillas.";
			document.getElementById('uname').style.cssText = "background-color: #ffeeee;";
		}
		// No hay errores
		else {
			error = "";
			document.getElementById('uname').style.cssText = "background-color: #f1f1f1;";
		}
		// Hay error de exceso de caracteres
	} else {
		error = "El usuario no puede tener más de 20 carácteres.";
		document.getElementById('uname').style.cssText = "background-color: #ffeeee;";
	}
	
	name.setCustomValidity(error);
	
	return error;
}

function passwordValidation() {
	var password = document.getElementById("psw");

	var pwd = password.value;
	var valid = true;
	var noSpecialChars = true;

	// Comprobamos la longitud de la contraseña
	valid = valid && (pwd.length > 0);

	//comprobamos que no contenga caracteres especiales
	noSpecialChars = !pwd.match('[!@#$%^&*(),.?":{}|<>]') && !pwd.match("[']");

	// Si no cumple las restricciones, devolvemos un error
	if (!valid) {
		var error = 'Por favor, introduzca una contraseña. El campo no puede estar vacio';		
	} else if (!noSpecialChars) {
		var error = 'La contraseña no puede contener caracteres especiales';
	}
	else {
		var error = "";
	}
	password.setCustomValidity(error);
	return error;
}


// add Alumno

function validateDNI() {
	var entrada = document.getElementById("dni");
	var valueCheck = entrada.value;
	var dni = $("#dni");
	var numeroDNI = valueCheck.substr(0, 8);
	var letra = valueCheck.substr(-1);
	var error;

	entrada.style.cssText = "background-color: #f1f1f1";
	$(".validateDni").text('');

	var resultado = true;
	if (valueCheck != '') {

		if (!(valueCheck.length == 9) || (!exprDNI.test(valueCheck))) {
			//dni.setCustomValidity('Introduzca un DNI válido');
			error = "Formato de dni no válido.";
			dni.css("border", '1px solid red');
			dni.css("background-color", "#ffeeee");
			$(".validateDni").text('Formato de dni no válido.');
		} else if (letra != letraDNI(numeroDNI)) {
			//dni.setCustomValidity('El DNI debe contener la letra adecuada.');
			error = "Dni erroneo, no existe.";
			dni.css("border", '1px solid red');
			dni.css("background-color", "#ffeeee");
			$(".validateDni").text('Dni erroneo, no existe.');
		} else
			error = "";
	} else {
		error = "Entrada requerida.";
		dni.css("border", '1px solid red');
		dni.css("background-color", "#ffeeee");
		$(".validateDni").text('Entrada requerida.');
	}
	entrada.setCustomValidity(error);
	return (error.length==0);
}

function nombreValidation() {
	var nombre = document.getElementById("nom");
	var valueCheck = nombre.value;
	var ensenya = $(".validateNombre");
	var campo = $("#nom");

	nombre.style.cssText = "background-color: #f1f1f1";
	ensenya.text('');

	var resultado = true;
	if (valueCheck == '') {
		error = "Nombre vacío.";
		campo.css("border", '1px solid red');
		campo.css("background-color", "#ffeeee");
		ensenya.text('No puede ser vacío.');
	} else if (valueCheck.length >= 21) {
		error = "+20 carácteres no permitido";
		campo.css("border", '1px solid red');
		campo.css("background-color", "#ffeeee");
		ensenya.text('+20 carácteres no permitido');
	}
	else if (exprCaracterRaro.test(valueCheck)) {
		error = "Carácteres inválidos.";
		campo.css("border", '1px solid red');
		campo.css("background-color", "#ffeeee");
		ensenya.text('Carácteres inválidos.');
	} 
	else {
		error = "";
	}
	return error;
	nombre.setCustomValidity(error);
}

function apellidosValidation() {
	var apellidos = document.getElementById("apell");
	var valueCheck = apellidos.value;
	var ensenya = $(".validateApellidos");
	var campo = $("#apell");

	apellidos.style.cssText = "background-color: #f1f1f1";
	ensenya.text('');

	var resultado = true;
	if (valueCheck == '') {
		error = "Nombre vacío.";
		campo.css("border", '1px solid red');
		campo.css("background-color", "#ffeeee");
		ensenya.text('No puede ser vacío.');
	} else if (valueCheck.length >= 31) {
		error = "+30 carácteres no permitido.";
		campo.css("border", '1px solid red');
		campo.css("background-color", "#ffeeee");
		ensenya.text('+30 carácteres no permitido.');
	} else if (exprCaracterRaro.test(valueCheck)) {
		error = "Carácteres inválidos.";
		campo.css("border", '1px solid red');
		campo.css("background-color", "#ffeeee");
		ensenya.text('Carácteres inválidos.');
	} 
	else {
		error = "";
	}
	apellidos.setCustomValidity(error);
	return error;
}