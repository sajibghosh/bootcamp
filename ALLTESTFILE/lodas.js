var _ = require('lodash')

//chunk------------
var num = [90,87,67,54,34]

var nnum = _.chunk(num, 3)
console.log(nnum)

//.compact--------------

var abc = [1, false, null, 'sajib', undefined, true, ' ' , NaN, 'string', 0 ]

var nabc = _.compact(abc)
console.log(nabc)


