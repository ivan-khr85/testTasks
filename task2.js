const additionalCapitalPerYear = (capital, rate, tax) =>
	capital * rate * (1 - tax);

const getYears = (capital, rate, tax, total) => {
	let totalYears = 0;

	for (totalYears; capital < total; totalYears++) {
		capital = capital + additionalCapitalPerYear(capital, rate, tax);
	}
	return totalYears;
};

console.log(getYears(1000, 0.05, 0.18, 1100)); // 3
console.log(getYears(1000, 0.01625, 0.18, 1200)); // 14

