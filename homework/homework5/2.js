import { getStdin } from 'https://deno.land/x/get_stdin/mod.ts'
console.log("how maney Factorial do you want?");
var number = await getStdin();
var answer = 1;
for (number; number > 0; number--) {
    answer = answer * number;
}
console.log(`${answer}!`);