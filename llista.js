
function llansaEscoltes(){

	document.getElementsByTagName("button")[0].addEventListener("click", afegir, false);
}
window.onload = llansaEscoltes;



function afegir() {

	var nom= document.getElementsByTagName("input")[0].value;
	var cant= document.getElementsByTagName("input")[1].value;
	var marca= document.getElementsByTagName("input")[2].value;
	
	//Creem el nou objecte a afegir
	var obj= "<div class='w3-padding w3-xlarge'>";
		obj+= "<span data-quantitat='"+ cant +"' data-marca='"+ marca +"'>"+ nom +"</span>";
		obj+= "<span class='w3-right'>";
			obj+= "<i class='material-icons w3-hover-text-amber' style='cursor: hand;' onclick='infoProduct(this)'>info_outline</i>";
			obj+= "<i class='material-icons w3-hover-text-amber' style='cursor: hand;' onclick='upProduct(this)'>keyboard_arrow_up</i>";
			obj+= "<i class='material-icons w3-hover-text-amber' style='cursor: hand;' onclick='downProduct(this)'>keyboard_arrow_down</i>";
			obj+= "<i class='material-icons w3-hover-text-red' style='cursor: hand;' onclick='deleteProduct(this)'>delete_outline</i>";
		obj+= "</span>";
	obj+= "</div>";
	
	//Creem un nou contenedor, on anira el nou element
	var elem= document.createElement("div");
	var att = document.createAttribute("class");
	att.value = "w3-card-4 w3-margin-bottom w3-hover-teal";
	elem.setAttributeNode(att);
	document.getElementsByClassName("w3-container")[1].appendChild(elem);
	
	var mou = document.getElementsByClassName("w3-container")[1];
    mou.insertBefore(elem, mou.childNodes[0]);
    
	//Afegim el nou element
	document.getElementsByClassName("w3-card-4 w3-margin-bottom w3-hover-teal")[0].innerHTML = obj;
}

function infoProduct(dada) {

	var nom= dada.parentElement.previousElementSibling.textContent;
    var cant= dada.parentElement.previousElementSibling.getAttribute("data-quantitat");
	var marca= dada.parentElement.previousElementSibling.getAttribute("data-marca");

    alert("Nom: "+ nom +"\nQuantitat: "+ cant +"\nMarca: "+ marca);
}

function upProduct(dada) {

	var post= dada.parentNode.parentNode.parentNode;
	var previ= dada.parentNode.parentNode.parentNode.previousElementSibling;
	
	if(previ != null){

		dada.parentNode.parentNode.parentNode.parentNode.insertBefore(post, previ);
	}
}

function downProduct(dada) {

	var post= dada.parentNode.parentNode.parentNode.nextElementSibling;
	var previ= dada.parentNode.parentNode.parentNode;
	
	if(post != null){

		dada.parentNode.parentNode.parentNode.parentNode.insertBefore(post, previ);
	}
}

function deleteProduct(dada) {

	var elemEliminar= dada.parentElement.parentElement.parentElement;
	elemEliminar.removeChild(elemEliminar.childNodes[0]);
}