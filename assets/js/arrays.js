var arrays = ["val1","2",2,3,4,false,53,7463876876];
var array_car_brands = ["Hyunday","Bugatty","Renault","Rolls Royce","Tesla","Mercedes","Ford"];

//Aplicar una o varias instruciones a ada uno de los datos
//Los metodos son funciones, dentro de los parentesis van los parametros
/*
array_car_brands.forEach(function(brand,cont){
var removed_brand = array_car_brands.pop();
console.log(removed_brand);
});
array_car_brands.push("Chevrolet");
console.log(array_car_brands);



array_car_brands = array_car_brands.filter(function(car_brand){
  if(car_brand === "Tesla"){
    return false;
  }else{
    return true;
  }
});
console.log(array_car_brands);

*/

/*
arrays = arrays.filter(function(array_element){
if(typeof array_element  == 'number'){
return false;
}else{
return true;
}
});
console.log(arrays);



//----------------------------------------


// Metodo para volar un subindice de un arreglo
*/

var arrays = ["zero","val1","2","TRES",4,"5","5+1",7.463876876];
var removed_element = 0;

//array.filter(function(currentValue, index, arr), thisValue)

/*
arrays = arrays.filter(function(array_element,index){
  if(removed_element  === index){
    return false;
  }else{
    return true;
  }
});
console.log(removed_element);
console.log(arrays);
*/

//ahora como metodo, agregado al prototipo Array:

Array.prototype.remove = function (id) {
  var resul_array=this;
  resul_array = resul_array.filter(function(array_element,index){
    if(id  === index){
      return false;
    }else{
      return true;
    }
  });
  return resul_array;
};
