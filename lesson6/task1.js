function handleNum(num, handleEven, handleOdd){
    if (num%2===0){
        handleEven();
    } else if (num%2===1) {
        handleOdd();
    }
}
function handleEven(){
    console.log('Number is even');
}

function handleOdd() {
    console.log("Number is odd");
}

handleNum(6,handleEven,handleOdd);