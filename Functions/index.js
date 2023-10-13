function longString(str){

    let strArr = str.split(' ');
    let large=strArr[0];
    console.log(strArr)
    for(let i = 1 ; i < strArr.length ; i++){
      if(large.length<strArr[i].length){
        large = strArr[i];
      }
    }
    return large;
}

// console.log(longString("Hello Worldd this is greatest world"));

// Find the fictorial of a given number using recursion

function getFictorial(n){
  if(n=== 1){
    return 1;
  }
  else if(n === 0){
    return 0;
  }
  else 
  {
    return n*getFictorial(n-1);
  }
}

// console.log(getFictorial(3))

function findMissingNumbers(arr){
  let missNumbers = [];
for(let i = 0 ; i<arr.length ; i++){

  if(arr[i+1] - arr[i] <= 1){
    continue;
  }
  else 
  {
  
  let   n = arr[i]+1;
    while(n < arr[i+1]){
      missNumbers.push(n);
      n++;
    }
  }
}

return missNumbers;
}

console.log(findMissingNumbers([1,2,3,6,9]))