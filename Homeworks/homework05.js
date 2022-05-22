/*1.   Create a function that builds a tree     */

const treeNodes = [
  { id: "root", children: [1, 2] },
  { id: 1, children: [3] },
  { id: 2, children: [4, 5] },
  { id: 3, children: [6] },
  { id: 4, children: [7] },
  { id: 5, children: [] },
  { id: 6, children: [] },
  { id: 7, children: [8, 9] },
  { id: 8, children: [] },
  { id: 9, children: [10] },
  { id: 10, children: [] },
];

function toTree(treeNodes, parent = "root") {
  return treeNodes.reduce((tree, node) => {
    if (node.id === parent) {
      node.children.forEach((nodeChildValue) => {
        tree[nodeChildValue] = toTree(treeNodes, nodeChildValue);
      });
    }
    return tree;
  }, {});
}
console.log(toTree(treeNodes));

/* 2.   Write a JavaScript function to get all possible subsets of given length of the given array.
    Assume that all elements in the array are unique.      */

/* 3. Create a decorator delay(f, ms) that delays each call of ‘f’ by ‘ms’ milliseconds  */

function delayDecor(f, ms) {
  return function (...rest) {
    setTimeout(function () {
      let result = f.apply(this, rest);
      return result;
    }, ms);
  };
}

function sayHi(massage, name) {
  console.log(massage + " " + name);
}

const sayHiDecor1 = delayDecor(sayHi, 1000);
sumDecor1("Hello", "Ann");

const sayHiDecor2 = delayDecor(sayHi, 2000);
sayHiDecor2("Hi", "Sem");

/*    Why???
 const sayHiDecor2 = delayDecor(sayHi, 2000)("Hi", "Sem");
   sayHiDecor2;                          output "Hi Sem";
   console.log(sayHiDecor2)          output:   undefined  
                                              "Hi Sem"
  */

/*   4.   Implement Debounce decorator 
         կիսատ է,  Date()-ով լրացումներ պետք է արվի            */

function debounce(f, ms) {
  let timer;
  return function (...rest) {
    clearTimeout(timer);
    if (ms < 1000) {
      return;
    }
    timer = setTimeout(function () {
      let result = f.call(this, ...rest);
      return result;
    }, ms);
  };
}

function sum(a, b) {
  console.log(a + b);
}
const debounceCancel = debounce(sum, 200);
debounceCancel(1, 3);
const debounceCall = debounce(sum, 1500);
debounceCall(2, 3);
