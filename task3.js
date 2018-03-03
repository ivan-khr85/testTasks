const takeNumberFromInjectStr = obj => {
	let strNumber = '';
	obj.split('').forEach(item => {
		if (+item) {
			strNumber = strNumber + item.toString();

		}
	});
	return +strNumber;
};

const sortString = str => {

	const sorted = str.split(' ').sort((a, b) => {
		return takeNumberFromInjectStr(a) - takeNumberFromInjectStr(b);
	});
	return sorted.join(' ').replace(/ /g, ' ');
};

console.log(sortString('g5et ski3lls on6 use1 your2 to4 7top'));
// Результат: ‘use1 your2 ski3lls to4 g5et on6 7top’

console.log(sortString(''));
// Результат: ‘’

console.log(sortString('practic3 h4rder yo1u 2hould'));
// Результат: ‘yo1u 2hould practic3 h4rder’
