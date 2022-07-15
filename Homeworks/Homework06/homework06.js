var tree = {
  0: {
    1: {
      3: {},
      4: {
        6: {},
      },
    },
    2: {
      5: {},
    },
  },
};

/* 1. Get array of node ids from tree (keys)*/

function getKeys(obj, arr = []) {
  //debugger
  for (let key in obj) {
    arr.push(Number(key));

    if (typeof obj[key] === "object") {
      getKeys(obj[key], arr);
    }
  }
  return arr;
  //return arr.sort((a, b) => a - b);   petq chi senc
}
console.log(getKeys(tree)); /*  [ 0, 1, 2, 3, 4, 5, 6 ]  */

/*  2. Get array of nodes from tree       */

function getIdChild(obj, arr = []) {
  for (let key in obj) {
    let object = {};
    object.id = +key;
    object.children = [];
    for (let child in obj[key]) {
      object.children.push(+child);
    }
    arr.push(object);
    getIdChild(obj[key], arr);
  }
  return arr;
}

console.log(getIdChild(tree));

/*  output
 [
  { id: 0, children: [ 1, 2 ] },
  { id: 1, children: [ 3, 4 ] },
  { id: 3, children: [] },
  { id: 4, children: [ 6 ] },
  { id: 6, children: [] },
  { id: 2, children: [ 5 ] },
  { id: 5, children: [] }
] 
*/

/* 3. Implement binary search */
/*  how to check sorted array?? Math.floor??? */

function binarySearch(arr, target, left = 0, right = arr.length - 1) {
  //debugger
  if (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (target === arr[mid]) {
      return mid;
    }
    if (target < arr[mid]) {
      return binarySearch(arr, target, left, mid - 1);
    }
    if (target > arr[mid]) {
      return binarySearch(arr, target, mid + 1, right);
    }
  }
  return -1;
}
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 9, 21, 33], 33)); //9
// binarySearch([1, 2, 3, 4, 5, 6, 7, 9, 21, 33], 8); //-1
