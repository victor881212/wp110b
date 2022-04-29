/*定積分*/
function integral(f, x, xfin)
{
    var area = 0;
    for (x; x < xfin; x += 0.0001)
    {
        area += f(x) * 0.0001;
    }

    return area;
}

console.log(integral((x)=>x*x, 0, 1));/*   1/3  x*x*x =0.3333   ||   f(x)=x*x   x從0-1的面積   */