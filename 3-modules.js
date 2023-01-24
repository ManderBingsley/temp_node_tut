//CommonJs, every file is module (by default)
//Modules -- Encapsulated Code (only share minimum)

const names = require('./4-names.js')
const sayHi = require('./5-utils.js')
const data = require('./6-alternative-favour.js')
require('./7-mind-grenade.js')

sayHi('Susan')
sayHi(names.name1)
sayHi(names.name2)