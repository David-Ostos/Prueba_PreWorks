var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
var textoC = document.getElementById("texto_color");
var textoC1 = document.getElementById("texto_color 1");
var textoC2 = document.getElementById("texto_color 2");
var textoC3 = document.getElementById("texto_color 3");
var botonC = document.getElementById("botoncitoC");
boton.addEventListener("click", dibujoPorClick );


var d = document.getElementById('dibujito1');
var ancho = d.width;

var lienzo = d.getContext("2d");

function dibujarLinea(color,x_inicial,y_inicial,x_final,y_final)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(x_inicial,y_inicial);
  lienzo.lineTo(x_final,y_final);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
{
  console.log(texto);
  var tcolor1 = textoC1.value;
  var tcolor2 = textoC2.value;
  var tcolor3 = textoC3.value;
  var tcolor = textoC.value;
  var lineas = parseInt(texto.value);
  var l = 0;
  var yi,xf,xi,yf,nyi,nxi,x1,y1;
  var colorcito = "#faa";
  var espacio = ancho / lineas;

  while (l < lineas)
  {
    yi = espacio * l;
    xf = espacio * (l+1);
    nyi= 300-yi;
    nxf= 300-xf;
  dibujarLinea(tcolor,300,nyi,xf,300);
  dibujarLinea(tcolor1,nyi,0,0,xf);
  dibujarLinea(tcolor2,0,yi,xf,300);
  dibujarLinea(tcolor3,yi,0,300,xf);

  console.log("lineas" + l);
  l = l + 1;
  }

  dibujarLinea("purple",1,1,1,ancho-1);
  dibujarLinea("purple",1,ancho-1,ancho-1,ancho-1);
  dibujarLinea("purple",1,1,ancho-1,1);
  dibujarLinea("purple",ancho-1,1,ancho-1,ancho-1);
}
