const myReq = new XMLHttpRequest();
myReq.addEventListener("load",function()
{
    const obj = JSON.parse(this.response)
    for(let val of obj){
        console.log(val.flags.png)
    }
});
myReq.open("GET",URL);
myReq.send()