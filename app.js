//npm - global command, comes with node
//npm --version

//local defendency - use it only in this particular project
//npm i <packageName> (i or install)

//global dependency - use it in any project
//npm install -g <packageName>
//sudo npm install -g <packageName> (dette er for mac)

//package.json - manifest file (stores important info about project/package)
// manual approach (create pacakge.json in the root, create properties etc)
//npm init(step by step, press enter to skip)
//npm init -y (everything default) (-y = yes to all - (y-flag))

// Eksterne moduler må installeres før de kan brukes, til forskjell fra innebygde (som http)
// const _ er konvensjon for eksterne moduler

//npm i nodemon -D (-D = devDependencies)
const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)


