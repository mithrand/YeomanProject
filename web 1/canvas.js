var canvas = document.getElementById("mycanvas");
var surface = canvas.getContext("2d");
var boton = document.getElementById("cmdClick");
boton.addEventListener("click",dibujarPorClick);




function dibujarLinea(color,xInicial,yInicial,xFinal,yFinal)
{
	surface.beginPath();
	surface.strokeStyle = color;
	surface.moveTo(xInicial,yInicial);
	surface.lineTo(xFinal,yFinal);
	surface.stroke();
	surface.closePath();
}


function dibujarPorClick()
{
	surface.clearRect(0,0,canvas.width,canvas.height);
	var len = parseInt(document.getElementById("txtLineas").value);
	var color = "#FAA";
	var yi,xf;

	for(var i=0;i<len;i++)
	{
		yi= 10 * i;
		xf = 10*(i+1);
		dibujarLinea(color,0,yi,xf,300);
	}
}

//dibujarLinea("red",50,50,100,100);
//dibujarLinea("yellow",80,150,100,100);
//dibujarLinea("blue",250,0,0,250);

