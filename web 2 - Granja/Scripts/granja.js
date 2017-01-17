"use strict"; 


const URL_FONDO = "./Img/tile.png";;
const URL_VACA = "./Img/vaca.png";
const URL_CERDO = "./Img/cerdo.png";
const URL_POLLO = "./Img/pollo.png";
const URL_LOBO = "./Img/lobo.png";
const X_CANVAS = 500; // width del canvas
const Y_CANVAS = 500; // height del canvas
const MAX_ANIMALES = 50; // número máximo de animales 
const MIN_ANIMALES = 10; // número mínimo de animales  
const GRID_SIZE = 20; //
const ANIMAL_SIZE = 80;
const ANIMALES = {
	POLLO:1,
	VACA:2,
	CERDO:3,
	LOBO:4
};

var xMax = Math.floor(X_CANVAS/ANIMAL_SIZE);
var yMax = Math.floor(Y_CANVAS/ANIMAL_SIZE);

var canvas = document.getElementById("granja");
var lienzo = canvas.getContext("2d");
var granja = IniciaLizarGranja();
granja = AsignarLobo(granja);
granja = AsignarAnimales(granja);

var fondo = new Image();
fondo.isLoaded = false;
fondo.addEventListener("load",function(){this.isLoaded = true;Pintar()});
fondo.src = URL_FONDO;


var pollo = new Image();
pollo.isLoaded = false;
pollo.addEventListener("load",function(){this.isLoaded = true;Pintar()});
pollo.src= URL_POLLO;  


var cerdo = new Image();
cerdo.isLoaded = false;
cerdo.addEventListener("load",function(){this.isLoaded = true;Pintar()});
cerdo.src= URL_CERDO;


var vaca = new Image();
vaca.isLoaded = false;
vaca.addEventListener("load",function(){this.isLoaded = true;Pintar()});
vaca.src= URL_VACA ;

var lobo = new Image();
lobo.isLoaded = false;
lobo.addEventListener("load",function(){this.isLoaded = true;Pintar()});
lobo.src= URL_LOBO ;

document.addEventListener('keydown', PresionarTecla);




function Pintar()
{

	//Solo pintamos cuando todos las imagenes han sido cargadas
	if(fondo.isLoaded && vaca.isLoaded && pollo.isLoaded && cerdo.isLoaded && lobo.isLoaded)
	{
		lienzo.drawImage(fondo,0,0);
		for(var i = 0; i<granja.posiciones.length;i++)
		{
			for(var j=0;j<granja.posiciones[i].length;j++)
			{
				switch (granja.posiciones[i][j]) {
					case ANIMALES.LOBO:
						lienzo.drawImage(lobo,i*ANIMAL_SIZE,j*ANIMAL_SIZE);
						break;
					case ANIMALES.VACA:
						lienzo.drawImage(vaca,i*ANIMAL_SIZE,j*ANIMAL_SIZE);
						break;
					case ANIMALES.POLLO:
						lienzo.drawImage(pollo,i*ANIMAL_SIZE,j*ANIMAL_SIZE);
						break;
					case ANIMALES.CERDO:
						lienzo.drawImage(cerdo,i*ANIMAL_SIZE,j*ANIMAL_SIZE);
						break;
				}
			}
		}


	}
}

function IniciaLizarGranja()
{
	var granja = {};
	granja.posiciones = NewPosiciones();
	granja.xLobo = 0;
	granja.yLobo=0;

	return granja;
}

function NewPosiciones()
{
	var posicionesLibres = [];
	var xMax = Math.floor(X_CANVAS/ANIMAL_SIZE);
	var yMax = Math.floor(Y_CANVAS/ANIMAL_SIZE);

	// Inicializamos el arrayLienzo a false en todas las posibles posiciones
		for(var i=0;i<=xMax;i++)
		{
			var arrayj=[];

			for(var j=0;j<=yMax;j++)
			{
				arrayj.push(0);
			}

			posicionesLibres.push(arrayj);
		}
		
	return posicionesLibres;	
}

function AsignarLobo(granja)
{
	var xMax = Math.floor(X_CANVAS/ANIMAL_SIZE);
	var yMax = Math.floor(Y_CANVAS/ANIMAL_SIZE);

	var x = NumAleatorio(0,xMax);
	var y = NumAleatorio(0,yMax);
	
	granja.xLobo = x;
	granja.yLobo = y;

	granja.posiciones[x][y]=ANIMALES.LOBO;

	return granja;
}


function AsignarAnimales(granja)
{
   // Genereamos el numero de animales entre MIN_ANIMALES y MAX ANIMALES
	var n = NumAleatorio(MIN_ANIMALES,MAX_ANIMALES);
	
	
	
	for(var i=0;i<n;i++)
	{

		var x = NumAleatorio(0,xMax);
		var y = NumAleatorio(0,yMax);

		// Si la posicion esta libre
		if(granja.posiciones[x][y]===0)
		{
			// asignamos un animal al azar a la posicion X,Y
			granja.posiciones[x][y] = NumAleatorio(1,4);
		}
	}

	return granja;
}

function NumAleatorio(min,max)
{
	var resultado;

	var incremento = max - min;

	resultado = Math.floor((Math.random()*incremento)+min);

	return resultado;
}

function PresionarTecla()
{
	var codigo = event.keyCode;
	granja.posiciones[granja.xLobo][granja.yLobo]= 0;
	switch (codigo) {		
		// arriba
		case 38:
			if(granja.yLobo > 0)
			{
				granja.yLobo = granja.yLobo - 1;
			}
			break;
		// abajo
		case 40:
			if(granja.yLobo < yMax)
			{
				granja.yLobo = granja.yLobo + 1;
			}
			
			break;
		// izquierda
		case 37:
			if(granja.xLobo > 0)
			{
				granja.xLobo = granja.xLobo-1;
			}
			
			break;
		// derecha
		case 39:
			if(granja.xLobo < xMax)
			{
				granja.xLobo = granja.xLobo + 1;
			}
			break;

	}

	granja.posiciones[granja.xLobo][granja.yLobo]= ANIMALES.LOBO;
	Pintar();
}
