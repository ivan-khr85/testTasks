const isInteger = num => Number.isInteger(num);
const splitNunToArr = num => num.toString().split('');
const changeElementsInArr = (arr, firstIndex, secondIndex) =>
	([arr[firstIndex], arr[secondIndex]] = [arr[secondIndex], arr[firstIndex]]);

const biggerNumber = num => {
	const numArr = splitNunToArr(num);

	if (isInteger(num) && num >= 0) {
		let returnNum = -1;
		let count = 0;
		let previousValueS = [];

		numArr.reduceRight((previousValue, currentValue, index) => {
			if (count === 0) {
				previousValueS.forEach((item, indexPreValues) => {
					if (+item > +currentValue) {
						changeElementsInArr(numArr, index, indexPreValues);
						returnNum = +numArr.join('');
						count++;
					}
				});

				previousValueS[index] = currentValue;
				return currentValue;
			}
		}, 0);
		return returnNum;
	}
	throw new Error();
};

console.log(biggerNumber(23)); //32
console.log(biggerNumber(624)); //642
console.log(biggerNumber(2018)); //2081
console.log(biggerNumber(1349)); //1394

console.log(biggerNumber(1334)); //1343

console.log(biggerNumber(9)); //-1
console.log(biggerNumber(111)); //-1
console.log(biggerNumber(531)); //-1

console.log(biggerNumber(1243)); //1324