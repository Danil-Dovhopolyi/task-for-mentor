/**
   * на вход ф-ция получет 2 числа n, maxAttempts
   * n - максимальное число, maxAttemps - максимальное кол-во попыток угадывания
   * ф-ция генерирует псевдослучайное счисло между 1 и n
   * далее у пользователя есть maxAttemps попыток это число угадать
   * ф-ция должна запрашивать у пользователя число, через prompt
   * если пользователь угадал число - вернуть true, если все попытки использованы и число не угадано - false
   * использовать цикл do ... while
   */
function guessNumber(n, maxAttempts) {
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
}

guessNumber(5, 2);


