/*
var persona ={
  age:0,
  eyes:2,
  legs:2,

  crecer:function(){
  },

  morir:function(){
  },

}
*/

var calc = {
  result: 100,

validate:function(input){
  if(typeof(input)==="number"){
  return true;
  }else{
  console.error("La entrada no es un número");
  }
},

  plus : function(addend){
    var valid_number = this.validate(addend);
    if(valid_number){
    this.result  = this.result + addend;
    }

},

  minus:function(substract){
    var valid_number = this.validate(substract);
    if(this.validate(substract)){
    this.result  = this.result - substract;
    }
  },

  times:function(multiplier){
    var valid_number = this.validate(multiplier);
    if(this.validate(multiplier)){
    this.result  = this.result * multiplier;
    }
  },

  divide:function(dividing){
    var valid_number = this.validate(dividing);
    if(this.validate(dividing)){
    this.result  = this.result / dividing;
    }
  },

  clear:function(){
  this.result=0;

  },
  pow: function(exp){
    var valid_number = this.validate(exp);
    if(this.validate(exp)){
    this.result = Math.pow(this.result,exp);
    }
  },

};

//calc.plus(9);
//console.log(calc.result);

//calc.minus(5);
//console.log(calc.result);

//calc.times(-1);
//console.log(calc.result);

calc.pow(2);
console.log(calc.result);

//calc.pow(4);
//console.log(calc.result);
