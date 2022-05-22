
/*  Write a recursive function to determine whether all digits of the
 number are odd or not */



const number = 4211133;
 
function isOddNumber(num){

    if(num <= 9 && num >0) {
        return num % 2 !==0;
    }
    
         let lastNum = num % 10;
         num = Math.trunc(num/10);

         if(lastNum % 2 !== 0) {
             return isOddNumber(num);
          }

 return false;

}


gconsole.log(isOddNumber(number));   // false
//console.log(isOddNumber(7791));      //true
//console.log(isOddNumber(5));        //true





/*   Given an array of numbers. Write a recursive function to find its minimal positive element.
 (if such element does not exist, return -1) */


const array = [56, -9, 87, -23, 3, -105, 55, 1];


   function findMinPositive(arr, arr1 = []){
       

       if(arr.length === 0){
           return;
       }
         let remove = arr.shift();

            if(remove >= 0){
             arr1.push(remove);
         }

         findMinPositive(arr, arr1);

         if(arr1.length === 0){
            return -1;
        }
       return(Math.min(...arr1));
   }

   //console.log(findMinPositive(array));    //0
   //console.log(findMinPositive([45, -9, 15, 5, -78]));   //5
   //console.log(findMinPositive([-5, -9, -111, -1000, -7]));   //-1



/*   Write a JavaScript function to get all possible subsets of given length of the given array  */

    /*  կիսատ է և սխալ է աշխատում */

    
   const array1 = [1, 2, 3, 4];  
    
   function setArray(arr, n, subsets = [] ) {
       
      let remove = arr.shift();
  
         if(arr.length === 0){
          return;
         }
          
         subsets.push(remove);

         for(let i = 0; i <arr.length; i++)  {   
        
             if(subsets.length < n) {
              subsets.push(arr[i]);
                if(subsets.length === n){
                  console.log(subsets);

                }
             }   
       }
             setArray(arr,n)
   }


   //console.log(setArray(array1,2));
   //console.log(setArray(array1,3));
   //console.log(setArray([1, 2, 3, 4, 5], 3));
   


  /*  Create a function that builds a tree like object given an array with object which
            contains parent and id properties.  */

   let treeNodes = [
    {parent : null, id : 0},
    {parent : 0, id : 1},
    {parent : 0, id : 2},
    {parent : 1, id : 3},
    {parent : 1, id : 4},
    {parent : 2, id : 5},
    {parent : 4, id : 6}
]


function getRoot(arr){
    let tree = {}
    for(let i = 0; i < arr.length; i++){
        if (arr[i].parent === null){
            tree[`${arr[i].id}`] = {}
        }
    }
    return tree
}




    function toTree(arr, tree = getRoot(arr), count = 0){
            if (count === arr.length){
                return tree;
            }
                 for(let node of arr){
        
                    if((tree.hasOwnProperty(node.parent))){
                       tree[node.parent][node.id] = {};
                       
                        count ++;
                        toTree(arr, tree[node.parent], count);
                        
                    }
                }
               
               return tree;
        }

//     for(let j = 0; j < arr.length; j++){
//         if (tree.hasOwnProperty(`${arr[j].parent}` === true)) {  
//             tree[`${arr[j].parent}`][`${arr[j].id}`] = {};
//             count += 1
//             toTree(arr, tree[`${arr[j].parent}`], count)
//         }
//     }
//     return tree
// }


//console.log(toTree(treeNodes));




function reduceTree(treeNodes, parent = null) {
    
    return treeNodes.reduce((tree, branch) => {    
        if (branch.parent === parent) {
            tree[branch.id] = reduceTree(treeNodes, branch.id); 
        }     
        return tree;
    }, {})
}
//console.log(reduceTree(treeNodes))
