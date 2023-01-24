//File-module

const { readFileSync, writeFileSync } = require('fs')
//de to linjene under er tilsvarende linjen over.
/* const fs = require('fs')
fs.read */

console.log('start')

const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

console.log(first, second)

//default overwriter innholdet i tekstfilen, legger vi til {flag: 'a'} appender vi
writeFileSync('./content/result-synx.txt', `Here is the result : ${first},
 ${second}`, {flag: 'a'})

console.log('done with this task')
console.log('starting the next one')

const result = readFileSync('./content/result-synx.txt', 'utf-8')


console.log(first, second, result)