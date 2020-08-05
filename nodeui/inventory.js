//Saul Castro
//node scripts for web pos.
//7/28/2020


//
// for(let i=1; i<5; i++)
// test(i)

test2()
test4()
test5()
test6()

function test(i){
   print('--> Starting Test#' + i + " <--")

   if(i === 1) test1();
   else if(i === 2) test2();
   else if(i === 3) test3();
   else if(i === 4) test4();
   else if(i === 5) test5();

  print('--- Test#' + i + ' complete. ---')
}

function test6(){
   print('--> Checking full inventory value <--')
  const sales = [
      {stockTotal: 0.00} ,
      {totalItems:  0} ,
      {  totaltypes:  0}
      ];
  print(sales)
  const r = calculateSalesTotals(sales)
  const ret = calcFullStock(r)
  }


  function calcFullStock(salestot){
    const ft = 0
    print(salestot)
    // salestot.forEach(e => {
    //   const tt = 0
    //
    //   const price = e['original']
    //   const s = e['stock']
    //   const dis = 'discount' in e ? e['discount'] : 0.0;
    //   //couldnt' find anything for defualt
    //   const sale = price - (price * dis);
    //     e['total'] = sale * s
    //     e['sale'] = sale
    //   return e
    // }
    return ft
  }


function test5(){
  const sales = [
      { item: 'PS4 Pro', stock: 333, original: 399.99 },
      { item: 'Xbox One X', stock: 111, original: 499.99, discount: 0.1 },
      { item: 'Nintendo Switch', stock: 44, original: 299.99 },
      { item: 'PS2 Console', stock: 122, original: 299.99, discount: 0.8 },
      { item: 'Nintendo 64', stock: 222, original: 199.99, discount: 0.65 }
  ];
  print(sales)
  const r = calculateSalesTotals(sales)
  print(r)
}

function calculateSalesTotals(sales){

  sales.forEach(e => {
    const tt = 0
    const price = e['original']
    const s = e['stock']
    const dis = 'discount' in e ? e['discount'] : 0.0;
    //couldnt' find anything for defualt
    const sale = price - (price * dis);
      e['total'] = sale * s
      e['sale'] = sale
    return e
  })
return sales
}


function test4(){
  const inventory = [
          { item: 'a', price: 9.99, stock: 33 },
          { item: 'At', price: 5.0, stock: 550 },
          { item: 'X', price: 4.99, stock: 150 },
      ];
      print(inventory)
      const ret = iterateInventory(inventory, stock)
      print(ret)
}

function stock(e){
  const s = e['stock']
  if(s === 0) e['status'] = 'OUT OF STOCK'
  else if(s === 1 || s === 2) e['status'] = "LOW"
  else if(s >= 3) e['status'] = "OK"
  return e
}
// -   Stock count of 3 or more the status is 'OK'
// -   Stock count of 1 to 2 the status is 'LOW'
// -   Stock count of 0 is OUT OF STOCK
function iterateInventory(inv, evalfunc){
    const rr = []
    inv.forEach(e => {
      rr.push( evalfunc(e) )
    })
    return rr
}

function test3(){
  const marvel = [
          { name: 'Spider-Man', hero: true },
                  { name: 'Spider-Man', hero: true },
  ];

  const out3 = "EXPECTED OUTPUT (string): 'Total Villains Count: 4'";
  print(marvel)
  print(out3)
 const r3 = marvel.reduce(( accumulator, ee) => {
        return accumulator + (ee['hero'] ? 0: 1)

    }, 0);
  print(r3)

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


function print(msg){
  console.log(msg)
}
