function reload() {
    location.reload(true);
}	

function depense(){
	let poids = Number(document.getElementById("poids").value);
	let duree = Number(document.getElementById("duree").value);
	let choix = Number(document.getElementById("choix").value);
	let d = Math.floor(((choix*3.5*poids)/200)*duree);

	/*Si rien n'est renseigné dans le champ */
	if($("#poids").val().length === 0){
		$("#poids").after("<span style='color:red'> Merci de remplir ce champ</span>");
	} 
	else if($("#duree").val().length === 0){
		$("#duree").after("<span style='color:red'> Merci de remplir ce champ</span>");	
	} 
/*lorsque les valeurs sont récupérées, et bien renseignées */
	else {
    document.write ('<html><head><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"><link rel="stylesheet" href="styles.css"></head><body class="container pt-5"><header class ="zone_titre text-center mt-2"><h1>ÉVALUEZ VOS DÉPENSES ÉNERGETIQUES</h1><h4>NOTRE OUTIL DE CALCUL EN LIGNE</h4></header><div  id="jstext"><div class="container fond1 p-4 vert-clair"><p class="mt-5 pt-2 text-center fs-3">Votre dépense énergétique est de<br><br><span class="msg valider p-3">'+ d + ' Kilocalories</span></p><a class="btn m-2 rafraichir text-small text-white" href="index_DE.html">retour</a></div></div><div class="text-center fs-6 mt-5 pt-5">©vivoptim-solutions-2022</div></body></html>');
	}
} 
