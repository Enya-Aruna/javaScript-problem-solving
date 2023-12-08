/* 
discount tickt price function
1.if you buy less then 100 ticket , per price :100
2.if you buy more then 100 ticket but less then 200, first 100 ticket per price :100  and rest ticket price per 90 taka
3.if you buy more  then 200 ticket , 
first 100 ticket -->  per price :100tk
 101 - 200  ticket -- > per price :90tk

*/

function ticketPrice(ticketQuantity){
    const first100Rate = 100 ;
    const second100Rate = 90 ;
    const rest100Rate = 70 ;
    if(ticketQuantity <= 100){
        const price = ticketQuantity*first100Rate ;
        return price;

    }
    else if(ticketQuantity<= 200){
        const first100Price = 100*first100Rate ;
        const restTicketQuantity = ticketQuantity -100 ;
        const restTicketPrice = restTicketQuantity*second100Rate ;
        const totalPrice = first100Price + restTicketPrice ;
        return totalPrice;
    }
    else {
        const first100Price = 100 * first100Rate ;
        const secoend100Price = 100 * second100Rate ;
        const restTicketQuantity = ticketQuantity - 200 ;
        const restTicketPrice =  restTicketQuantity *rest100Rate;
        const totalcost =  first100Price+ secoend100Price +restTicketPrice ;
        return totalcost ;

    }
    

}
const totalPrice = ticketPrice(300)
console.log(totalPrice)