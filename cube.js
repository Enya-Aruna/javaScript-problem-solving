function cubeNumber(number){
if(typeof number !== 'number'){
   return 'please provide a number' ;
}
else{
    return Math.pow(number , 3);
}
}

 console.log(cubeNumber("4"));






