const getMostNumberOfArr = arr => Math.max.apply(null, arr);

const queueTime = (buyers, payDesk) => {
	if (buyers.length === 0) return 0;

	let totalTime = 0;
	let threadPool = [];
	let queueState = buyers;

	for (let i = 0; i < payDesk; i++) {
		threadPool.push(queueState[0]);
		queueState.shift();
	}

	do {
		for (let i = 0; i < payDesk; i++) {
			--threadPool[i];

			if (threadPool[i] === 0) {
				threadPool[i] = queueState[0];
				queueState.shift();
			}
		}
		totalTime++;
	} while (queueState.length > 0);

	return totalTime + getMostNumberOfArr(threadPool);
};

console.log(
	queueTime([26, 42, 13, 18, 48, 38, 39, 25, 39, 6, 35, 11, 7, 38, 19, 14], 1)
); // 418
console.log(
	queueTime(
		[34, 31, 40, 30, 48, 2, 19, 32, 37, 13, 30, 49, 3, 13, 12, 43, 39, 22, 47],
		4
	)
); // 162
console.log(queueTime([19, 1, 27, 35, 16, 4, 45, 49, 41, 25], 5)); // 65
console.log(queueTime([], 1)); //0
console.log(queueTime([10, 2, 3, 3], 2)); //10

console.log(queueTime([2, 3, 10, 11, 3], 3)); //13
