let cart = [
    {item: "Bread", price: 3.29, quantity: 2},
    {item: "Milk", price: 4.09, quantity: 1},
    {item: "T-Bone Steak", price: 12.99, quantity: 2},
    {item: "Baking Potato", price: 1.89, quantity: 6},
    {item: "Iceberg Lettuce", price: 2.06, quantity: 1},
    {item: "Ice Cream - Vanilla", price: 6.81, quantity: 1},
    {item: "Apples", price: 0.66, quantity: 6}
   ];
   //write code that searches the cart array using the /map()/ 
   //function to return ONLY the item /name/ and then use (forEach()) 
   //to display the list of items.


 function itemName(cart){
   return cart.item;
    
 }
 let itemList = cart.map(itemName);
 let numEl = itemList.length;
 for (let i =0; i < numEl; i++){
    console.log(itemList[i])
 }
 console.log('----')

 
 function displayItems(cart){
    console.log(cart.item, cart.price)
 }
 cart.forEach(displayItems);
console.log('----')

 //write a code that determines the total cost of everything in the cart using (reduce()).
 //In the reducer function, remember to account for the possibility of there being more than 1
 //init (ex: 5 apples rather than 1!)


function getTotalCost(currentTotal, item){
    return currentTotal + item.price * item.quantity;
}
let sum= cart.reduce(getTotalCost, 0);
console.log(sum);
console.log('----')

//sort

cart.sort(function(a,b){
    if(a.item < b.item) return -1;
    else if(a.item == b.item) return 0;
    else return 1;
});

let numItems = cart.length;
for(let i =0; i < numItems; i++){
    console.log(cart[i].item + ' ' +cart[i].price.toFixed(2))
};