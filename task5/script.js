const task0 = {
    //вернуть сумму 3х чисел
    sum(a, b, c) {
        return a + b + c;
    },
    //вернуть сумму чисел, но надо учесть что аргументы могут быть не только числами, использовать оператор typeof в связке с if-else
    safeSum(a, b, c) {
        let sum = 0;
        if(typeof (a !== "number") && typeof (b !== "number") && typeof (c !== "number")){
            return 'typeof not a number';
        }
        return sum = a + b + c ;
    },
    // вернуть максимальное число
    max(a, b, c) {
        let m = a;
        if (m > b && m > c) {
            return m;
        } else if (b > c && b > m) {
            return m = b;
        }
        return m = c;
        // return Math.max(a, b, c);
        // return (c > b && c > a) ? c : b > a ? b : a;
    },
    //вернуть минимальное число
    min(a, b, c) {
        let m = a;
        if (m < b && m < c) {
            return m;
        }
        else if (m < b) {
            return m = b;
        }
        else {
            return m = c;
        }
        // return Math.min(a, b, c);
        // return (c < b && c < a) ? c : b < a ? b : a;
    }
};