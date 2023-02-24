function increaseCount(printAt){
    return ()=> printAt += 1;
}
const valor = increaseCount(21);
console.log(valor());
console.log(valor());
console.log(valor());
console.log(valor());