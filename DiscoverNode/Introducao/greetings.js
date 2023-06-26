
const getFlagValue = require('./flag')
const getValue = require('./flag')

console.log(`${getFlagValue('--name')}. ${getFlagValue('--greeting')}`)