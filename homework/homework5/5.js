import { getStdin } from 'https://deno.land/x/get_stdin/mod.ts'
console.log("enter the quantity of array elements")
let quantity = 0;
quantity = await getStdin();
quantity = parseInt(quantity)
let array1 = [];
let change;
array1.length = quantity;
for (let a = 0; a < quantity; a++) {
    change = await getStdin();
    change = parseInt(change)
    array1[a] = change;
}
let answer = 0;
for (let i = 0; i < array1.length; i++) {
    console.log(array1[i]);
    answer = answer + array1[i];
}
console.log(answer);
console.log("answer", answer / quantity);