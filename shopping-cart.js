const soppingCart = [
    {name : 'shoe' ,  quantity: 2 , price : 1200} ,
    {name : 'shart' , quantity: 3 ,  price : 2200} ,
    {name : 'pant' ,  quantity: 5 , price : 3700} ,
    {name : 'belt' ,  quantity: 1 , price : 600} 
];

function totalCost(products){
    let sum = 0;
for(let i = 0 ; i< products.length ; i++){
    const product = products[i];
    const productTotal = product.price * product.quantity;
    sum = sum + productTotal ;

}
return sum;
}

const expance = totalCost(soppingCart);
console.log('total expance today ' , expance)