import { cart, removeFromCart } from "./cart.js";
import { formatCurrency } from "./money.js"

function renderCartPage() {
    let cartHTML = '';

    cart.forEach((product) => {
        if (product.discount) {
            cartHTML += `
            <div class="product-container">
                <div class="image-and-details-container">
                    <div class="product-image-container">
                        <img src="images/products/${product.id}/main-photo.jpg" class="product-image">
                    </div>
        
                    <div class="details-container">
                        <p>${product.name}</h2>
                        <p>&euro;${formatCurrency(product.priceCents)} <sup class="previous-price">Was &euro;${formatCurrency(product.previousPriceCents)}</sup></p>
                    </div>
                </div>
    
                <div class="quantity-and-delete-container">
                    <div class="quantity-and-delete-wrapper">
                        <input type="number" data-id="${product.id}" class="js-quantity-input quantity-input" value="${product.quantity}">
                        <img src="images/cart-page/delete.svg" data-id="${product.id}" class="js-delete-button delete-button">
                    </div>
                </div>
            </div>
        `; 
        } else {
            cartHTML += `
            <div class="product-container">
                <div class="image-and-details-container">
                    <div class="product-image-container">
                        <img src="images/products/${product.id}/main-photo.jpg" class="product-image">
                    </div>
        
                    <div class="details-container">
                        <p>${product.name}</h2>
                        <p>&euro;${formatCurrency(product.priceCents)}</p>
                    </div>
                </div>
    
                <div class="quantity-and-delete-container">
                    <div class="quantity-and-delete-wrapper">
                        <input type="number" data-id="${product.id}" class="js-quantity-input quantity-input" value="${product.quantity}">
                        <img src="images/cart-page/delete.svg" data-id="${product.id}" class="js-delete-button delete-button">
                    </div>
                </div>
            </div>
        `; 
        }
    });

    document.querySelector('.cart-container').innerHTML = cartHTML;

    document.querySelectorAll('.js-delete-button').forEach((button) => {
        let id = button.dataset.id;
        button.addEventListener('click', () => {
            removeFromCart(id);
            renderCartPage();
        });
    });
}
renderCartPage();

document.querySelectorAll('.quantity-input').forEach((element) => {
    let id = element.dataset.id;

    element.addEventListener('change', () => {
        console.log("sf");
        
        cart.forEach((product) => {
            if (product.id === id) {
                product.quantity = element.value;
                console.log(product);
            }
        });
    });
});