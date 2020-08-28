// export导出的内容，导入时需要使用 {},且元素名字必须为导出时的名字
import {flag, sum, Person} from "./test1.js";

// 将test1.js导出的内容统一导入，并起别名，使用时：别名.属性
import * as test1 from "./test1.js";
console.log(test1.flag);

if (flag) {
    console.log("test2.js被调用");
    console.log("test2中调用sum函数：" + sum(20, 60));
}

const person = new Person();
person.run();

// export default导出的内容，导入时不需要{},元素名字可自定义，但每次只能每个模块只能有一个导入的元素
import func from "./test1.js";
func("我是通过 export default导出的函数");
