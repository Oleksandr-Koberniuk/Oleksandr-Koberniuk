import { products } from "../data/products.js";
import { formatCurrency } from "./money.js";
let hotDealsHTML = '';

products.forEach((product) => {  
    if (product.discount) {
        hotDealsHTML += `
            <div class="hot-deal-product">
                <div class="hot-deal-product-image-container">
                    <img class="hot-deal-product-image" src="images/${product.id}/main-photo.jpg">
                </div>
                <div class="hot-deal-product-details">
                    <p>
                        ${product.name}
                    </p>
                    <p>
                        &euro;${formatCurrency(product.priceCents)} <sup class="previous-price">Was &euro;${formatCurrency(product.previousPriceCents)}</sup>
                    </p>
                </div>
            </div>
        `
    }
});

document.querySelector('.js-hot-deals-container').innerHTML = hotDealsHTML;