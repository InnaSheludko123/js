function countDown(num){
    if (num>=0){
console.log(num);
countDown(num-1);
}
}
countDown(12);
