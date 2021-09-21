const basicsTask = {
    //если n целое число то вернуть true, иначе false
    isIntegerNumber(n) {
        if (n - Math.trunc(n) > 0) {
            return false;
        }
        return true;
    },
    //ф-ция должна уметь округлить число n до l знаков после запятой, 1 <= l <= 10
    //roundNumber(0.66666666, 2) => 0.67
    //roundNumber(1, 1) => 1.0
    roundNumber(n, l) {

    },
    
    //на входе массив чисел
    //ф-ция должна вернуть массив процентовб т.е. сколько процентов занимает каждое число от общей суммы
    //percentage([1, 1]) => [0.5, 0.5]
    //percentage([1, 2, 3]) => [0.17, 0.33, 0.6]
    percentage(numbers) {
        let newArr = [];
        let result = numbers.reduce(function (sum, elem) {
            return sum + elem;
        }, 0);

        for (j = 0; j < numbers.length; j++) {
            newArr.push((numbers[j] / result));
        }
        return newArr;
    }
};
