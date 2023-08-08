const phones = [
    { name: 'Samsung', camera: 24, storage: '32gb', price: 46000, color: 'black'},
    { name: 'Iphone', camera: 44, storage: '62gb', price: 86000, color: 'blue'},
    { name: 'Redmi', camera: 14, storage: '22gb', price: 40000, color: 'black'},
    { name: 'Xaomi', camera: 14, storage: '12gb', price: 36000, color: 'black'},
    { name: 'Nokia', camera: 14, storage: '12gb', price: 26000, color: 'black'},
    { name: 'Walton', camera: 14, storage: '12gb', price: 22000, color: 'black'},
    { name: 'HTC', camera: 14, storage: '12gb', price: 20000, color: 'black'},
];

function cheapestPhone(phones){
    let cheapest = phones[0];
    for(let i = 0; i < phones.length; i++){
        const phone = phones[i];
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;

}

const mySelection = cheapestPhone(phones);

console.log(mySelection);