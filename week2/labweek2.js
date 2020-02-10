//Lab week 2 Saul Castro 2/3/2020
//cs4220


// ## LAB
// #### 1.  Write a function called removeLetters. (10 pts)
// - The removeLetters function accepts two string arguments.
// - The first argument is a phrase and the second is a letter.
// - This function removes letter in the phrase and returns a string of the cleaned phrase.
//
//       const phrase = 'helxlo x worxxld';
//       const letter = 'x';
//       removeLetters(pharse, letter);
//
//       EXPECTED OUTPUT (string):  'hello world'
//
//
  console.log('Testing function #1, removeLetters');

test1();
console.log('removeLetters Test Complete');
console.log('Testing function #2, flattenArray');

test2();
console.log('flattenArray Test Complete');

function test1(){
  const hello = 'helxlo x worxxld';

  //       EXPECTED OUTPUT (string):  'hello world'
  const outone = 'hello  world';
  const result = removeLetters(hello, "x");
  console.log('Input string: ' + hello);
  console.log('expected string: ' + outone);
  console.log('output string: ' + result);
  console.log('Test #1: ' + (outone === result)  );
}

function removeLetters(phrase, letter) {
  let rr = ''

  for (let i = 0; i < phrase.length; i++) {
      const l = phrase[i]
      if(letter !== l) rr += l;
    }
    return rr;
}



//
// #### 2.  Write a function called flattenArray. (10 pts)
// - The flattenArray function accepts a nested array as an argument.
// - This function will turn the nested array of arrays and return the flat array.
// - **DO NOT** Array.flat().
//
//       const nested = [[1, 2], [3, 4, 5], [6], [7, 8, 9]];
//       flattenArray(nested);
//
//       EXPECTED OUTPUT (array): [1, 2, 3, 4, 5, 6, 7, 8, 9]
//
//

function test2(){
  const nested = [ [1, 2], [3, 4, 5], [6], [7, 8, 9] ];
  const exp =  [1, 2, 3, 4, 5, 6, 7, 8, 9];

  let result2 = flattenArray(nested);

  // console.log( nested);
  console.log('Input    : ' , nested);
  console.log('expected : ' , exp);
  console.log('output   : ' , result2);
  console.log('Test #2 : ' , (exp === result2)  );
}

function flattenArray( nested ) {
  let flat = [];
  for (let i = 0; i < nested.length; i++) {
      let a = nested[i] //inner arrays
      for(let j=0; j<a.length; j++){
        flat.push(a[j]);
        console.log("i :" + i + " j: " );
      }

    }
    return flat;
}


// #### 3.  Write a function called adjustName. (10 pts)
// - The adjustName function accepts an object as an argument.
// - This function will remove the key 'name' and add two new keys 'firstName' and 'lastName' and return the object.
// - It will set the values of 'firstName' and 'lastName' correctly based on the values in the 'name' array.
// - You may assume that the first item in the 'name' array is the first name and that the last item is the last name.
// - Consider some people have multiple middle names so the last item in the array **MUST** be accessed dynamically.
// - **DO NOT** use iterations.
//
//
//       const dc = {
//           name: ['Bruce', 'Wayne'],
//           hero: 'Batman'
//       };
//       const marvel = {
//           name: ['Peter', 'Benjamin', 'Parker'],
//           hero: 'SpiderMan'
//       };
//       adjustName(dc);
//       EXPECTED OUTPUT (object):
//       { hero: 'Batman', firstName: 'Bruce', lastName: 'Wayne' }
//
//       adjustName(marvel);
//       EXPECTED OUTPUT (object):
//       { hero: 'SpiderMan', firstName: 'Peter', lastName: 'Parker' }
//
// <hr/>

//
// test3();
//
// function test3(){
//   const nested = [ [1, 2], [3, 4, 5], [6], [7, 8, 9] ];
//   const exp =  [1, 2, 3, 4, 5, 6, 7, 8, 9];
//
//   const result = flattenArray(nested);
//   console.log('Input    : ' + nested);
//   console.log('expected : ' + exp);
//   console.log('output   : ' + result);
//   console.log('Test #2 : ' + (exp === result)  );
// }
//
// function flattenArray( nested ) {
//   let flat = [];
//   for (let i = 0; i < nested.length; i++) {
//       const l = nested[i]
//
//     }
//     return flat;
// }

 //example js function
function addFn(a, b) {
    return a + b;
}
