//Variabels con estados especiales
{
var uninitialized;
console.log(uninitialized);
var null_initialized = null;
console.log(null_initialized);
var error_math = 3/'a';
console.log(error_math);
var inf = 3/0;
console.log(inf);
var minus_inf= -3/0;
console.log(minus_inf);

//Variables con tipos de datos
  var object_name ={
      prop_name: "value",
      prop_1: "yo soy prop_1",
      "2nd_key" : "",
      "ó" : "asi guardo valores en llaves con caracteres especiales",
  };
console.log(object_name["ó"]);
console.log(object_name.prop_1);
var integer_num = 1;
var float_num = 3.141516;
var const_math = Number.PI;
var string = "soy una cadena de caracteres";
var smile = "😃";
console.log(smile);
//alert(smile);

var array_of_numeros = [1,2,0,0.2,Number.PI];
var array_mix = ['a',0,smile,function(){}];
console.log(array_mix);

var verdadero = true;
var falso = false;
var regular_expression = /a*/; //palabras q empiezan por A

//Comentario de una linea
/*Comentario de varias lineas o bloque
*/
var function_var = function(){
//some instructions
};
{//scope


}


}
