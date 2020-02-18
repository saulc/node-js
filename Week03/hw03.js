//Saul Castro
//cs4220 hw week 3
//2/10/2020



for(let i=1; i<6; i++)
test(i)

function test(i){
   print('--> Starting Test#' + i + " <--")

   if(i === 1) test1()

  print('Test#' + i + ' complete.')
}


// // // ARRAY - MAP
// const squares = [2, 3, 4, 5];
// const results = squares.map(n => {
//     return n * n;
// });
// console.log(results);


function test1(){
  const heros = [
      { name: 'Spider-Man' },
      { name: 'Thor' },
      { name: 'Black Panther' },
      { name: 'Captain Marvel' },
      { name: 'Silver Surfer' }
  ];
  const r = heros.map(n => {
    const ob = {}
    print(n)
    ob['id'] = getId(ob)
    ob['hero'] = n['name']
    return ob
  });
  print(r)
}

function getId(o){
  let size = 0
  for ( key in o) {
          size++;
    }
    return size;

}
function print(msg){
  console.log(msg)
}
