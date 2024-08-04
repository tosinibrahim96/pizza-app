let cashInRegister = 100
let nextOrderId = 1
let nextPizzaId = 1
const orderQueue: Order[] = []


type Pizza = {
    id: number
    name: string
    price: number
}

type Order = {
    id: number
    pizza: Pizza
    status: "completed" | "ordered"
}

const menu: Pizza[] = [
    { id: nextPizzaId++, name: "Mag", price: 8 },
    { id: nextPizzaId++, name: "Pep", price: 10 },
    { id: nextPizzaId++, name: "Haw", price: 10 },
    { id: nextPizzaId++, name: "Veg", price: 9 },
]


function addNewPizza(pizzaObj: Pizza): void {
    pizzaObj.id = nextPizzaId++;
    menu.push(pizzaObj);
}

function placeOrder(pizzaName: string): Order | null {
    const pizza = menu.find((menuItem) => {
        return menuItem.name == pizzaName
    });

    if (!pizza) {
        return null;
    }

    cashInRegister += pizza.price;
    const order: Order = {
        id: nextOrderId++,
        pizza,
        status: "ordered"
    };

    orderQueue.push(order)

    return order;
}

function completeOrder(orderId: number): Order | null {
    const order = orderQueue.find((order) => {
        return order.id == orderId
    });

    if (!order) {
        return null;
    }

    order.status = "completed"

    return order
}

function getPizzaDetails(identifier: string | number): Pizza|undefined {
    if (typeof identifier === "string") {
        return menu.find((menuItem) => {
            return menuItem.name == identifier
        });
    }else if(typeof identifier === "number") {
        return menu.find((menuItem) => {
            return menuItem.id == identifier
        });
    }else {
        throw new TypeError("Invalid identifier type")
    }
}


function addToArray<T>(array: T[], item: T): Array<T> {
    array.push(item)
    return array;
}



addToArray <Pizza>(menu, { id:nextPizzaId++, name: "Chicken", price: 14 })
addToArray <Order>(orderQueue, { id: nextOrderId++, pizza: { id: nextPizzaId++, name: "Chicken", price: 14 }, status: "completed" })
// addNewPizza({ name: "Turkey", price: 11 })
// addNewPizza({ name: "Spicy", price: 15 })

placeOrder('Chicken')
completeOrder(1)

console.log({ menu, cashInRegister, orderQueue });
