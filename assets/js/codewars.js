/*n=128;
texto=n.toString(2);
console.log(texto);
var unos=0;
console.log(texto.length);
console.log(texto.charAt(0));
console.log(texto.charAt(1));
console.log(texto.charAt(2));
console.log(texto.charAt(3));
console.log(texto.charAt(4));
console.log(texto.charAt(5));
console.log(texto.charAt(6));
console.log(texto.charAt(7));



    if(texto.charAt(0) === "1"){
    unos = unos + 1;
    console.log(unos);
    }else{
    console.log("No es un 0");
        }


    for (i = -1; i < texto.length; i++) {
        console.log(texto.charAt(i));
          if(texto.charAt(0) === "1"){
            unos = unos + 1;
            console.log(unos);
        }else{
            console.log("No es un 0");
                }
              }
*/

//En forma de funion:
/*
var countBits = function(n) {
  var texto=n.toString(2);
  console.log(texto);
  var unos= 0;
  for (i = 0; i < texto.length; i++) {
    console.log(texto.charAt(i));
    if(texto.charAt(i) === "1"){
      unos = unos + 1;
      console.log("Pos",i,"era 1");
    }else{
      console.log("Pos",i,"era 0");
    }
  }
  console.log(unos);
};
*/
//Pa Codewars:

var countBits = function(n) {
  var texto=n.toString(2);
  var unos= 0;
  for (i = 0; i < texto.length; i++) {
    if(texto.charAt(i) === "1"){
      unos = unos + 1;
    }else{
    }
  }
  return (unos);
};
