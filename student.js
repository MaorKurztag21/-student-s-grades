
function range(arr){
    
    let max=Math.max.apply(Math,arr);
    let min=Math.min.apply(Math,arr);
    let result=max-min;
    return result;
}

function Median(arr){
    let sum;
    let long=arr.length -1;
    let short=arr.length/2;
    arr.sort(function(a, b){return a - b});
   if(arr.length%2==0){
       sum=(arr[short]+arr[short-1])/2;
   }
   if(arr.length%2==1){
    sum=arr[long/2];
   }
   return sum;
}

function second(arr){
    let arr=[73, 91, 88, 56, 62, 84, 95, 96, 88, 92];
    let arr1=arr.slice((arr.length/2),arr.length);
    let max1=Math.max.apply(Math,arr1);
    let min1=Math.min.apply(Math,arr1);
    let rang=max1-min1;
     return rang;
}

   let arr=([73, 91, 88, 56, 62, 84, 95, 96, 88, 92]);
   console.log("stats:\n\tRange:" + range(arr) + "\n\tMedian:" + Median(arr) +"\n\tHalf range:" + second(arr);