/*矩陣相加*/
function add (array1,array2)
{
    let output = Array.from(Array(array2.length), () => new Array(array2[0].length))
    //建立新矩陣 大小:[array2長度(列的數量)][array2[0]長度(行的數量)]
    for(let i=0;i<array1.length || i<array2.length;i++)
    {
        for(let j=0;j<array1[0].length || j<array2[0].length;j++)
        {
            output[i][j]=array1[i][j]+array2[i][j];
        }
    }
    return output;
}
console.log(add([[1,2],[3,4]], [[1,1],[1,1]]));