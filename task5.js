const isInteger = num => Number.isInteger(num);
const splitNumber = num => num.toString().split('');
const changeElementsInArr = (arr, firstIndex, secondIndex) =>
	([arr[firstIndex], arr[secondIndex]] = [arr[secondIndex], arr[firstIndex]]);

const biggerNumber = num => {
	const separatedNumInArr = splitNumber(num);

	if (isInteger(num) && num >= 0) {
		let resultNum = -1;
		let countForChange = 0;
		let previousValuesForCompare = [];

		separatedNumInArr.reduceRight((previousValue, currentValue, index) => {
			if (countForChange === 0) {
				previousValuesForCompare.forEach((item, indexPreValues) => {
					if (+item > +currentValue) {
						changeElementsInArr(separatedNumInArr, index, indexPreValues);
						resultNum = +separatedNumInArr.join('');
						countForChange++;
					}
				});
				previousValuesForCompare[index] = currentValue;
			}
			return currentValue;
		}, 0);

		return resultNum;
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
