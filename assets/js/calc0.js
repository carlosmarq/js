

var calc = {
  result: 2,


  plus : function(addend){
    if(typeof addend === "number"){
      this.result  = this.result + addend;
    }else{
        console.log("No es un numero");
        }
  },
  minus:function(substract){
  this.result  = this.result - substract;

  },

  times:function(multiplier){
  this.result  = this.result * multiplier;
  },

  divide:function(dividing){
  this.result  = this.result / dividing;
  },

  clear:function(){
  this.result=0;

  },
  pow: function(exp){
    this.result = Math.pow(this.result,exp);
  },

};

//calc.plus(9);
//console.log(calc.result);

//calc.minus(5);
//console.log(calc.result);

//calc.times(-1);
//console.log(calc.result);

calc.plus(4);
console.log(calc.result);

//calc.pow(4);
//console.log(calc.result);
