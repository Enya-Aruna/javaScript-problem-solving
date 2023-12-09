function canPay(changeArray , totalDue){
if(changeArray.length === 0 ){
    return 'Invalid Array' ;
}
else{
    let sum  = 0 ;
    for (let i = 0 ;i < changeArray.length ; i++){
        const element = changeArray[i] ;
        sum = sum + element ;
    }
    if( sum >= totalDue){
        return true ;
    } else{
        return false ;
    }
}


}

const array = [1 ,2 ,5];
const taka = 10 ;
const payMoney = canPay(array ,taka)
console.log(payMoney)