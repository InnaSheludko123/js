function checkOrder(available,ordered) {
    if (ordered > available) {
        console.log('Your order is too large, we don’t have enough goods.'); 
    } else if (ordered === 0) {
       console.log('Your order is empty'); 
    } else {
       console.log('Your order is accepted');
    }
}
checkOrder(2,5);
checkOrder(3,0);
checkOrder(6,4);