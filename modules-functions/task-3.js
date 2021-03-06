/* Task #2:
- Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
В этой задаче функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше.
--------------------------------------
Пример вызовов:
	pow(3, 2) = 3 * 3 = 9
	pow(3, 3) = 3 * 3 * 3 = 27
	pow(1, 100) = 1 * 1 * ...*1 = 1	
--------------------------------------
=====================================*/

// 1 вариант решения =====================================

function pow(a, b) {
	if (b % 1 !== 0 || b < 1) {
		return false;
	} else {
		return a ** b
	}
}

console.log(pow(3, 2));
console.log(pow(3, 3));
console.log(pow(1, 100));

// 2 вариант решения =====================================

let pow = (a, b) => (b % 1 !== 0 || b < 1) ? false : a ** b;

console.log(pow(3, 2));
console.log(pow(3, 3.5));
console.log(pow(1, 100));

