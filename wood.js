/* 
fixed : per item wood requirments
1. chair --> 3cft
2. table --> 10cft
3. bed -- > 50cft

very: quantity
*/

function woodCalculator(chairQuantity , tableQuentity , bedQuantity){
    const perChairWood = 3 ;
    const perTableWood = 10 ;
    const perBedWood = 50 ;

    const chairWood = chairQuantity*perChairWood;
    const tableWood = tableQuentity*perTableWood;
    const bedWood = bedQuantity * perBedWood;

    const totalWood = chairWood + tableWood + bedWood ;
    return totalWood ;


}

const totalWood = woodCalculator(6, 1,1) ;
console.log(totalWood)