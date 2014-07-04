
function mystery(x,y) {//multiplication function
    if(y < 1) {
        return x + mystery(x, y-1);
    } else {
        return x;
    }
};    

console.log(mystery(3,2));


function magic(x,y) {//exponent function
    if(y > 1) {
        return x * magic(x, y-1);
    } else {
        return x;
    }
};    

console.log(mystery(3,2));