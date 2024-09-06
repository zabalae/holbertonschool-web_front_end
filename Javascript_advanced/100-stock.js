const stock = {
    macbook: 2,
    iphone: 4
};

function processPayment(itemName) {
    stock[itemName]--; // Decrement the stock for the item
    console.log(`Payment is being processed for item ${itemName}`);
}

function processError(itemName) {
    console.log(`No more ${itemName} in stock`);
    console.log("Payment is not being processed");
}

function processOrder(itemName, callbackPayment, callbackError) {
    console.log(`Verifying the stock of ${itemName}`);

    if (stock[itemName] && stock[itemName] > 0) {
        callbackPayment(itemName);
    } else {
        callbackError(itemName);
    }
}

const itemToPurchase = prompt("Please enter the item you would like to purchase (Macbook, iPhone)").toLowerCase();

if (itemToPurchase === "macbook" || itemToPurchase === "iphone") {
    processOrder(itemToPurchase, processPayment, processError);
} else {
    console.log("Item not available");
}
