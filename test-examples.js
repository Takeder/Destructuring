
// пример деструктуризации
let data = {
    a: {
        a1: {
            b: 1,
            c1: "test"
        }
    },
    b: {
        d: 123,
        c: {
            cc: {
                dd: 43
            }
        },
        bb: "test2"
    }
};

let {
        a: {
            a1: {
                c1: test
            }
        },
        d: {
            d: test2
        }
    } = data;

console.log('test: ' + test);
console.log('test2: ' + test2);


// В объявлении функции
async function myFn() {
    // await ...
  }
  
  // В стрелочной функции
  const myFn = async () => {
    // await ...
  }
  
  function myFn() {
    // await fn(); (синтаксическая ошибка, т. к. нет async)
  }

  myFn();


// ------------------------------------------------------------------------------------------------ //

// в каком порядке выведутся цифры в консоль? Рассказать почему именно такой порядок
setTimeout(() => {
    console.log(1);
}, 0);

let a = new Promise((resolve) => {
    resolve();
    console.log(2);
})

a.then(res => {
    console.log(3);
});

console.log(4);

// ------------------------------------------------------------------------------------------------ //

// какой результат вывода? Рассказать почему.
console.log(0.3 - 0.1); //0.19999999999999998

// какой результат вывода? Рассказать почему.
console.log({} === {});

// как вывести максимальное возможное значение чиста в JS
console.log(Number.MAX_VALUE);

// Есть некоторая строка, что будет, если мы возьмем str[0]?
var str = 'fgfggg';

// ------------------------------------------------------------------------------------------------ //

// заставить работать конструкцию 5[x => x + 2], в результате должно получиться [7,6,5,4,3]

Object.setPrototypeOf(
    Number.prototype, 
    new Proxy(Number.prototype, {
      get(target, prop, receiver) {
        let fn;
        try {
          fn = eval(prop);
        }
        catch(e) {}
        if(typeof fn === 'function') {
          let res = [];
          let num = receiver.valueOf();
      for(let i=0; i<receiver.valueOf(); i++) {
            res.push(fn(num--));
          }
          return res;
        }
        else {
          return undefined;
        }
      }
    }))

console.log('123', 5[x => x + 2]) // [7,6,5,4,3]