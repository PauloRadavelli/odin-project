const fibonacci = function(index) {
    index = parseInt(index);
    let a = 0, b = 1, c = index;
    if(index < 0){
        return "OOPS"
    }

    for(let i = 2; i <= index; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return c;
};

// Do not edit below this line
module.exports = fibonacci;
