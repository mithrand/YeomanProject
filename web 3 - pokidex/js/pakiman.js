class Pakiman 
{
	
	constructor(nombre,vida,ataque,url)
	{
		this.vida = vida;
		this.nombre = nombre;
		this.ataque = ataque;
		this.img = new Image();
		this.img.src=url;
	}

	hablar()
	{
		alert(this.nombre);
		return this.nombre;
	}

	toHtml()
	{
		var li = $("#pokidex").append("<li></li>");
		document.body.appendChild(this.img);
		document.write("<br /> <strong>"+this.nombre+"</strong> <br />");
		document.write("vida:"+this.vida+"<br/>");
		document.write("ataque:"+this.ataque+"<br/>");
	}

}