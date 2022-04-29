/*轉置矩陣*/
/*學習資源
https://www.oxxostudio.tw/articles/201908/js-array.html
https://www.delftstack.com/zh-tw/howto/javascript/javascript-2d-array/
https://www.w3schools.com/jsref/jsref_concat_array.asp*/
function transpose(array) {
    console.log(array);
    let output = Array.from(Array(array[0].length), () => new Array(array.length)) 
    //建立新矩陣 大小:[array[0] 長度(列的數量=array行的數量)][array 長度(行的數量=array列的數量)]
    for(let i =0;i<array.length;i++)
    {
        for(let j=0;j<array[0].length;j++)
        {
            output[j][i] = array[i][j];
        }
    }
    return output;
}
console.log(transpose([
    [1, 2, 3],
    [3, 2, 1]
]));