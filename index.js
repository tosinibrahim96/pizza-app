var cashInRegister = 100;
var nextOrderId = 1;
var nextPizzaId = 1;
var orderQueue = [];
var menu = [
    { name: "Mag", price: 8 },
    { name: "Pep", price: 10 },
    { name: "Haw", price: 10 },
    { name: "Veg", price: 9 },
];
function addNewPizza(pizzaObj) {
    pizzaObj.id = nextPizzaId++;
    menu.push(pizzaObj);
}
function placeOrder(pizzaName) {
    var pizza = menu.find(function (menuItem) {
        return menuItem.name == pizzaName;
    });
    if (!pizza) {
        return null;
    }
    cashInRegister += pizza.price;
    var order = {
        id: nextOrderId++,
        pizza: pizza,
        status: "ordered"
    };
    orderQueue.push(order);
    return order;
}
function completeOrder(orderId) {
    var order = orderQueue.find(function (order) {
        return order.id == orderId;
    });
    if (!order) {
        return null;
    }
    order.status = "completed";
    return order;
}
function getPizzaDetails(identifier) {
    if (typeof identifier === "string") {
        return menu.find(function (menuItem) {
            return menuItem.name == identifier;
        });
    }
    else if (typeof identifier === "number") {
        return menu.find(function (menuItem) {
            return menuItem.id == identifier;
        });
    }
    else {
        throw new TypeError("Invalid identifier type");
    }
}
addNewPizza({ name: "Chicken", price: 14 });
addNewPizza({ name: "Turkey", price: 11 });
addNewPizza({ name: "Spicy", price: 15 });
placeOrder('Chicken');
completeOrder(1);
console.log({ menu: menu, cashInRegister: cashInRegister, orderQueue: orderQueue });
