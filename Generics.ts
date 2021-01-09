// 泛型
// 在定义函数，接口，类的时候不指定类型，而是在使用的时候去指定类型


function echo<T>(arg: T): T {
    return arg
}

const result = echo("string")
// 泛型使用在定义时，具体的；类型是在使用时体现 
function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]]
}

const arr = swap(['123', 11])

// 约束泛型 在泛型定义时 可以使用extends 关键字和接口配合 来约束定义的变量
function echoWithLength<T>(arg: T[]): T[] {
    console.log(arg.length)
    return arg
}

interface IWithLength {
    length: number
}

function echoWithLength2<T extends IWithLength>(arg: T): T {
    console.log(arg.length)
    return arg
}

const str = echoWithLength2("123")

//  泛型在类上面使用
class Queue<T>{
    private data = [];
    push(item: T) {
        return this.data.push(item)
    }
    pop(): T {
        return this.data.shift()
    }
}
const queue = new Queue<number>();
queue.push(123);
// 泛型在接口上使用
interface SomeType<T, U> {
    key: T,
    val: U
}

// 类型别名
type SumType = (x: number, y: number) => number;
let sum: SumType = function (x, y) {
    return x + y;
}


interface IName {
    name: string
}
type IPerson = IName & { age: number }
let person: IPerson = {
    name: "123",
    age: 123,
}