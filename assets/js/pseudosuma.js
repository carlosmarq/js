//Nombres de variables empiezan por letra, _, $
//Variables en minusculas
//Objeto en mayusulas - Es case sensitive!
var var_1=2435;
var var_2=324;

//No modificar el codigo de esta linea hacia abajo:
var cont = 0;
var res = 0;
//Validar parametros de entrada: var 1 y var2 deben ser numeros enteros positivos
if(var_1 >= 0 && (var_1 % 1) === 0 && var_2 >= 0 && (var_2 % 1) === 0) {
//1. asegurar que inicia
//2. asegurar que termina
  while (cont < var_2){
    cont =  cont + 1;
    res = res + var_1;

  }
  console.log("El resultado es:");
  console.log(res);
} else{
    console.log("Los números no son válidos");
}
