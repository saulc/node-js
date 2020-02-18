//Saul Castro
//cs4220 hw week 3
//2/10/2020



for(let i=1; i<6; i++)
test(i)

function test(i){
   print('--> Starting Test#' + i + " <--")

   if(i === 1) test1();
   else if(i === 2) test2();

  print('Test#' + i + ' complete.')
}

function test2(){
  const manufacturer = 'nintendo';
  const consoles = [
      { item: 'Sony PS4 Pro', price: 399.99 },
      { item: 'Microsoft Xbox One X', price: 499.99 },
      { item: 'Nintendo Switch', price: 299.99 },
      { item: 'Sony PS2 Console', price: 299.99 },
      { item: 'Nintendo 64', price: 199.999 }
      ];

      print("All Consoles")
      print(consoles)
      print("filtering consoles for: " + manufacturer);

      const r2 = consoles.filter(e => {
        let temp = e['item'].toLowerCase()
        //print(temp)
        if(temp.includes(manufacturer)) return e;
      });

      print(r2)

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

  let i = 0  //this is not nice but it works? ^_-
  const r = heros.map(n => {
    const ob = {}
    print(n)
    ob['id'] = i++
    ob['hero'] = n['name']
    return ob
  });
  print(r)
}

function print(msg){
  console.log(msg)
}
