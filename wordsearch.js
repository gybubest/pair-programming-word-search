const wordSearch = (letters, word) => {
  for (let i = 0; i < letters.length; i++) {
    let string = '';
    for (let j = 0; j < letters[i].length; j++) {
      string += letters[i][j];
      if (string.includes(word)) {
        return true;
      }
    }
  }
  for (let i = 0; i < letters[0].length; i++) {
    let string = '';
    for (let j = 0; j < letters.length; j++) {
      string += letters[i][j];
      if (string.includes(word)) {
        return true;
      }
    }
  }
  return false;
};

module.exports = wordSearch;
// **** The following program returns true when the word is broken into different rows/collumns. Pair-programming with @m-vojjala. ****
// const wordSearch = (letters, word) => {
//     let row = "";
//     let column = "";
//     for (let i = 0; i < letters[0].length; i++) {
//       for (let j = 0; j < letters[i].length; j++) {
//         row += letters[i][j];
//         column += letters[j][i];
//         if (row.includes(word)) {
//           return true;
//         } else if (column.includes(word)) {
//           return true;
//         }
//       }
//     }
//     return false;
//   };