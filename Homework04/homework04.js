
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
   
