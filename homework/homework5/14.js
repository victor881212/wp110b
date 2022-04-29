//(物件導向)擴充上一題，加入 reduce 函數 (約分）


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
    mul(this2) {
        return new Ratio(this.a*this2.a, this.b*this2.b);
    }
    div(this2)
    {
        return new Ratio(this.a*this2.b, this.b*this2.a);
    }
    reduce()
    {
        let number;
        if(this.a>this.b) number = this.b;
        else number = this.a;
        for(let i =0;i<number;i++){
            if(this.a%i==0 && this.b%i==0){
                this.a/=i;
                this.b/=i;
            }
        }
        return new Ratio(this.a,this.b);
    }
}

var r1 = new Ratio(6,9); 
var r2 =r1.reduce();
console.log(r2.toString());//2/3