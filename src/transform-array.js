module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw Error;
    }
    let result = [];
    if (arr.length === 0) {
        return result;
    }
    arr.forEach((el, i, ar) => {
        if (el !== '--discard-next' && el !== '--discard-prev' && el !== '--double-next' && el !== '--double-prev') {
            result.push(el);
            if ((ar[i - 1] === '--discard-next')) {
                result.pop();
            }
            if (ar[i - 1] === '--double-next') {
                result.push(el);
            }
            if (ar[i + 1] === '--discard-prev') {
                result.pop();
            }
            if (ar[i + 1] === '--double-prev') {
                result.push(el);
            }
        }
    });

    return result;
};
