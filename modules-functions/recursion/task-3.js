/* Task #3
- Напишите функцию fib(n), которая возвращает n-е число Фибоначчи.
Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....
----------------------------------
function fib(n) { // code }

console.log( fib(3) ); // 2
console.log( fib(7) ); // 13
console.log( fib(77)); // 5527939700884757
================================================*/

function fib(n) {
	return (n < 2) ? n : (fib(n - 1) + fib(n - 2));
}

console.log( fib(3) );
console.log( fib(7) );
console.log( fib(77));