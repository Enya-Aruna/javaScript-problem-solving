function sortMaker(arr){

    if(arr.length < 2 || arr.length >2){
        return 'please put an exact two element' ;
    }
    else {
        let sorting = [] ;
        for (let element of  arr) {
            if(element < 0 ){
                return "invalid Input" ;
            }
            else{
                sorting.push(element)
            }
        }
        if (sorting[0] === sorting[1]) {
            return "equal";}
        else{
            if(sorting[0] < sorting [1]){
                const temp = sorting[0] ;
                sorting[0] = sorting[1] ;
                sorting[1] = temp;
                return sorting ;
            }
        }
    }

}

const numbers = [20 , 21];
const result = sortMaker(numbers)
console.log(result)