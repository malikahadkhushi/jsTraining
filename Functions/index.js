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

console.log(longString("Hello Worldd this is greatest world"));