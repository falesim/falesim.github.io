---
title: Week 1: A Brief Introduction to Array in Javascript
author: sspantz
authorURL: https://github.com/sspantz
---

#### 0. Pre-requisites

- basic javascript

<!--truncate-->

#### 1. Creating Array

```js
// creating array with []
var empty = [] // create an empty array
var numbers = [0, 1, 2, 3, 4] // create an array with 5 elements
var values = [true, 'test', 0] // create an array with 3 elements of differnet types
var operation = [1 - 1, 's' + []] // create an array with element which can be an expression
var undef = [1, , , 4] // create an array with empty element
```

```js
// creating array using Array constructor
var a = new Array() // create an empty array using constructor function
var b = new Array(10) // create an array with 10 empty element using constructor function
var c = new Array(4, 3, 'test', false, 3 / 10) // create an array with element which can be an expression using constructor function
```

#### 2. Read and Write

```js
var a = [1, 2, 3, 4]
a[0] // read
a[1] = 3 // write
a.length // length of an array
a[4] // undefined, it does not throw an error or do anything else, just return 'undefined'
```

#### 3. Sparse Array

```js
var a = new Array(5) // no element, a.length is 5
a = [] // a.length is 0;
a[1000] = 0 // a.length is 1001
```

```js
var a1 = [,] // no element, a.length is 1
var a2 = [undefined] // undefined as an element
0 in a1 // false, no element at index 0
0 in a2 // true, there is an element 'undefined' at index 0
```

#### 4. Length

```js
var a = [1, 2, 3, 4, 5]
a.length // 5
a.length = 3 // shortend array a to [1, 2, 3]
a.length = 0 // []
a.length = 5 // { length: 5 }
```

#### 5. Add and Delete

```js
a = []
a[0] = 'zero'
a[1] = 'one'
a.push('two')
delete a[1]
1 in a
a.length
a.pop()
```

#### 6. Iteration

```js
var o = [1, 2, 3, 4, 5]
var keys = Object.keys(o)
var values = []
for (var i = 0; i < keys.length; i++) {
  var key = keys[i]
  value[i] = o[key]
}

for (var i = 0, len = keys.length; i < len; i++) {
  // run code here
}

for (var i = 0; i < o.length; i++) {
  if (!a[i]) continue
}

for (var i = 0; i < o.length; i++) {
  if (a[i] === undefined) continue
}

for (var i = 0; i < o.length; i++) {
  if (i in a) continue
}
```

#### 7. Multi-dimensional Array

not mentioned this time

#### 8. Methods

```js
// join()

// reverse()

// sort()

// concat()

// slice()

// splice()

// push() & pop()

// unshift() & shift()

// toString() & toLocaleString()
```

#### 9. ES5 Methods

```js
// forEach()

// map()

// filter()

// every()

// some()

// reduce()

// reduceRight()

// indexOf()

// lastIndexOf()
```

#### 10. ES6+ Methods

```js
// Array.from()

Array.from('foo');

const set = new Set(['foo', 'bar', 'baz', 'foo']);
Array.from(set);


const map = new Map([[1, 2], [2, 4], [4, 8]]);
Array.from(map);

const mapper = new Map([['1', 'a'], ['2', 'b']]);
Array.from(mapper.values());

Array.from(mapper.keys());

function f() {
  return Array.from(arguments);
}

f(1, 2, 3);

// Using an arrow function as the map function to
// manipulate the elements
Array.from([1, 2, 3], x => x + x);
// [2, 4, 6]


// Generate a sequence of numbers
// Since the array is initialized with `undefined` on each position,
// the value of `v` below will be `undefined`
Array.from({length: 5}, (v, i) => i);
// [0, 1, 2, 3, 4]

Sequence generator (range)

// Sequence generator function (commonly referred to as "range", e.g. Clojure, PHP etc)
const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

// Generate numbers range 0..4
range(0, 4, 1);
// [0, 1, 2, 3, 4]

// Generate numbers range 1..10 with step of 2
range(1, 10, 2);
// [1, 3, 5, 7, 9]

// Generate the alphabet using Array.from making use of it being ordered as a sequence
range('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1).map(x => String.fromCharCode(x));
// ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


function combine(){
    let arr = [].concat.apply([], arguments);
    return Array.from(new Set(arr));
}

var m = [1, 2, 2], n = [2,3,3];
console.log(combine(m,n));                     // [1, 2, 3]


// Array.of()
Array.of(7)
Array.of(1, 2, 3)

new Array(7)
new Array(1, 2, 3)

// flat()
var a = [1, 2, [3, 4, [5], [6, [7]]]]
var b = [1, 2, , , 5]
a.flat()
a.flat(2)
a.flat(Infinity)
b.flat()
```

#### 13. Types of array

```js
Array.isArray([])
Array.isArray({})
```

#### 14. Array-like Object

not mentioned this time

#### 15. String as an Array

not mentioned this time

#### 16. Others

read "oo js"
