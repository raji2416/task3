const obj1 = {name:"peson1",age:5};
const obj2 = {age:5,name:"person1"};
var flag=true;
if (Object.keys(obj1).length==Object.keys(obj2).length){
    for(key in obj1){
        if(obj1[key]==obj2[key]){
            continue;
        }
        else{
            flag=false;
            break;
        }
    }
}
    else {
          flag=false;
        
    }
console.log("is object equal" + flag);