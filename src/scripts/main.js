const allProducts = require("./allProducts")
const oneProduct = require("./oneProduct")

$("#mainContent").on("click", ".all-products", function(){
    console.log(typeof this.id)
    oneProduct(this.id)
})

allProducts()
// oneProduct("a")
