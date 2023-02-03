const removeFromArray = function(array, remove) {
   const toRemove = [];
   for(let i = 1 ; i < arguments.length ; i++){
     toRemove.push(arguments[i]);
   }
   for(let i = 0; i< toRemove.length ; i++){
      const index = array.indexOf(toRemove[i]);
      if(index == -1){
         continue;
      }
      array.splice(index,1)
   }
   console.log(array);
   return array;
};

// Do not edit below this line
module.exports = removeFromArray;
