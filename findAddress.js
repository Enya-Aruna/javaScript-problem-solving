function findAddress(obj){

 

     if(typeof obj !== 'object' ){
        return  ;
    }
   else{
    const street = obj.street || "__" ;
    const house = obj.house || "__" ;
    const society = obj.society || "__" ;
    return street + ' , ' + house + ' , ' + society + ' ,' ;
   }


}

const address  = {
    street: 10 ,
    house : ' 15A' ,
    society : 'earth perfect'

}
const input = findAddress(address);
console.log(input)