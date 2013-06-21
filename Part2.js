#!/usr/bin/env node
var primes = [];
var j;
var prime;
var fs = require('fs');
var outfile = "primes.txt";

for (var i=2;i<=100;i++)
{ 
    j=0;
    prime=true;
    while (j < primes.length)
    {
        if (i%primes[j]===0)
        {
            prime=false;
            break;
        }
    j++;
    }
    if (prime)
    {
        primes.push(i.toString());
    }

}

var out = primes.toString();
fs.writeFileSync(outfile, out);  
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);

