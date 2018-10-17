function generatPage (){
	var  body = document.getElementById("body");
	var cpt = 0 ;
	for( var cat in data ){
		body.innerHTML += '<h1 class="cat-title"> ' + cat + ' </h1>'
		for( var  i = 0 ; i < data[cat].length ; i ++ ){
			var contains = ""
			contains += ' <div class="card-container" onclick="showAlert(' + cpt + ')" >'
			contains += 	'<div> ' + data[cat][i].Nom + '</div>';
			contains += 	'<img class="img-home" src="'+ data[cat][i].Url +'"/>';
			contains += '</div>'
			body.innerHTML += contains
			cpt ++
		}
	}



	cpt = 0
	for( var cat in data ){
		for( var  i = 0 ; i < data[cat].length ; i ++ ){
			var contains = ""
			contains += ' <div id="' + cpt + '" class="alert-container hide" onclick="showAlert(' + cpt + ')">'
			contains += 	' <div class="alert" >'
			contains += 		'<h1 class="alert-title" > ' + data[cat][i].Nom + '</h1>';
			contains += 		'<img class="img-alert" src="'+ data[cat][i].Url +'"/>';
			contains += 		'<div> ' + data[cat][i].Description.slice(0, 100) + '... </div>';
			contains += 	'</div>'
			contains += '</div>'
			body.innerHTML += contains
			cpt ++
		}
	}
}
function showAlert (id) {
	document.getElementById(id).classList.toggle("hide");
}
generatPage();