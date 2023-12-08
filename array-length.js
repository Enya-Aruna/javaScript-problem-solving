const friendList = [ 'Tamanna' , 'sadia afrin' , 'jannatul nayeem saima' , 'saif'];


function bestfriend(friendList){
   let largestName = friendList [0]
    for (let i =0 ; i <= friendList.length; i++){
        const friend = friendList[i];
    
         if(friend.length >largestName.length){
             largestName = friend ;
            

         }
    }
    return largestName;
}
const mySelection =bestfriend(friendList);
console.log(mySelection)

