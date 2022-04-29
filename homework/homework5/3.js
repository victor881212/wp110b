import { getStdin } from 'https://deno.land/x/get_stdin/mod.ts'
console.log("enter a number");
var number = await getStdin();

isprime(number, 2);

function isprime(a, b) {
    for (b; b <= a; b++) {
        if (b == a) { console.log("is prime"); }

        if (a % b == 0 && b != a) {
            console.log("not a prime");
            b = a;
        }

    }
}