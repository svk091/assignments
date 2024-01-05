/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
  


  result =  [
    {'food' : 30},
    {"Clothing" : 40,},
    { "Electronics" : 30,}
  ]
*/

function calculateTotalSpentByCategory(transactions) {
  let categories = [];
  transactions.forEach((obj) => {
    if(!categories.includes(obj.category)) categories.push(obj.category);
  });

  let resultArray = [];
  categories.forEach((ele) => {
    resultArray.push({
      'category' : ele,
      'totalSpent' : 0
    })
  })

  for(let i = 0; i < transactions.length; i++) {
    for(let j = 0; j < resultArray.length; j++) {
      if(transactions[i].category == resultArray[j].category) {
        resultArray[j].totalSpent += transactions[i].price;
      }
    }
  }
  return resultArray;
}

module.exports = calculateTotalSpentByCategory;
