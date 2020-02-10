//hw week 2 Saul Castro 2/10/2020
//cs4220



  console.log('Testing function #1, countingLetters');

test1();
console.log('countingLetters Test Complete');


print("Test #5 starting up...")
test2()
print("Test #5 complete.")


function test2(){
  const ar = [1, 2, 3]
  const ab = [1, 2, 3]
  const bb = ['1', '2', '3']
  print("Test matching input.")
  print(ar)
  print(ab)
  let test =  compareArrays(ar, ab)
  print( "arrays are equal: " )
  print(test)
  print("Test non matching input.")
  print(ar)
  print(bb)
  print( "arrays are equal: " )
  test = compareArrays(ar, bb)
  print(test)
}


function test1(){
let result = ''
  const quote = 'The greatest glory in living lies not in never falling, but in rising every time we fall.';
  const punctuations = [' ', ',', '.', '?', '!', ';', ':', '"', "'"];
  // const output =   { t: 6,h: 1,e: 10,g: 5,r: 5,a: 3, s: 3,l: 7,o: 2,y: 2,i: 10,n: 8,v: 3,f: 2,b: 1,u: 1,m: 1,w: 1 }

  countingLetters(quote, punctuations);
  console.log('Input string: ' + quote);
  // console.log('expected string: ' + output);
  console.log('output string: ' + result);
  // console.log('Test #1: ' + (output === result)  );
}


function print(msg){
  console.log(msg)
}

function getIndex(c, l){
  for( let i = 0; i< c.letters.length; i++){
    if(c.letters[i]=== l) return i
  }

}

// #4
function countingLetters(phrase, punc) {
  const counter = {
    letters: [],
    counts: [],
  }

  for (let i = 0; i < phrase.length; i++) {
      const letter = phrase[i]
      if(counter.letters.includes(letter)){
        const id = getIndex(counter, letter)
        counter.counts[id] +=1

      }else {
        counter.letters.push(letter)
        counter.counts.push(1)
      }
    }
    print(counter)
    return counter;
}

// #5
function compareArrays(a1, a2){
      if(a1.length !== a2.length) return false;

      if(a1.length === 0) return true; // empty lists are equal.

      for(let i =0; i<a1.length; i++){
        const a = a1[i]
        const b = a2[i]
        if(a !== b) return false
      }
      return true;
}

function removeLetters(phrase, letter) {
  let rr = ''

  for (let i = 0; i < phrase.length; i++) {
      const l = phrase[i]
      if(letter !== l) rr += l;
    }
    return rr;
}
