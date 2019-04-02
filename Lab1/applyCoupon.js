const item = {
    "name": "Avacado",
    "type": "Fruit",
    "category": "Food",
    "price": 200
}

let applyCoupon = function(item){

    let discount = function(dis){
        let disAmount = item.price * dis / 100;
        item.price = item.price - disAmount;
        return item;
    }

    return discount;
}

//applyCoupon(item)(10);
console.log(applyCoupon(item)(10).price);
