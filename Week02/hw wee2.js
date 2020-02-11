//hw week 2 Saul Castro 2/10/2020
//cs4220


test4()
test5()
test6()
test7();

function test7(){

    print("Test #7 starting up...")
    const products = [[{
        property: 'product',
        assign: 'PS4'
    }, {
        property: 'company',
        assign: 'Sony'
    }, {
        property: 'release',
        assign: '2013'
    }],
    [{
        property: 'product',
        assign: 'Xbox One X'
    }, {
        property: 'company',
        assign: 'Microsoft'
    }, {
        property: 'release',
        assign: '2016'
    }],
     [{
        property: 'product',
        assign: 'Switch'
    }, {
        property: 'company',
        assign: 'Nintendo'
    }, {
        property: 'release',
        assign: '2017'
    }]]

    print("Input:")
    print(products)
    print("output: ")
    print(buildObject(products))
    print("Test #7 complete.")
}

//reformat the inner objects for nesting.
function makeInner(inn){
  const o = {}
  for (const key in inn) {
      let line = inn[key]
      // print(line)
      o[line['property']] = line['assign']
  }
  return o
}

// #7
function buildObject(arr){
   const o = {}
   for(let i =0; i<arr.length; i++){
     const element = makeInner(arr[i])
     o[i+1] = element
   }
    return o;

}


function test6(){

  print("Test #6 starting up...")
   const game_array = [
        [ 'developer', 'Respawn' ],
        [ 'producer', 'EA' ],
        [ 'game', 'Star Wars Jedi: Fallen Order' ],
        [ 'year', 2019 ]
    ]
    const out = "{ developer: 'Respawn', 'producer': 'EA', game: 'Star Wars Jedi: Fallen Order', year: 2019 } "
    // print(game_array);
    // print("Expected Output: ")
    // print(out);
    const r = convertToObject(game_array);
    print(r);


    print("Test #6 complete.")
}


function test5(){
print("Test #5 starting up...")

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
  print("Test #5 complete.")
}


function test4(){
print("Test #4 starting up...")
  const quote = 'The greatest glory in living lies not in never falling, but in rising every time we fall.';
  const punctuations = [' ', ',', '.', '?', '!', ';', ':', '"', "'"];
  // const output =   { t: 6,h: 1,e: 10,g: 5,r: 5,a: 3, s: 3,l: 7,o: 2,y: 2,i: 10,n: 8,v: 3,f: 2,b: 1,u: 1,m: 1,w: 1 }

  const count = countingLetters(quote, punctuations);
  console.log('Input string: ' + quote);
  // console.log('expected string: ' + output);
  console.log('output string: ')
  print(count);


    print("Test #4 complete.")
}

//helper function thats no longer used...
function getIndex(c, l){
  for( let i = 0; i< c.letters.length; i++){
    if(c.letters[i]=== l) return i
  }

}

// #4
function countingLetters(phrase, punc) {
  const counter = {}
  const ph = phrase.toLowerCase()
  for (let i = 0; i < ph.length; i++) {
      const letter = ph[i]
      if(letter in counter){
        counter[letter] +=1
      }else {
        counter[ letter ] = 1
      }
    }
    //clean punctuations
    for (let i =0; i<punc.length; i++) {
      const p = punc[i]
      if(p in counter)
        delete counter[p]
    }
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


// #6

function convertToObject(input){

  const ob = {}
  for (const key in input) {
      let line = input[key]
      print(key + " - "  + line)
      ob[line[0]] = line[1]
    }
    return ob
}


function removeLetters(phrase, letter) {
  let rr = ''

  for (let i = 0; i < phrase.length; i++) {
      const l = phrase[i]
      if(letter !== l) rr += l;
    }
    return rr;
}

function print(msg){
  console.log(msg)
}
