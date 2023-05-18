let products = [
    { product: "Gummy Worms", price: 5.79 },
    { product: "Plain M&Ms", price: 2.89 },
    { product: "Peanut M&Ms", price: 2.89 },
    { product: "Swedish Fish", price: 3.79 },
    { product: "Kit Kat", price: 1.99 },
    { product: "Sour Patch Kids", price: 2.49 },
    { product: "Hershey's Chocolate Bar", price: 1.79 },
    { product: "Jelly Beans", price: 4.29 },
    { product: "Skittles", price: 2.99 },
    { product: "Twix", price: 1.49 },
    { product: "Reese's Pieces", price: 3.49 },
    { product: "Lollipop", price: 0.99 },
    { product: "Snickers", price: 1.79 },
    { product: "Milk Duds", price: 2.19 }
];

// Which candies costs less than $4.00?
// Which candies has "M&M" its name?
// Do we carry "Swedish Fish"?
const candyUnder4 = products.filter((item) => item.price < 4);
candyUnder4.forEach((item) => {
    console.log(item.price.toFixed(2), item.product);
})
console.log('------');
// Which candies has "M&M" its name?           or .includes('m&ms'));
const candiesWithMAndM = products.filter((item) => item.product.indexOf('M&Ms') !== -1);
candiesWithMAndM.forEach((item) => {
    console.log(item.product);
}) 
console.log('------');
// Do we carry "Swedish Fish"?
 const carrySwedishFish = products.find(item => item.product === "Swedish Fish") !== undefined;
    console.log(carrySwedishFish)
    //or
    const foundFish = products.find((item) => item.product === 'Swedish Fish');
if (foundFish) {
  console.log('yes, we have swedish fish');
} else {
  console.log('no, we do not have swedish fish');
}
 