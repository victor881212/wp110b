import { getStdin } from 'https://deno.land/x/get_stdin/mod.ts'
console.log("enter lower limit");
var low = await getStdin();
console.log("enter upper limit");
var up = await getStdin();
filter(up, low);

function filter(up, low) {
    for (low; low <= up; low++) {
        if (low % 3 != 0 && low % 5 != 0 && low % 7 != 0) {
            console.log(low);
        }
    }
}