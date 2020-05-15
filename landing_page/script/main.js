function Calculator(){
    this.sum=function(){
        return this.a + this.b;
    }
    this.mul=function(){
        return this.a * this.b;
    }
    this.read=function(){
      this.a = +prompt('a=?', 0);
      this.b = +prompt('b=?', 0);
    }
}

var calc = new Calculator();
calc.read();

alert(calc.sum());
alert(calc.mul());