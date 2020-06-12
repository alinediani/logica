module.exports= function calculaMedia(arr){
    var n=0
    var r=0
    for(var i=0;i<3;i++){
        n=arr[i]+n
    }
r=n/3
return r;
}