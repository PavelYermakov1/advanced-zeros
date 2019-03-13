module.exports = function getZerosCount(number, base) {
  var num = base;
  

  var ind = findQuantity(num);
   
  var h = 2
 
  var i = 1, res = null;

  while(Math.pow(ind,i) < number){
      res += Math.floor(number / Math.pow(ind,i));
      i++;
  }

  
 
  var j = 1, res1 = null;
  
  
  while(Math.pow(h,j) < number){
      res1 += Math.floor(number / Math.pow(h,j));
      j++;
  }

  var repInd1 = 0;
  while(num % h == 0){
      num = num / h;
      repInd1++;
  }


  var repInd = 0;
  while(num % ind == 0){
      num = num / ind;
      repInd++;
  }
  if((Math.floor(res / repInd)) > (Math.floor(res1 / repInd1))) {
      return Math.floor(res1 / repInd1);  
  } else {
      return Math.floor(res / repInd);  
  }



  

}

function findQuantity(a){
    let quantity = [];
    
    for(let i = 2; i <= a; i++){
    while(a % i == 0) {
          quantity.push(i);
          a = a / i;
      }
      
    }
    
    let length = quantity.length;    
      return quantity[length-1];
}