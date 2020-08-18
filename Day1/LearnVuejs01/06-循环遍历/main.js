const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: 1,
        name: "小王子",
        price: 35.68,
        count: 1
      },
      {
        id: 2,
        name: "Java核心技术",
        price: 69.24,
        count: 1
      },
      {
        id: 3,
        name: "Mysql性能",
        price: 58.000,
        count: 1
      }
    ]
  },
  methods:{
    decrement(index) {
        this.books[index].count--;
    },
    increment(index) {
      this.books[index].count++;
    },
    remove(index){
      // 移除列表中的元素
      this.books.splice(index, 1);
    }
  },
  computed:{
    totalPrice() {
      let totalPrice = 0;
      //   for (let i = 0; i < this.books.length; i++) {
      //     totalPrice += this.books[i].price * this.books[i].count;
      //   }
      //   return totalPrice;
      // }

      // for i in val
      // for (let i in this.books) {
      //   totalPrice += this.books[i].price * this.books[i].count;
      // }
      // return totalPrice;

      // for i of val
      // for (let item of this.books) {
      //   totalPrice += item.price * item.count;
      // }
      // return totalPrice;

      return this.books.reduce(function (sum, book) {
        return sum + book.price * book.count;
      }, 0)
    }
  },
  filters:{
    // 过滤器,保留两位小数
    showPrice(price){
      return "￥" + price.toFixed(2) + "元";
    }
  },

});

/**
 * 高阶函数：filter、map、reduce
 */
// filter函数:其中回调函数必须返回一个boolean值，当为true时，函数内部会自动将本次回调的n加入到新的数组中
const nums = [10, 20, 50, 60, 100, 120];
let newNums = nums.filter(function (n) {
  return n < 100;
});
console.log(newNums);

// map函数
let mapNums = newNums.map(function (n) {
  return n * 2;
});
console.log(mapNums);

// reduce函数：对内容汇总
let reduceNums = mapNums.reduce(function (previous, n) {
  return previous + n;
}, 0);
console.log(reduceNums);


let number = nums.filter(n => n < 100).map(n => n * 2).reduce((pre, n) => pre + n);
console.log(number);