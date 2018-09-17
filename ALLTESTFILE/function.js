// Have to make  a function which will output the even number if there is odd that will also be change to even number
//------------------unsolved 
var newnum = []

function evenmaking(n) {
    for (var i = 0; i < n.length; i++) {

        if (n[i] % 2 === 0) {
            newnum[i] = n[i]
        } else {
            newnum[i] = n[i] + 1
        }
    }
    return newnum
}

var number = [76, 99, 45, 29, 54, 20]

evenmaking(number)
console.log(newnum)


//----------------------Function exemple solved


function sentenceCount(boktrita) {
    var count = 0;

    for (var i = 0; i < boktrita.length; i++) {
        if (boktrita[i] == '.') {
            count++;
        }
    }

    return count;
}

var x = sentenceCount("agami eid er por andolon hobe. rajpath gorom hobe. songram hobe.");

console.log(x)


//----------------------------------------
var square = function (number) {
    return number * number
};



var x = square(56);
console.log(x)

//----------------------------------------------

var num = function (item) {
    if (item % 2 === 0) {
        return item;
    } else {
        return item + 1;
    }
}

var y = num(12);
console.log(y)
//-----------------------------------
function evenmaking(n) {

    for (var i = 0; i < n.length; i++) {

        if (n[i] % 2 === 0) {
            console.log(n[i])
        } else {
            console.log(n[i] + 1)
        }
    }

}

var number = [76, 99, 45, 29, 54, 20];

evenmaking(number);
console.log(number)

//-----------------------------------------
function myfunction() {
    console.log('my name is ' + arguments[0])
    console.log('my title is ' + arguments[1])
    console.log(typeof arguments)
}

myfunction('sajib', 'ghosh', 1990, 'sajibghosh36@gmail.com')
//......................................................
var arr = ['sajib', 'john', 'tom', 'pussy_cat', undefined, 90, 39, 56, 87, null]

var x = []

arr.forEach(function (item) {
    if (typeof item === 'string') {

        x.push(item)

    }
})

console.log(x)
//......................................
//find out the string inside from an array by using the funcion----- unsolved

var data = ['sujon', 'sojjon', 'sumohan', 90, 89, 67, 78, undefined, true, 'sajib']


function srcstr(item) {
    for (var i = 0; i < item.length; i++) {
        if (typeof item[i] === 'string') {
            var rslt = item[i]
            return rslt;
        } else {
            'not valid'
        }
    }
}

var ans = srcstr(data)
console.log(ans)

//----------------------------------------


function evenmaking(n) {

    for (var i = 0; i < n.length; i++) {

        if (n[i] % 2 === 0) {
            console.log(n[i])
        } else {
            console.log(n[i] + 1)
        }
    }

}

var number = [76, 99, 45, 29, 54, 20];

evenmaking(number);
number

//..................................unsolved


//------------------self invoking function

var c = 10 + (function () {
    return 20
})();
c

//----------------------------------------------making a power function with call back function




function base(b) {
    var result = 1
    return function (n) {
        for (var i = 0; i < b; i++) {

            result = result * n
        }
        return result
    }
}


var num = base(3)(2)
num
//---or call this way
var n = base(3)
var m = n(2)
m

return function -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
    function main() {
        console.log('i am main')

        return function () {
            console.log('i am sub')
        }


    }

var a = main()()

//-------------

function grtting(mass) {
    function ret(text) {
        console.log(mass + ' ' + text)

    }
    return ret
}
grtting('sajib')('ghosh')



//---------------------------functional closuer
var name = 'Sajib Ghosh'

function sayhi() {
    console.log('Hello ' + name)
}

sayhi();
-- --
function grtting(mass) {
    function ret(text) {
        console.log(mass + ' ' + text)

    }
    return ret
}
var hello = grtting('sajib ghosh')
hello('good afternoon')

//----------------------------------------making sort method with function

var num = [78, 89, 90, 92, 23, 39, 56, 2, 4, 9, 0]

// num.sort()

// console.log(num)

num.sort(function (a, b) {

    return b - a

})
num

var stu = [{
        name: 'golli',
        mrks: 49,
        roll: 9
    },
    {
        name: 'tomy',
        mrks: 89,
        roll: 6
    },
    {
        name: 'bisu',
        mrks: 69,
        roll: 2
    },
    {
        name: 'rahi',
        mrks: 90,
        roll: 8
    },
    {
        name: 'mitu',
        mrks: 87,
        roll: 2
    }
]

dessinding to assinding-- -- -- -
stu.sort(function (a, b) {
    return (b.mrks - a.mrks)
})



stu.sort(function (a, b) {
    if (a.name > b.name) {
        return 1;
    } else if (a.name < b.name) {
        return -1
    } else {
        return 0
    }
})

console.log(stu)

    -- -- -- -- -- -- -- -- -- -- -- -- -- -- --making a foreach
function

var arr = [2, 3, 4, 5, 6, 7, 8]

function foreached(arg, cbf) {
    for (var i = 0; i < arg.length; i++) {
        cbf(arg[i], i, arr)
    }
}

foreached(arr, function (data, x, ar) {
        console.log('element is = ' + data + ' index= ' + x + ' the arr is = ' + ar)
    })

    -- -- -- -- -- -- -- - making filter method-- -- -- -

    var arr = [2, 3, 4, 5, 6, 7, 8]

var newarr = []

for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        newarr.push(arr[i])
    }
}
console.log('even number = ' + newarr)
//by general mentod up side

var odd = arr.filter(function (a) {
    return a % 2 === 1
})
console.log('odd number = ' + odd)
using filter
function upside
making thid filter funciton

var arr = [1, 2, 3, 4, 5, 6, 7, 8]

function myfilter(data, cbf) {
    var newarr = [];
    for (var i = 0; i < data.length; i++) {
        if (cbf(data[i])) {
            newarr.push(data[i])
        }
    }
    return newarr;
}

var res = myfilter(arr, function (x) {
    return x % 2 == 1
});

console.log('the even number is = ' + res)

//-----------------------------------created map function



function mymap(arr, cbf) {
    var newarr = []
    for (var i = 0; i < arr.length; i++) {
        newarr.push(cbf(arr[i]))
    }
    return newarr
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8]

var res1 = mymap(arr, function (element) {
    return element * 3
})
res1

//--------------------------------------------------------