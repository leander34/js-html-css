const obj = { a: 1}
const obj2 = { b: 1, c: 9}
const obj3 = { c: 1, a: 2}

const obj4 = Object.assign({}, obj, obj2, obj3)
console.log(obj)
console.log(obj2)
console.log(obj3)
console.log(obj4)

const obj5 = {
    ...obj,
    ...obj2,
    ...obj3
}

console.log(obj5)