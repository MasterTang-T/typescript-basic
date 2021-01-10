// 内置对象
// global objects
const a: Array<number> = [1, 2, 2]

// build-in object
Math.pow(2, 3)

// Dom and Bom
let body = document.body;

let allLis = document.querySelectorAll('li')

document.addEventListener('click', (e) => {
    e.preventDefault();
})

// Utility Types
// Partial 让属性非必填
// Omit 忽略某个属性
interface IPerson2{
    name: string,
    age:number
}
type IPartial = Partial<IPerson2>