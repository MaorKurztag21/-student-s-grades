
function range(arr){
    let max=Math.max.apply(Math,arr);
    let min=Math.min.apply(Math,arr);
    let result=max-min;
}

function Median(arr){
    let sum;
    let long=arr.length -1;
    let short=Math.floor((arr.length)/2);
    arr.sort(function(a, b){return a - b});
   if(arr.length%2==0){
       sum=[arr[short] + arr[short+1]]/2;
   }
   if(arr.length%2==1){
    sum=arr[long/2];
   }
   console.log(sum);
}

    
   
