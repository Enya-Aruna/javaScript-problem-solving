const soppingCart = [
    {name : 'shoe' , price : 1200} ,
    {name : 'shart' , price : 2200} ,
    {name : 'pant' , price : 3700} ,
    {name : 'belt' , price : 600} 
];

function totalCost(products){
    let sum = 0;
for(let i = 0 ; i< products.length ; i++){
    const product = products[i];
    sum = sum + product.price;

}
return sum;
}

const expance = totalCost(soppingCart);
console.log('total expance today ' , expance)