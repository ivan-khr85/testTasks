let arr = [0, 2, 3, 3, 3, 4, 5, 6, 6];


Array.prototype.occurencesCount = function(number) {
	return this.filter(n => n === number).length
}


console.log(arr.occurencesCount(0)); // 1
console.log(arr.occurencesCount(2)); // 1
console.log(arr.occurencesCount(3)); // 3
console.log(arr.occurencesCount(4)); // 4
console.log(arr.occurencesCount(5)); // 1
console.log(arr.occurencesCount(6)); // 2

