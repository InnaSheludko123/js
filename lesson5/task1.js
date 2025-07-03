function square (width,height) {
    let result = width*height;
    return result;
}
console.log(square(12,15)); //Function Declaration

const square = function(width,height) {
    let result = width*height;
    return result;
}
console.log(square(12,21)); //Function Expression

const square = (width,height) => {
    return width*height; 
}
console.log(square(2,5)) // Arrow Function
