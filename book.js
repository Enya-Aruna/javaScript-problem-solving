function paperRequirment(bookQuantity1 , bookQuantity2 , bookQuantity3){

    const perBook1 = 100 ;
    const perBook2 = 200 ;
    const perBook3 = 300 ;

    const totalBook1 = perBook1 * bookQuantity1 ;
    const totalBook2 = perBook2 * bookQuantity2 ;
    const totalBook3 = perBook3 * bookQuantity3 ;
    const totalPaper = totalBook1 + totalBook2 + totalBook3 ;
    return totalPaper;


}
const totalPaper = paperRequirment(10, 5 , 2);
console.log(totalPaper)