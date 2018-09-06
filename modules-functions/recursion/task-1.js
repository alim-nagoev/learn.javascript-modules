/* Task #1
- Напишите функцию sumTo(n), которая для данного n вычисляет сумму чисел от 1 до n:
1.С использованием цикла.
2.Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) для n > 1.
3.С использованием формулы для суммы арифметической прогрессии.
----------------------------------
sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
sumTo(4) = 4 + 3 + 2 + 1 = 10
sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
================================================*/

//1.С использованием цикла.
function sumTo(n) {
	let result = n;
	for (let i = 0; i < n; i++) {
		result += i;
	}
	return result;
}

console.log(sumTo(1))
console.log(sumTo(2))
console.log(sumTo(3))
console.log(sumTo(4))

//2.С использованием рекурсии.
function sumTo(n) {
	return (n === 0 || n === 1) ? 1 : n + sumTo(n - 1);
}
console.log(sumTo(1))
console.log(sumTo(2))
console.log(sumTo(3))
console.log(sumTo(4))