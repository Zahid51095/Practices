const shoppingCart = [
    {name: 'shoe', price: 1200, quantity: 2},
    {name: 'pant', price: 1600, quantity: 3},
    {name: 'shirt', price: 1500, quantity: 4},
    {name: 'belt', price: 1800, quantity: 5}
]

function totalCost(products){
    let sum = 0;
    for(let i = 0; i < products.length; i++){
        const product = products[i];
        const productTotal = product.price * product.quantity;
        sum = sum + productTotal;
    }
    return sum;
}

const expense = totalCost(shoppingCart);
console.log(expense);