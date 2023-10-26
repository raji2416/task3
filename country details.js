const URL = "https://restcountries.com/v3.1/all"

const myReq = new XMLHttpRequest();
myReq.addEventListener("load",function()
{
    const obj = JSON.parse(this.response)
    for(let val of obj){
        console.log(val.flags.png)
        console.log(val.name)
        console.log(val.region)
        console.log(val.subregion)
        console.log(val.population)
    }
});
myReq.open("GET",URL);
myReq.send()