document.addEventListener('DOMContentLoaded', function () {
    const cartButton = document.getElementById('cart-button');
    const cartCount = document.getElementById('cart-count');
    let totalPrice = 0;
    let itemCount = 0;

    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const price = parseInt(button.getAttribute('data-price'));
            totalPrice += price;
            itemCount++;
            cartCount.textContent = itemCount;
            alert(`Item added to cart. Total price: ₹${totalPrice}`);
        });
    });

    cartButton.addEventListener('click', function () {
        alert(`You have ${itemCount} items in your cart. Total price: ₹${totalPrice}`);
    });
});
