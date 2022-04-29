import { getStdin } from 'https://deno.land/x/get_stdin/mod.ts'
 console.log("enter the number")
 let number = await getStdin();
 number = parseInt(number)
function f (n){
    if(n==1 || n == 2){
        return 1;
    }
    if(n>2){
       return f(n-1)+f(n-2)
    }
}
console.log(f(number))