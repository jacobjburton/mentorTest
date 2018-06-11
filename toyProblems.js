//JS Basics
//Run npm test in the command line to test your solutions
module.exports = {
  reverseIt: (str) => {
    let tempStr = str.split('').reverse().join('');
    return tempStr;
  },

  //uncomment and finish the reverseIt function. It will take in one parameter which is a String and
  //reverse it

  removeDups: (arr) => {
    let uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (uniqueArr.indexOf(arr[i]) === -1) {
        uniqueArr.push(arr[i]);
      }
    }
    return uniqueArr;
  },

  //uncomment and finish the removeDups function. It will take in one parameter which is an Array
  //remove all duplicates

  titleIt: (str) => {
    let temp = [];
    temp = str.split(' ')
    // for (let i = 0; i < tempArr.length; i++) {
    //   tempArr[i] = tempArr[i].charAt(0).toUpperCase() + tempArr[i].slice(1);
    //   console.log(tempArr)
    // }
      .map(w => {
        return (w.charAt(0).toUpperCase() + w.slice(1));
      })
      .join(' ');
    return temp;    
  },

  //uncomment and finish the titleIt function. It will take in one parameter which is a String and
  //capitalize the first letter of each word

  vowelCounter: (str) => {
    let count = 0;
    let temp = str.toLowerCase().split('');
    for (let i = 0; i < temp.length; i++) {
      if (temp[i] === 'a' || temp[i] === 'e' || temp[i] === 'i' || temp[i] === 'o' || temp[i] === 'u') {
        count++;
      }
    }
    return count;
  },

  //uncomment and finish the vowelCounter function. It will take in one parameter which is a String and
  //return the number of vowels in the string

  isPrime: (num) => {
    if (typeof num !== 'number') {
      return false;
    };    
    if (num < 2) {
      return false;
    };
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
         return false;
      };
    };
    return true;
  },

  //uncomment and finish the isPrime function. It will take in one parameter which is a Number and
  //return true if it is prime and false if it is not

  //what is the value of foo?
  //var foo = 10 + '20';
  //uncomment the foo property and give your answer as its value

  foo: '1020',

  //what is the outcome of the two console.logs below?
  //   var foo = "Hello";
  // (function() {
  //   var bar = " World";
  //   console.log(foo + bar);
  // })();
  // console.log(foo + bar);
  // uncomment the log1 and log2 properties and give your answers as their values

  log1: "Hello World",
  log2: undefined
}
