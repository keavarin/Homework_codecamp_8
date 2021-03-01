const sales = [
  {
    id: 1,
    product: {
      id: 1,
      name: 'iPhone',
      model: '12 Pro',
      unitPrice: 48900
    },
    saleDate: '01-01-2021',
    customer: 'Sun',
    discount: 0.2,
    type: 'Cash'
  },
  {
    id: 2,
    product: {
      id: 2,
      name: 'iPhone',
      model: '12',
      unitPrice: 32900
    },
    saleDate: '01-01-2021',
    customer: 'Tle',
    type: 'Credit'
  },
  {
    id: 3,
    product: {
      id: 1,
      name: 'iPhone',
      model: '12 Pro',
      unitPrice: 36900
    },
    saleDate: '01-01-2021',
    customer: 'Beer',
    type: 'Cash'
  },
  {
    id: 4,
    product: {
      id: 3,
      name: 'Samsung',
      model: 'S21',
      unitPrice: 27900
    },
    saleDate: '01-01-2021',
    customer: 'Jit',
    discount: 0.2,
    type: 'Credit'
  },
  {
    id: 5,
    product: {
      id: 1,
      name: 'iPhone',
      model: '12 Pro',
      unitPrice: 36900
    },
    saleDate: '01-01-2021',
    customer: 'Palm',
    type: 'Cash'
  },
  {
    id: 6,
    product: {
      id: 1,
      name: 'iPhone',
      model: '12 Pro',
      unitPrice: 48900
    },
    saleDate: '01-01-2021',
    customer: 'Top',
    type: 'Credit'
  },
  {
    id: 7,
    product: {
      id: 4,
      name: 'Oppo',
      model: 'A15',
      unitPrice: 4299
    },
    saleDate: '02-01-2021',
    customer: 'Sun',
    type: 'Credit'
  },
  {
    id: 8,
    product: {
      id: 3,
      name: 'Samsung',
      model: 'S21',
      unitPrice: 27900
    },
    saleDate: '02-01-2021',
    customer: 'Snap',
    discount: 0.1,
    type: 'Credit'
  },
  {
    id: 9,
    product: {
      id: 5,
      name: 'iPhone',
      model: '11 Pro',
      unitPrice: 36900
    },
    saleDate: '02-01-2021',
    customer: 'Ham',
    discount: 0.25,
    type: 'Credit'
  },
  {
    id: 10,
    product: {
      id: 6,
      name: 'Samsung',
      model: 'A31',
      unitPrice: 7999
    },
    saleDate: '02-01-2021',
    customer: 'Ham',
    discount: 0.25,
    type: 'Credit'
  },
  {
    id: 11,
    product: {
      id: 1,
      name: 'iPhone',
      model: '12 Pro',
      unitPrice: 48900
    },
    saleDate: '02-01-2021',
    customer: 'Tle',
    discount: 0.3,
    type: 'Airpay'
  },
  {
    id: 12,
    product: {
      id: 1,
      name: 'iPhone',
      model: '12 Pro',
      unitPrice: 48900
    },
    saleDate: '02-01-2021',
    customer: 'Micky',
    type: 'Credit'
  },
  {
    id: 13,
    product: {
      id: 2,
      name: 'iPhone',
      model: '12',
      unitPrice: 32900
    },
    saleDate: '02-01-2021',
    customer: 'Boss',
    type: 'Cash'
  },
  {
    id: 14,
    product: {
      id: 7,
      name: 'Oppo',
      model: 'Reno5',
      unitPrice: 19990
    },
    saleDate: '02-01-2021',
    customer: 'Sila',
    type: 'Airpay'
  },
  {
    id: 15,
    product: {
      id: 8,
      name: 'Xiaomi',
      model: 'Redmi 9C',
      unitPrice: 3399
    },
    saleDate: '02-01-2021',
    customer: 'Top',
    type: 'Cash'
  },
  {
    id: 16,
    product: {
      id: 9,
      name: 'Samsung',
      model: 'A42',
      unitPrice: 11990
    },
    saleDate: '03-01-2021',
    customer: 'Cin',
    type: 'Cash'
  },
  {
    id: 17,
    product: {
      id: 6,
      name: 'Samsung',
      model: 'A31',
      unitPrice: 7999
    },
    saleDate: '03-01-2021',
    customer: 'Cin',
    type: 'Cash'
  },
  {
    id: 18,
    product: {
      id: 1,
      name: 'iPhone',
      model: '12 Pro',
      unitPrice: 36900
    },
    saleDate: '03-01-2021',
    customer: 'Sine',
    discount: 0.3,
    type: 'Airpay'
  },
  {
    id: 19,
    product: {
      id: 2,
      name: 'iPhone',
      model: '12',
      unitPrice: 32900
    },
    saleDate: '03-01-2021',
    customer: 'Note',
    type: 'Credit'
  },
  {
    id: 20,
    product: {
      id: 3,
      name: 'Samsung',
      model: 'S21',
      unitPrice: 27900
    },
    saleDate: '03-01-2021',
    customer: 'Micky',
    type: 'Credit'
  },
  {
    id: 21,
    product: {
      id: 10,
      name: 'Vivo',
      model: 'V20 Pro',
      unitPrice: 14999
    },
    saleDate: '04-01-2021',
    customer: 'Bank',
    type: 'Cash'
  },
  {
    id: 22,
    product: {
      id: 10,
      name: 'Vivo',
      model: 'V20 Pro',
      unitPrice: 14999
    },
    saleDate: '04-01-2021',
    customer: 'Bank',
    type: 'Cash'
  },
  {
    id: 23,
    product: {
      id: 7,
      name: 'Oppo',
      model: 'Reno5',
      unitPrice: 19990
    },
    saleDate: '04-01-2021',
    customer: 'Leo',
    type: 'Cash'
  },
  {
    id: 24,
    product: {
      id: 9,
      name: 'Samsung',
      model: 'A42',
      unitPrice: 11990
    },
    saleDate: '04-01-2021',
    customer: 'Game',
    type: 'Cash'
  },
  {
    id: 25,
    product: {
      id: 6,
      name: 'Samsung',
      model: 'A31',
      unitPrice: 7999
    },
    saleDate: '04-01-2021',
    customer: 'U',
    discount: 0.3,
    type: 'Airpay'
  },
  {
    id: 26,
    product: {
      id: 1,
      name: 'iPhone',
      model: '12 Pro',
      unitPrice: 48900
    },
    saleDate: '05-01-2021',
    customer: 'Boy',
    type: 'Credit'
  },
  {
    id: 27,
    product: {
      id: 11,
      name: 'Vivo',
      model: 'X50 Pro',
      unitPrice: 19999
    },
    saleDate: '05-01-2021',
    customer: 'Boom',
    type: 'True Wallet'
  },
  {
    id: 28,
    product: {
      id: 12,
      name: 'Vivo',
      model: 'V20',
      unitPrice: 10999
    },
    saleDate: '05-01-2021',
    customer: 'Boom',
    type: 'True Wallet'
  },
  {
    id: 29,
    product: {
      id: 9,
      name: 'Samsung',
      model: 'A42',
      unitPrice: 11990
    },
    saleDate: '05-01-2021',
    customer: 'Am',
    type: 'Cash'
  },
  {
    id: 30,
    product: {
      id: 2,
      name: 'iPhone',
      model: '12',
      unitPrice: 32900
    },
    saleDate: '06-01-2021',
    customer: 'Um',
    type: 'True Wallet'
  },
  {
    id: 31,
    product: {
      id: 3,
      name: 'Samsung',
      model: 'S21',
      unitPrice: 27900
    },
    saleDate: '06-01-2021',
    customer: 'Win',
    discount: 0.25,
    type: 'Airpay'
  },
  {
    id: 32,
    product: {
      id: 7,
      name: 'Oppo',
      model: 'Reno5',
      unitPrice: 19990
    },
    saleDate: '06-01-2021',
    customer: 'Cin',
    type: 'Cash'
  },
  {
    id: 33,
    product: {
      id: 2,
      name: 'iPhone',
      model: '12',
      unitPrice: 32900
    },
    saleDate: '07-01-2021',
    customer: 'Palm',
    discount: 0.1,
    type: 'Credit'
  },
  {
    id: 34,
    product: {
      id: 5,
      name: 'iPhone',
      model: '11 Pro',
      unitPrice: 36900
    },
    saleDate: '07-01-2021',
    customer: 'Dom',
    discount: 0.15,
    type: 'Credit'
  },
  {
    id: 35,
    product: {
      id: 3,
      name: 'Samsung',
      model: 'S21',
      unitPrice: 27900
    },
    saleDate: '07-01-2021',
    customer: 'Sern',
    type: 'True Wallet'
  },
  {
    id: 36,
    product: {
      id: 13,
      name: 'iPhone',
      model: 'SE2000',
      unitPrice: 14900
    },
    saleDate: '07-01-2021',
    customer: 'Beer',
    type: 'Cash'
  },
  {
    id: 37,
    product: {
      id: 14,
      name: 'iPhone',
      model: '12 Mini',
      unitPrice: 25900
    },
    saleDate: '07-01-2021',
    customer: 'Game',
    discount: 0.2,
    type: 'Credit'
  },
  {
    id: 38,
    product: {
      id: 2,
      name: 'iPhone',
      model: '12',
      unitPrice: 32900
    },
    saleDate: '07-01-2021',
    customer: 'Sun',
    discount: 0.25,
    type: 'Airpay'
  },
  {
    id: 39,
    product: {
      id: 2,
      name: 'iPhone',
      model: '12',
      unitPrice: 32900
    },
    saleDate: '07-01-2021',
    customer: 'Tom',
    type: 'Cash'
  },
  {
    id: 40,
    product: {
      id: 14,
      name: 'iPhone',
      model: '12 Mini',
      unitPrice: 25900
    },
    saleDate: '08-01-2021',
    customer: 'Ham',
    type: 'Cash'
  },
  {
    id: 41,
    product: {
      id: 2,
      name: 'iPhone',
      model: '12',
      unitPrice: 32900
    },
    saleDate: '08-01-2021',
    customer: 'Dom',
    type: 'Credit'
  },
  {
    id: 42,
    product: {
      id: 3,
      name: 'Samsung',
      model: 'S21',
      unitPrice: 27900
    },
    saleDate: '08-01-2021',
    customer: 'Cin',
    type: 'True Wallet'
  },
  {
    id: 43,
    product: {
      id: 3,
      name: 'Samsung',
      model: 'S21',
      unitPrice: 27900
    },
    saleDate: '08-01-2021',
    customer: 'Tle',
    type: 'Cash'
  },
  {
    id: 44,
    product: {
      id: 7,
      name: 'Oppo',
      model: 'Reno5',
      unitPrice: 19990
    },
    saleDate: '09-01-2021',
    customer: 'U',
    type: 'Cash'
  },
  {
    id: 45,
    product: {
      id: 11,
      name: 'Vivo',
      model: 'X50 Pro',
      unitPrice: 19999
    },
    saleDate: '09-01-2021',
    customer: 'Am',
    discount: 0.35,
    type: 'Airpay'
  },
  {
    id: 46,
    product: {
      id: 10,
      name: 'Vivo',
      model: 'V20 Pro',
      unitPrice: 14999
    },
    saleDate: '10-01-2021',
    customer: 'Sern',
    type: 'Cash'
  },
  {
    id: 47,
    product: {
      id: 1,
      name: 'iPhone',
      model: '12 Pro',
      unitPrice: 48900
    },
    saleDate: '10-01-2021',
    customer: 'Game',
    discount: 0.3,
    type: 'Credit'
  },
  {
    id: 48,
    product: {
      id: 9,
      name: 'Samsung',
      model: 'A42',
      unitPrice: 11990
    },
    saleDate: '10-01-2021',
    customer: 'Jit',
    type: 'Cash'
  },
  {
    id: 49,
    product: {
      id: 14,
      name: 'iPhone',
      model: '12 Mini',
      unitPrice: 25900
    },
    saleDate: '10-01-2021',
    customer: 'Snap',
    type: 'True Wallet'
  },
  {
    id: 50,
    product: {
      id: 2,
      name: 'iPhone',
      model: '12',
      unitPrice: 32900
    },
    saleDate: '10-01-2021',
    customer: 'Micky',
    type: 'Cash'
  },
  {
    id: 51,
    product: {
      id: 3,
      name: 'Samsung',
      model: 'S21',
      unitPrice: 27900
    },
    saleDate: '11-01-2021',
    customer: 'Boss',
    discount: 0.2,
    type: 'Credit'
  },
  {
    id: 52,
    product: {
      id: 8,
      name: 'Xiaomi',
      model: 'Redmi 9C',
      unitPrice: 3399
    },
    saleDate: '11-01-2021',
    customer: 'Leo',
    discount: 0.05,
    type: 'Credit'
  },
  {
    id: 53,
    product: {
      id: 10,
      name: 'Vivo',
      model: 'V20 Pro',
      unitPrice: 14999
    },
    saleDate: '11-01-2021',
    customer: 'Sine',
    discount: 0.15,
    type: 'True Wallet'
  },
  {
    id: 54,
    product: {
      id: 14,
      name: 'iPhone',
      model: '12 Mini',
      unitPrice: 25900
    },
    saleDate: '07-01-2021',
    customer: 'Um',
    discount: 0.1,
    type: 'Cash'
  },
]

// 1. จำนวน transaction ทั้งหมด
// 2. จำนวนลูกค้าที่แตกต่างกัน มีใครบ้าง แต่ละคนซื้อไปยอดรวมกันเท่าไหร่ กี่เครื่อง
// 3. ยอดขายทั้งหมด (หลังหัก discount)
// 4. สินค้าที่ถูกขายมี่กี่ยี่ห้อ แต่ละยี่ห้อขายไปกี่เครื่อง และ ยอดรวมเท่าไหร่
// 5. สินค้าที่ถูกขายมีกี่รุ่นในแต่ละยี่ห้อ แต่ละรุ่นขายไปกี่เครื่อง และ ยอดรวมเท่าไหร่
// 6. หายอดรวมของการจ่ายแต่ละประเภท (Cash, Credit, ...)
// 7. หายอดรวมในแต่ละวัน
// 8. เรียงยอดขายของแต่ละรุ่นจากมากไปน้อย
// 9. เรียงลูกค้าที่ซื้อมากที่สุดจากมากไปน้อย

//#1
console.log(`transaction : ${sales.length}`)
// #1 ANSWER 
//transaction : 54
//---------------------------------------------------------------------------------------

//#2 จำนวนลูกค้าที่แตกต่างกัน มีใครบ้าง แต่ละคนซื้อไปยอดรวมกันเท่าไหร่ กี่เครื่อง

//let count = 0;
//หาจำนวน ลูกค้าที่แตกต่างกัน
// const answer2 = sales.reduce((acc, curr) => {
//   acc[curr.customer] = (acc[curr.customer] || 0) + 1;
//   return acc
// }, [])

//หาแต่ละคนซื้อไปยอดรวมกันเท่าไหร่ กี่เครื่อง
// const answer2jra = sales.reduce((acc, curr) => {
//   if (curr.customer in acc) {
//     acc[curr.customer] += curr.product.unitPrice;
//     return acc;
//   } else {
//     acc[curr.customer] = curr.product.unitPrice;
//     return acc;
//   }
// }, {})
// //console.log(answer2jra)

//เอาObject มาใส่ข้อมูลโดยมีkey ตัวเดียวกันคือ customer
// //แล้วนำobjectที่ได้ จับใส่เข้าไปใน Array[]
// let smartAns = [];
// Object.keys(answer2jra).map(function (key, index) {
//   let tempAns = {
//     "name": key,
//     "amount": answer2[key],
//     "totalPaid": answer2jra[key]
//   }
//   smartAns.push(tempAns);
// });
// console.log(smartAns);
//#2 ANSWER
//[
//   { name: 'Sun', amount: 3, totalPaid: 86099 },
//   { name: 'Tle', amount: 3, totalPaid: 109700 },
//   { name: 'Beer', amount: 2, totalPaid: 51800 },
//   { name: 'Jit', amount: 2, totalPaid: 39890 },
//   { name: 'Palm', amount: 2, totalPaid: 69800 },
//   { name: 'Top', amount: 2, totalPaid: 52299 },
//   { name: 'Snap', amount: 2, totalPaid: 53800 },
//   { name: 'Ham', amount: 3, totalPaid: 70799 },
//   { name: 'Micky', amount: 3, totalPaid: 109700 },
//   { name: 'Boss', amount: 2, totalPaid: 60800 },
//   { name: 'Sila', amount: 1, totalPaid: 19990 },
//   { name: 'Cin', amount: 4, totalPaid: 67879 },
//   { name: 'Sine', amount: 2, totalPaid: 51899 },
//   { name: 'Note', amount: 1, totalPaid: 32900 },
//   { name: 'Bank', amount: 2, totalPaid: 29998 },
//   { name: 'Leo', amount: 2, totalPaid: 23389 },
//   { name: 'Game', amount: 3, totalPaid: 86790 },
//   { name: 'U', amount: 2, totalPaid: 27989 },
//   { name: 'Boy', amount: 1, totalPaid: 48900 },
//   { name: 'Boom', amount: 2, totalPaid: 30998 },
//   { name: 'Am', amount: 2, totalPaid: 31989 },
//   { name: 'Um', amount: 2, totalPaid: 58800 },
//   { name: 'Win', amount: 1, totalPaid: 27900 },
//   { name: 'Dom', amount: 2, totalPaid: 69800 },
//   { name: 'Sern', amount: 2, totalPaid: 42899 },
//   { name: 'Tom', amount: 1, totalPaid: 32900 }
// ]
//------------------------------------------------------------------------------------------

//#3 ยอดขายทั้งหมด (หลังหัก discount)
  // const answer3 =sales.reduce((acc, item) =>{ 
  //   let productPrice = item.product.unitPrice;
  //   if('discount' in item){
  //     return acc + (productPrice * (1-item.discount))
  //   }else {
  //     return acc + productPrice
  //   }

  // },0 )
//console.log(answer3)
//#3 ANSWER 1270728.1
//------------------------------------------------------------------------------------------

//#4 สินค้าที่ถูกขายมี่กี่ยี่ห้อ แต่ละยี่ห้อขายไปกี่เครื่อง และ ยอดรวมเท่าไหร่
// const answer4 =sales.reduce((acc, curr)=>{
//   acc[curr.product.name] = (acc[curr.product.name] || 0) + 1;
//   return acc;
// },{});
// //console.log(answer4)

// const TotalPriceOfProductName = sales.reduce((acc, curr)=> {
//   if(curr.product.name in acc){
//     acc[curr.product.name] += curr.product.unitPrice;
//     return acc;
//   }else {
//     acc[curr.product.name] = curr.product.unitPrice;
//     return acc;
//   }
// },{})
// //console.log(TotalPriceOfProductName)

// let smartAns = [];
// Object.keys(answer4).map(function (key, index) {
//   let tempAns = {
//     "name": key,
//     "Amount": answer4[key],
//     "PriceTotal": TotalPriceOfProductName[key]
//   }
//   smartAns.push(tempAns);
// });
// console.log(smartAns);
//#4 ANSWER 
//[
//   { name: 'iPhone', Amount: 25, PriceTotal: 892500 },
//   { name: 'Samsung', Amount: 15, PriceTotal: 295157 },
//   { name: 'Oppo', Amount: 5, PriceTotal: 84259 },
//   { name: 'Xiaomi', Amount: 2, PriceTotal: 6798 },
//   { name: 'Vivo', Amount: 7, PriceTotal: 110993 }
// ]
//----------------------------------------------------------------------------------


//#5 สินค้าที่ถูกขายมีกี่รุ่นในแต่ละยี่ห้อ แต่ละรุ่นขายไปกี่เครื่อง และ ยอดรวมเท่าไหร่

//  หาว่ามีmodel ที่ขายไปจำนวนเท่าไร
// const TotalAmountOfModel = sales.reduce((acc, curr) => {
//   if (curr.product.model in acc) {
//     acc[curr.product.model] += 1 ;
//     return acc;
//   }else {
//     acc[curr.product.model] =1;
//     return acc;
//   }

// }, {})

//หาว่าmodelนั้นมีราคารวมทั้งหมดเท่าไร
// const TotalPriceOfModel = sales.reduce((acc, curr)=>
// {
// if(curr.product.model in acc){
//   acc[curr.product.model] += curr.product.unitPrice;
//   return acc;
// }else {
//   acc[curr.product.model] = curr.product.unitPrice;
//   return acc;
// }
// },{})

//หาว่าแต่ละmodelมียี่ห้อไรบ้าง
// const TotalNameOfModel =sales.reduce((acc, curr)=>{
//   if(curr.product.name in acc){
//     acc[curr.product.model] = curr.product.name;
//     return acc;
//   }
//   else {
//     acc[curr.product.model] = curr.product.name;
//     return acc;
//   }
// },{})

//เอาObject มาใส่ข้อมูลโดยมีkey ตัวเดียวกันคือ model
// //แล้วนำobjectที่ได้ จับใส่เข้าไปใน Array[]
// let smartAns = [];
// Object.keys(TotalAmountOfModel).map(function (key, index) {
//   let tempAns = {
//     "Name": TotalNameOfModel[key],
//     "Model": key,
//     "Amount": TotalAmountOfModel[key],
//     "PriceTotal": TotalPriceOfModel[key]
//   }
//   smartAns.push(tempAns);
// });
// console.log(smartAns);

//#5 ANSWER
// [
//   { Name: 'iPhone', Model: '12', Amount: 9, PriceTotal: 296100 },
//   { Name: 'iPhone', Model: '12 Pro', Amount: 9, PriceTotal: 404100 },
//   { Name: 'Samsung', Model: 'S21', Amount: 8, PriceTotal: 223200 },
//   { Name: 'Oppo', Model: 'A15', Amount: 1, PriceTotal: 4299 },
//   { Name: 'iPhone', Model: '11 Pro', Amount: 2, PriceTotal: 73800 },
//   { Name: 'Samsung', Model: 'A31', Amount: 3, PriceTotal: 23997 },
//   { Name: 'Oppo', Model: 'Reno5', Amount: 4, PriceTotal: 79960 },
//   { Name: 'Xiaomi', Model: 'Redmi 9C', Amount: 2, PriceTotal: 6798 },
//   { Name: 'Samsung', Model: 'A42', Amount: 4, PriceTotal: 47960 },
//   { Name: 'Vivo', Model: 'V20 Pro', Amount: 4, PriceTotal: 59996 },
//   { Name: 'Vivo', Model: 'X50 Pro', Amount: 2, PriceTotal: 39998 },
//   { Name: 'Vivo', Model: 'V20', Amount: 1, PriceTotal: 10999 },
//   { Name: 'iPhone', Model: 'SE2000', Amount: 1, PriceTotal: 14900 },
//   { Name: 'iPhone', Model: '12 Mini', Amount: 4, PriceTotal: 103600 }
// ]


// #6 หายอดรวมของการจ่ายแต่ละประเภท (Cash, Credit, ...)
// const answer6 =sales.reduce((acc, item)=> {
//           if(item.type in acc) {
//               acc[item.type] += item.product.unitPrice;
//   }else {
//     acc[item.type] = item.product.unitPrice;
//   }
//   return acc
//  },{})
//  console.log(answer6)
 //#6 ANSWER
 // { Cash: 480325, Credit: 554197, Airpay: 194588, 'True Wallet': 160597 }

//#7 หายอดรวมในแต่ละวัน
// const answer7 =sales.reduce( (acc, curr) =>{
//   if( curr.saleDate in acc) {
//     acc[curr.saleDate] += curr.product.unitPrice;
//     return acc;
//   }else {
//     acc[curr.saleDate] = curr.product.unitPrice;
//   }
//   return acc;
// },[])
//console.log(answer7)

// let smartAns = [];
// Object.keys(answer7).map(function (key, index) {
//   let tempAns = {
//     "Date": key,
//     "PriceTotal": answer7[key]
//   }
//   smartAns.push(tempAns);
// });
// console.log(smartAns);
//#7 ANSWER
//[
//   { Date: '01-01-2021', PriceTotal: 232400 },
//   { Date: '02-01-2021', PriceTotal: 231187 },
//   { Date: '03-01-2021', PriceTotal: 117689 },
//   { Date: '04-01-2021', PriceTotal: 69977 },
//   { Date: '05-01-2021', PriceTotal: 91888 },
//   { Date: '06-01-2021', PriceTotal: 80790 },
//   { Date: '07-01-2021', PriceTotal: 230200 },
//   { Date: '08-01-2021', PriceTotal: 114600 },
//   { Date: '09-01-2021', PriceTotal: 39989 },
//   { Date: '10-01-2021', PriceTotal: 134689 },
//   { Date: '11-01-2021', PriceTotal: 46298 }
// ]

//#8 เรียงยอดขายของแต่ละรุ่นจากมากไปน้อย
// //หาว่า ในรุ่นนั้นๆ คือ ยี่ห้ออะไร
// const TotalModelInName =sales.reduce((acc, curr)=>{
//   if(curr.product.name in acc){
//     acc[curr.product.model] = curr.product.name;
//     return acc;
//   }
//   else {
//     acc[curr.product.model] = curr.product.name;
//     return acc;
//   }
// },{})
// console.log(TotalModelInName)

// //หาว่า modelนั้นๆๆ มีจำนวนที่ถูกซื้อไปจำนวนเท่าไร
// const answer8 = sales.reduce((acc, curr)=>{
//  let nameOfModel =  curr.product.model
//  acc[nameOfModel] = (acc[curr.product.model] || 0) +1;
//   return acc;
// },{})
// //console.log(answer8)
// //แปลงจาก Object เป็นArray เพื่อ sort
// const arr = Object.entries(answer8)
// //console.log(arr)
// const sortArr =arr.sort((a, b)=> b[1]-a[1]);
// //console.log(sortArr)

// //แปลงกลับเป็น Object
// const obj = Object.fromEntries(sortArr);
// //console.log(obj);

// //เอาObjectที่แปลง มาใส่ข้อมูลโดยมีkey ตัวเดียวกันคือ model
// //แล้วนำobjectที่ได้ จับใส่เข้าไปใน Array[]
// let smartAns = [];
// Object.keys(obj).map(function (key, index) {
//   let tempAns = {
//     "name": TotalModelInName[key],
//     "Model": key,
//     "Amount": obj[key]
//   }
//   smartAns.push(tempAns);
// })
//console.log(smartAns);
//# 8 ANSWER
// [
//   { name: 'iPhone', Model: '12', Amount: 9 },
//   { name: 'iPhone', Model: '12 Pro', Amount: 9 },
//   { name: 'Samsung', Model: 'S21', Amount: 8 },
//   { name: 'Oppo', Model: 'Reno5', Amount: 4 },
//   { name: 'Samsung', Model: 'A42', Amount: 4 },
//   { name: 'Vivo', Model: 'V20 Pro', Amount: 4 },
//   { name: 'iPhone', Model: '12 Mini', Amount: 4 },
//   { name: 'Samsung', Model: 'A31', Amount: 3 },
//   { name: 'iPhone', Model: '11 Pro', Amount: 2 },
//   { name: 'Xiaomi', Model: 'Redmi 9C', Amount: 2 },
//   { name: 'Vivo', Model: 'X50 Pro', Amount: 2 },
//   { name: 'Oppo', Model: 'A15', Amount: 1 },
//   { name: 'Vivo', Model: 'V20', Amount: 1 },
//   { name: 'iPhone', Model: 'SE2000', Amount: 1 }
// ]
//----------------------------------------------------------------

//#9 เรียงลูกค้าที่ซื้อมากที่สุดจากมากไปน้อย
// const answer9 = sales.reduce((acc, curr) => {
//   //console.log(curr)
//   acc[curr.customer] = (acc[curr.customer] || 0) + 1;
//   return acc;
// }, {})
// //console.log(answer9)

// const arr = Object.entries(answer9)
// //console.log(arr)
// const sortArr = arr.sort((a, b)=> b[1]-a[1])
// //console.log(sortArr)
// const obj = Object.fromEntries(sortArr);
// //console.log(obj);

// let smartAns = [];
// Object.keys(obj).map(function (key, index) {
//   let tempAns = {
//     "Customer": key,
//    "Amount": obj[key]
//   }
//   smartAns.push(tempAns);
// })
// console.log(smartAns);
//#9 ANSWER
//[
//   { Customer: 'Cin', Amount: 4 },
//   { Customer: 'Sun', Amount: 3 },
//   { Customer: 'Tle', Amount: 3 },
//   { Customer: 'Ham', Amount: 3 },
//   { Customer: 'Micky', Amount: 3 },
//   { Customer: 'Game', Amount: 3 },
//   { Customer: 'Beer', Amount: 2 },
//   { Customer: 'Jit', Amount: 2 },
//   { Customer: 'Palm', Amount: 2 },
//   { Customer: 'Top', Amount: 2 },
//   { Customer: 'Snap', Amount: 2 },
//   { Customer: 'Boss', Amount: 2 },
//   { Customer: 'Sine', Amount: 2 },
//   { Customer: 'Bank', Amount: 2 },
//   { Customer: 'Leo', Amount: 2 },
//   { Customer: 'U', Amount: 2 },
//   { Customer: 'Boom', Amount: 2 },
//   { Customer: 'Am', Amount: 2 },
//   { Customer: 'Um', Amount: 2 },
//   { Customer: 'Dom', Amount: 2 },
//   { Customer: 'Sern', Amount: 2 },
//   { Customer: 'Sila', Amount: 1 },
//   { Customer: 'Note', Amount: 1 },
//   { Customer: 'Boy', Amount: 1 },
//   { Customer: 'Win', Amount: 1 },
//   { Customer: 'Tom', Amount: 1 }
// ]
