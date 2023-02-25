function insere(){
	let Codi = document.forms["cadastrar"]["codigo"].value;
	let Titu = document.forms["cadastrar"]["titulo"].value;
	let Data = document.forms["cadastrar"]["data"].value;
	let Auto = document.forms["cadastrar"]["autor"].value;
	let Nota = document.forms["cadastrar"]["nota"].value;
	let Tipo = document.forms["cadastrar"]["tipo"].value;
	let Radi = document.forms["cadastrar"]["radio"].value;
	let Stat = document.forms["cadastrar"]["status"].value;

	let inserir = window.document.getElementById("inserirTabela");
	inserir.innerHTML =  `<th scope="row">${Codi}</th>`;
	inserir.innerHTML += `<td>${Titu}</td>`;
	inserir.innerHTML += `<td>${Auto}</td>`;
	inserir.innerHTML += `<td>${Data}</td>`;
	inserir.innerHTML += `<td>${Radi}</td>`;
	inserir.innerHTML += `<td>${Tipo}</td>`;
	inserir.innerHTML += `<td>${Nota}/10</td>`;
	inserir.innerHTML += `<td>${Stat}</td>`;
}

