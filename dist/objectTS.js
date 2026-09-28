const chai = {
    name: "masala chai",
    price: 20,
    isHot: true
};
let tea;
tea = {
    name: "ginger tea",
    price: 20,
    isHot: true
};
const adrakChai = {
    name: "Adrak Chai",
    price: 25,
    ingredients: ["ginger", "tea leaves"]
};
let smallCup = { size: "200ml" };
let bigCup = { size: "500ml", material: "steel" };
smallCup = bigCup;
const coffee = { brewTime: 5, beans: "Arabica" };
const chaiBrew = coffee;
const u1 = {
    username: "dhruv12",
    password: "12345678"
};
const updateChai = (updates) => {
    console.log("updating chai with", updates);
};
updateChai({ price: 25 });
updateChai({ isHot: false });
updateChai({});
const placeOrder = (order) => {
    console.log(order);
};
placeOrder({
    name: "Masala Chai",
    quantity: 2
});
const chaiInfo = {
    name: "Lemon Tea",
    price: 30
};
export {};
//# sourceMappingURL=objectTS.js.map