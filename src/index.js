module.exports = function getZerosCount(number, base) {
    let i = 2;
	let factorBase = base;
	let arr = [];
	while (i <= factorBase) {
		if (factorBase % i === 0) {
			if (arr[i] === undefined) {
				arr[i] = 1;
			} else {
				arr[i] = arr[i] + 1;
			}
			factorBase /= i;
		} else {
			i++;
		}
	}
	let res = [];
	arr.forEach(function(item, i, arr) {
		let factor = i;
		let sum = 0;
		while (factor < number) {
			sum += Math.trunc(number / factor);
			factor *= i;
		}
		res.push(Math.trunc(sum / item));
	});
    
    return Math.min.apply(null, res);
}
