//UBJETIVO: Imprimir los números pares desde 0 y hasta el 20 20

//INSTRUCIONES DEL for

//1. Iniciar
//2. Condicion de ejecución
//3. Aumentar

/*for(var cont=20; cont>=0; cont = cont-2){
  console.log(cont);
}



//do while
//imprimir letra por letra de un string
var name = "Jenga Jenga";
var cont = 0;
do{
  console.log(name.charAt(cont));
  cont = cont + 1;
}while(cont < name.length);

*/

//ahora al reves con do while
/*
var name = "Jenga Jenga";
var cont = name.length;
do{
  console.log(name.charAt(cont))
  cont = cont - 1;
}while(cont < name.length);
*/

//ahora  while descendente

/*
var name = "Jenga Jenga";
var cont = name.length;
while (cont <= name.length)
{
  console.log(name.charAt(cont));
  cont = cont - 1;
}
*/

//ahora  while ascendente:
var name = "Jenga Jenga";
var cont = 0;
while (cont <= name.length)
{
  console.log(name.charAt(cont));
//  console.log(cont);
  cont = cont +1;
}
