const arraysTask = {
    //ф-ция должна сортировать массив любым способом(пузырьком, вставками, выбором)
    //использовать метод array.sort нельзя. Сортировка дложна использовать циклы, условные операторы и тп.
    sortArray(array) {
        for (n = 0; n < array.length; n++) {
            for (i = 0; i < array.length - 1; i++) {
                if (array[i] > array[i + 1]) {
                    let max = array[i];
                    array[i] = array[i + 1]
                    array[i + 1] = max;
                }
            }
        }
        return array;
    },
    //вернуть массив, состоящий из идущих подряд чисел, начиная со start, и до end включительно
    //range(0, 3) => [0, 1, 2, 3]
    range(start, end) {
        let arr = [];
        let ind = 0;
        for (i = start; i <= end; i++) {
            arr[ind] = i;
            ind++;
        }
        return arr;
    },
    //ф-ция должна вернуть последние n элементов массива
    //если n > array.length то вернуть копию массива
    lastN(array, n) {
        let arr = [];
        for (j = 0; j < n; j++) {
            if (n > array.length) {
                return copyArr = array;
            }
            arr[j] = array[array.length - n + j];

        }
    return arr;
    },
    //ф-ция должна вернуть новый массив, в котором будут все элементы исоходного массива, но без дубликатов
    //unique([1, 2, 3, 3]) => [1, 2, 3]
    unique(array) {
        let newArr = [];
        for (i = 0; i < array.length; i++) {
            if (newArr.includes(array[i])) {
                continue;
            }
            newArr.push(array[i]);
        }
        return newArr;
    },
    //вернуть новый массив из элементов, для которых ф-ция cb вернёт true
    //аналог родного array.filter
    filter(array, cb) {
        let newArr = [];
        for(i = 0; i < array.length; i++){
            if(cb(array[i])) {
                 newArr.push(array[i]);
            }
         }
         return newArr;
    },
    //эта ф-ция должна работать как array.forEach, но если cb возвращает false то обход цикла должен прикратиться
    breakableForEach(array, cb) {
        for(let i = 0; i < array.length; i++){
            if(cb(array[i]) === false){
                return;
            }
        }
    },
    //ф-ция должна вернуть true если в обеих массивах одинаковые элементы, иначе false
    //areArraysEqual([1, 2, 3], [2, 3, 1]) => true
    //areArraysEqual([1, 2, 2], [1, 2]) => false
        areArraysEqual(arr1, arr2) {
            if(arr1.length !== arr2.length){
                return false;
            }   
                for(i = 0; i < arr1.length; i++){
                    let numIndex =  arr2.indexOf(arr1[i]);
                       
                    if(numIndex !== -1 ){
                        arr2.splice(numIndex,1);                           
                    }
                    else{
                        break;
                    }
                }
                return arr2.length == 0;
        
        }
    };
