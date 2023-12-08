function findPosativeNumber(number){
    const posativeNumber = [] ;
    for(let i = 0 ; i<= number.length ; i++){
        const item = number[i];
        if(item>0){
            posativeNumber.push(item)

        }
        else{
            break ;
        }
    }
    return posativeNumber ;
}
const listOfNumber = [12, 56 , 786 , 56 , 90 , 90 , 32 , -60 , 100 , 56];
const listOfposativeNumber = findPosativeNumber(listOfNumber)
console.log(listOfposativeNumber)