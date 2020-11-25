/*
In this kata, you will write a function that returns the positions and the values of the "peaks" (or local maxima) of a numeric array.

For example, the array arr = [0, 1, 2, 5, 1, 0] has a peak at position 3 with a value of 5 (since arr[3] equals 5).

The output will be returned as an object with two properties: pos and peaks. Both of these properties should be arrays. If there is no peak in the given array, then the output should be {pos: [], peaks: []}.

Example: pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]) should return {pos: [3, 7], peaks: [6, 3]} (or equivalent in other languages)

All input arrays will be valid integer arrays (although it could still be empty), so you won't need to validate the input.

The first and last elements of the array will not be considered as peaks (in the context of a mathematical function, we don't know what is after and before and therefore, we don't know if it is a peak or not).

Also, beware of plateaus !!! [1, 2, 2, 2, 1] has a peak while [1, 2, 2, 2, 3] does not. In case of a plateau-peak, please only return the position and value of the beginning of the plateau. For example: pickPeaks([1, 2, 2, 2, 1]) returns {pos: [1], peaks: [2]} (or equivalent in other languages)

Have fun!
*/

function getPeaksData(numsArray) {
  return numsArray.reduce((peaksData, num, index) => {
    // IF NUMBER IS GREATER THAN PREVIOUS AND EQUAL TO THE NEXT
    // CHECKING IF PLATEU IS A PEAK
    if (num > numsArray[index - 1] && num === numsArray[index + 1]) {
      // ITERATE THROUGH REMAINING NUMS
      for (let i = index; i < numsArray.length; i++) {
        // IF A REMAINING VALUE GREATER THAN NUM, NOT A PEAK
        if (numsArray[i] > num) return peaksData;

        // IF A REMAINING VALUE LESS THAN NUM, STORE VALUE AND INDEX IN PEAKSDATA
        if (numsArray[i] < num) {
          peaksData.pos.push(index);
          peaksData.peaks.push(num);

          return peaksData;
        }
      }

      return peaksData;
    }

    if (num > numsArray[index - 1] && num > numsArray[index + 1]) {
      // STORE VALUE AND INDEX IN PEAKSDATA OBJECT
      peaksData.pos.push(index);
      peaksData.peaks.push(num);

      return peaksData;
    }

    return peaksData;
  }, {pos: [], peaks: []});
}

console.log(getPeaksData([1, 2, 3, 2, 1, 3, 5, 5, 1]));