const Products = require("./productsData")
const Reviews = require("./reviewsData")

const oneProduct = (id) => {
    let product = Products[id]
    let $mainContent = $("#mainContent")
    for (let review in Reviews) {
        if (id === Reviews[review].productId) {
            console.log(Reviews[review])
            $mainContent[0].innerHTML =
                    `<div class="all-products" id=${product.id}>
                        <h3 class="title">${product.title}</h3>
                        <img src=${product.img} class="img">
                        <p class="description">${product.description}</p>
                    </div>
                    <div class="review-list">
                        <h4>Reviews</h4>
                        <p class="review">${Reviews[review].text}</p>
                    </div>`
        }
    }
}

module.exports = oneProduct