const cart = [];
let total = 0;

function addItem(name, price) {
    console.time('Add Item');

    try {
        console.log(`Adding ${name} to cart at $${price}`);

        if (!name || !price) {
            throw new Error('Invalid item or price');
        }

        cart.push({ name, price });
        console.log(`Current cart: ${JSON.stringify(cart)}`);

        updateCart();
        updateTotal();

    } catch (error) {
        console.error('Error adding item to cart:', error);
    }

    console.timeEnd('Add Item');
}

function updateCart() {
    console.log('Updating cart display');
    const cartList = document.getElementById('cart');
    cartList.innerHTML = '';

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price}`;
        cartList.appendChild(listItem);
    });
}

function updateTotal() {
    console.log('Calculating total cost');
    total = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('total').textContent = total.toFixed(2);
}


function checkCartLength() {
    console.warn('Cart length is:', cart.length);
}

function simulateError() {
    console.error('Simulated error for debugging purposes');
}

function traceCartUpdate() {
    console.trace('Tracing cart update function calls');
}