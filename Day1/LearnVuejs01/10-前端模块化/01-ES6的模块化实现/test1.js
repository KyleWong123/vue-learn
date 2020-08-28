// var name = "Kyle";
// var age = 26;
// var flag = true;
//
// function sum(num1, num2) {
//     return num1 + num2;
// }
//
// if (flag) {
//     console.log("test1.js被调用");
//     console.log("test1中执行sum函数：" + sum(10, 40));
// }

// // 第一种导出方式，先定义后导出
// export {flag, sum}

// 第二种导出方式，定义时导出
export const flag = true;
export function sum(num1, num2) {
    return num1 + num2;
}

// 第三种，导出类
export class Person {
    run()  {
        console.log("人在奔跑");
    }
}

// 第四种 export default不需要给模块命名，让导入者自己命名，但每个模块只能有一个export default
export default function (paramr) {
    console.log(paramr);
}

if (flag) {
    console.log("test1.js被调用");
    console.log("test1中执行sum函数：" + sum(10, 40));
}
