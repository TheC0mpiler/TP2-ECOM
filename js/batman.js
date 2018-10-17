function generatPage (){
	var  body = document.getElementById("body");
	var cpt = 0 ;
	var contains = ""
	contains += ' <div class="mobile-contain" onclick="showAlert(' + cpt + ')" >'
	contains += 	'<div class="mobile-title"> ' + data["Comics"][1].Nom + '</div>';
	contains += 	'<img class="mobile-img" src="'+ data["Comics"][1].Url +'"/>';
	for( var i = 0 ; i < data["Comics"][1].Produit_dérivé.length ; i++) {
		contains += '<div class="mobile-item">'
		contains +=		'<div>'
		contains +=			'<img src="' + data["Comics"][1].Produit_dérivé[i].Url + '" class="img-mobile-product" />'
		contains +=			'<span class="mobile-product-name">' + data["Comics"][1].Produit_dérivé[i].Nom + '</span>'
		contains +=			'<span class="mobile-product-price">Prix : ' + data["Comics"][1].Produit_dérivé[i].Prix + '€</span>'
		contains +=		'</div>'
		contains += '</div>'
	}
	contains += 	'<div class="mobile-description"> ' + data["Comics"][1].Description + '</div>';
	contains += '</div>'
	body.innerHTML += contains
}
function showAlert (id) {
	document.getElementById(id).classList.toggle("hide");
}
generatPage();