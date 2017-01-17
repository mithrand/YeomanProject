
$(document).ready(function(){

	var cauching = new Pakiman("Cauching",100,30,"./img/cerdo.png");
	var tocinauro = new Pakiman("Tocinauro",120,40,"./img/vaca.png");
	var pokacho = new Pakiman("Pokacho",80,50,"./img/pollo.png");

	cauching.hablar();
	tocinauro.hablar();
	pokacho.hablar();

	cauching.toHtml();
	tocinauro.toHtml();
	pokacho.toHtml();

});