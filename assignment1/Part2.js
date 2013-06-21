#!/usr/bin/env node
var primes = [];
var j;
var prime;
var fs = require('fs');
var outfile = "primes.txt";
var num=2;

while (primes.length <= 100)
{ 
    j=0;
    prime=true;
    while (j < primes.length)
    {
        if (num%primes[j]===0)
        {
            prime=false;
            break;
        }
    j++;
    }
    if (prime)
    {
        primes.push(num.toString());
    }
num++;
}

var out = primes.toString();
fs.writeFileSync(outfile, out);  
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);

