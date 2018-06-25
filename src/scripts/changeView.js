const oneProduct = require("./oneProduct")

let $selectedProduct = $(".img")

$selectedProduct.click(function(){
    oneProduct(this.id, this.productId)
})

