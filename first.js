let arr=[45,45,443,3333];
let d=0.1;

for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
    let Nnum=arr[i]-(arr[i]*0.1);
    arr[i]=Nnum;
};
console.log(arr);