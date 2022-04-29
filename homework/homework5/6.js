 /*因數分解*/
 import { getStdin } from 'https://deno.land/x/get_stdin/mod.ts'
 console.log("enter the number")
 let number = await getStdin();
 number = parseInt(number)
 let array = [];

 function factor(number, array) {
     for (let i = 2; i <= number; i++) {
         if (number % i < 0.00001) {
             array.push(i);
             number = number / i;
             i = 1;
         }
     }
     return array;
 }
 console.log(factor(number, array));