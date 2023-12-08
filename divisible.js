/* 
1.show output from 1 - 50
2. if the number is disibile by 3 instead of the number show 'foo'
3. if the number is disibile by 5 instead of the number show 'bar'
4. if the number is disibile by 3 and 5  instead of the number show 'foobar'
 */

for(let i =1 ; i<=40 ; i++){
    if(i % 3 === 0 && i  % 5 ===0 ){
        console.log('Foobar')
       }
    else if(i % 3  === 0){
    console.log('foo')
   } 
     else if(i % 5 === 0){
    console.log('bar')
   }
   
     else{
    console.log(i)
   }
}