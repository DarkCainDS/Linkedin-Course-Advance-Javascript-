// write a function to determine if two objects are the same

function isEqual(obj1, obj2){
    if(Array.isArray(obj1) && Array.isArray(obj2)){
        for( let z = 0; z <= obj1.length; z++){
            if(!isEqual(obj1[z],obj2[z])){
                return false;
            }
        }
    }
    if(typeof obj1 === 'object' && typeof obj2 === 'object'){
        const keys = Object.keys(obj1);
        for(const key of keys){
            if(!isEqual(obj1[key], obj2[key])){
                return false;

            }
        }
        return true;
    }
    return obj1 === obj2;
}
console.log(isEqual(2, 2));
console.log(isEqual([1,2,3],[1,2,3]));
console.log(isEqual({a: 1, b:2},{a: 1, b:2}));
console.log(isEqual([{a: 1, b:2}],[{a: 1, b:2}]));

console.log(isEqual({a: [100,200], b: 2}, {a: [100,200], b: 2}));
console.log(isEqual(2, {2 : [2]}));