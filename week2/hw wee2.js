//hw week 2 Saul Castro 2/10/2020
//cs4220



  console.log('Testing function #1, countingLetters');

test1();
console.log('countingLetters Test Complete');

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


function removeLetters(phrase, letter) {
  let rr = ''

  for (let i = 0; i < phrase.length; i++) {
      const l = phrase[i]
      if(letter !== l) rr += l;
    }
    return rr;
}
