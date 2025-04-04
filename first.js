let marks=[40,30,70.90,95,100];
let avbnty=marks.filter((val)=>{
if (val>=90){
    return val;
}
});
console.log("the students who score abv 90 :",avbnty);

let n= prompt("enter the numper");
let arr=[];
for (let i=0; i<=n; i++){
    arr.push(i);
}
console.log(arr);
 
let sum=arr.reduce((res,curr)=>{
return res+curr;
})
console.log("sum of the array values:",sum);

let product=arr.reduce((res,curr)=>{
    return res*curr;
    })
    console.log("product of the array values:",product);