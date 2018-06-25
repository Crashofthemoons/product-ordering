let Products = require("./productsData")

const allProducts = () => {
    let $mainContent = $("#mainContent")
    for (let product in Products) {
        $mainContent[0].innerHTML +=
                `<div class="all-products" id=${Products[product].id}>
                    <h3 class="title">${Products[product].title}</h3>
                    <img src=${Products[product].img} class="img">
                    <p class="description">${Products[product].description}</p>
                </div>`
    }
}

module.exports = allProducts
