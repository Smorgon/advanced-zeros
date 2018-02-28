module.exports = function getZerosCount(number, base) {
    let sum = 0;
    let i = 2;
    let factorBase = base;
    while (i < factorBase) {
        if (factorBase % i === 0) {
            factorBase /= i;
            if (factorBase === i) {
                factorBase = factorBase + i - 1;
                break;
            }
        } else {
            i++;
        }
    }
    let factor = factorBase;
    while (factor <= number) {
        sum += Math.trunc(number / factor);
        factor *= factorBase;
    }

    return sum;
}