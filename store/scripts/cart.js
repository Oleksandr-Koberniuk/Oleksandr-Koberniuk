import { products } from "../data/products.js";

export let cart = JSON.parse(localStorage.getItem('cart')) || [];

export function addToCart(productId, quantity) {
    let cartProduct;
    let isProductIntoCart = false;
    console.log("ds");
    
    cart.forEach((product) => {
        if (product.id === productId) {
            product.quantity += quantity;
            isProductIntoCart = true;
        }
    });
    
    if (!isProductIntoCart) { 
        products.forEach((product) => {
            if (product.id === productId) {
                cartProduct = product;
                cartProduct.quantity = quantity;
                cart.push(cartProduct);
            }
        }); 
    }

    localStorage.setItem('cart', JSON.stringify(cart))
}

export function removeFromCart(productId) {
    cart = cart.filter(product => product.id !== productId);

    localStorage.setItem('cart', JSON.stringify(cart));
}