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

function findSubarraysOfArray(arr, n, resultArray = [], i = arr.length - 1) {
  //debugger
  for (i; i >= 0; i--) {
    let curr = [...arr];
    curr.splice(i, 1);
    if (curr.length !== n) {
      findSubarraysOfArray(curr, n, resultArray, i - 1);
    } else {
      resultArray.push(curr);
    }
  }
  return resultArray;
}
findSubarraysOfArray([1, 2, 3, 4], 3);
findSubarraysOfArray([1, 2, 3, 4, 5], 3);

function getAllSubsets(array, n) {
  //debugger;
  const subsets = [[]];
  for (const el of array) {
    const last = subsets.length - 1;
    for (let i = 0; i <= last; i++) {
      subsets.push([...subsets[i], el]);
    }
  }
  const filtered = subsets.filter((ar) => ar.length === n);
  return filtered;
}
console.log(getAllSubsets([1, 2, 3, 4], 3));

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
sayHiDecor1("Hello", "Ann");

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

    timer = setTimeout(function () {
      let result = f.call(this, ...rest); //timer = setTimeout(() => {f.call(this, ...rest)}, ms);
      return result; //timer = setTimeout(() => f.call(this, ...rest), ms);
    }, ms);
  };
}

function sum(a, b) {
  console.log(a + b);
}
const debounceCall = debounce(sum, 2000);
debounceCall(1, 3);
debounceCall(2, 3);
debounceCall(3, 5); //output will be onli last call,after 2sec
