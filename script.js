const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");
const obj = document.getElementById("btn_copiar").hidden=true;
const obj1 = document.getElementById("btn_limpar").hidden=true;
const msgTextArea = document.querySelector("textarea.mensagem");

// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"
//ATALHO PARA COLOCAR VÁRIAS LINHAS COMO COMENTÁRIO: SELECIONA AS LINHAS E APERTE CTRL+;

function btnEncriptar() {
	const textoEncriptado = encriptar(textArea.value);
	mensagem.value = textoEncriptado;
	textArea. value = "";
}

function encriptar(stringEncriptada) {
	
	if(textArea.value == "") {
		alert("Digite uma mensagem para ser criptografada.");
		mensagem.value = "";

	}else {
		let obj = document.getElementById("btn_copiar").hidden = false;
		let obj1 = document.getElementById("btn_limpar").hidden = false;
		
		msgTextArea.classList.add("criptografado");
		
		let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
		//console.table(matrizCodigo)
		stringEncriptada = stringEncriptada.toLowerCase();

		for(let i = 0; i < matrizCodigo.length; i++) {
			if(stringEncriptada.includes(matrizCodigo[i][0])) {
				stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
			}
		}

		return stringEncriptada;
	}
}

function btnDesencriptar() {
	//console.log("btnDesencriptar");
	//console.log(msgTextArea.classList);

	msgTextArea.classList.add("criptografado");
	if(textArea.value == "") {
		alert("Copie a mensagem criptografada para desencripta-la!");

		}else {		
			const textoDesencriptado = desencriptar(textArea.value);
			mensagem.value = textoDesencriptado;
			textArea.value = "";
		}
}

function desencriptar(stringDesencriptada) {
	
	let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
	stringDesencriptada = stringDesencriptada.toLowerCase();

	for(let i = 0; i < matrizCodigo.length; i++) {
		if(stringDesencriptada.includes(matrizCodigo[i][1])) {
			stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
		}
	}

	let obj1 = document.getElementById("btn_limpar").hidden = false;

	return stringDesencriptada;
}

function btnCopiar() {
	textArea.value = mensagem.value;
	mensagem.value = "";
	msgTextArea.classList.remove("criptografado");
	let obj = document.getElementById("btn_copiar").hidden = true;
	let obj1 = document.getElementById("btn_limpar").hidden = true;
}

function btnLimpar() {
	textArea.value = "";
	mensagem.value = "";
	msgTextArea.classList.remove("criptografado");
	let obj = document.getElementById("btn_copiar").hidden = true;
	let obj1 = document.getElementById("btn_limpar").hidden = true;
}
