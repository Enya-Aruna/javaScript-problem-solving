const nameList = ['salam' , 'tamanna' , 'saima' , 'sadia' , 'samira' , 'meharu' , 'jiniya' , 'salam' , 'saima'];

function removeDuplicate(names){
    const unique= [] ;
    for(let i = 0  ; i < nameList.length ; i++){
        const name = nameList[i];
        if(unique.includes(name) === false){
            unique.push(name)
        }

    }
    return unique;
}

const uniqueName = removeDuplicate(nameList);
//console.log(uniqueName)

const school = 'salma islam' ;
const langthofstring = school.length ;
console.log(langthofstring)