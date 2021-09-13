const loopsTasks = {
    /**
     * 
     * @param {} n - целое число
     * нужно посчитать и вернуть сумму всех чисел начиная с 1 и до n
     */
    sumFromOneToN: function (n) {
        let result = 0;
        for(i = 0; i <= n; i++){
           result += i;
     }
      return result;
    },
  
    /**
     * вывести не консоль строку посимвольно всеми доступными циклами. for, for of, while, do .. while
     */
    printString(str) { 
        for(i = 0; i < str.length; i++){
            console.log(str[i]);
        }

        for ( let sym of str ){
            console.log(sym);
        }

        let i = 0;
        while (i < str.length){
            console.log(str[i]);
            i++;
        }

        let i = 0;
        do{
            console.log(str[i]);
            i++;
        }
        while(i < str.length);
    },
  
    /**
     * на вход ф-ция получет 2 числа n, maxAttempts
     * n - максимальное число, maxAttemps - максимальное кол-во попыток угадывания
     * ф-ция генерирует псевдослучайное счисло между 1 и n
     * далее у пользователя есть maxAttemps попыток это число угадать
     * ф-ция должна запрашивать у пользователя число, через prompt
     * если пользователь угадал число - вернуть true, если все попытки использованы и число не угадано - false
     * использовать цикл do ... while
     */
    guessNumber(n, maxAttempts) { 
        let random = Math.floor(1 + Math.random() * (n - 1));
        let checkResult = +prompt(`Угадайте число от 1 до ${n}`);
        let checkTry = 1;
  
        do {
              checkTry++;
              checkResult = +prompt(`Угадайте число от 1 до ${n}`);
        } while (checkTry !== maxAttempts);
  
  
        if (checkResult === random) {
              return true;
        }
        if (checkResult !== random) {
              return false;
        }

    },
  
  };