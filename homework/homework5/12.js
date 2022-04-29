//(物件導向)擴充上一題，加入 add, sub 兩個函數

class Ratio
{
    constructor(a, b)
    {
        this.a = a;
        this.b = b;
    }

    toString()
    {
        return this.a + "/" + this.b;
    }
    add(this2)
    {
        return new Ratio(this.a*this2.b+this.b*this2.a, this.b*this2.b);
    }
    sub(this2){
        return new Ratio(this.a*this2.b-this.b*this2.a, this.b*this2.b);
    }
}

var r1 = new Ratio(1,3),r2 = new Ratio(2,4);
var r3 = r1.add(r2);
console.log(r3.toString());//10/12