function getFinalPrice(price, discount) {
    return price - price / discount;
}
console.log(getFinalPrice(100, '10%'));
