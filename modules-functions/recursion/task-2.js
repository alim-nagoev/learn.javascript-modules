/* Task #2
- Написать функцию factorial(n), которая возвращает факториал числа n!, используя рекурсивный вызов.
- n! можно записать как n * (n-1)!. Например: 3! = 3*2! = 3*2*1! = 6 (n! = n * (n - 1) * (n - 2) * ...*1)
----------------------------------
1! = 1
2! = 2 * 1 = 2
3! = 3 * 2 * 1 = 6
4! = 4 * 3 * 2 * 1 = 24
5! = 5 * 4 * 3 * 2 * 1 = 120
================================================*/

function factorial(n) {
	return (n === 0 || n === 1) ? 1 : n * factorial(n - 1);
}
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
