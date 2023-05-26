exports.sum =(a,b) => {
    if(a==0 && b == 0) {
        return "numbers should not be zero"
    }
    else {
        let c = a+b;
        console.log(c);
        return c;
    }
}
