module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw Error;
    }
    let result =[];
  if (arr.length === 0) {
      return result;
        }
    for (let i=0; i<arr.length; i++) {
        if (( i!= arr.length -1) && (arr[i] === '--discard-next')) {
            i++;
        }
        else if (( i!= 0) && (arr[i] === '--discard-prev')) {
            return result.splice(arr[i-1]);
        }
        else if (( i!= arr.length -1) && (arr[i] === '--double-next')) {
            return result.push(arr[i+1]);
        }
        else if (( i!= 0) && (arr[i] === '--double-prev')) {
            return result.push(arr[i-1]);
        }
        else result.push(arr[i]);
      
    }
 return result;
};
