document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 1, name: "Product 1", price: 100, image: "images/product1.jpg" },
    { id: 2, name: "Product 2", price: 200, image: "images/product2.jpg" },
    { id: 3, name: "Product 3", price: 300, image: "images/product3.jpg" },
  ]

  const productContainer = document.querySelector(".product-container")

  products.forEach((product) => {
    const productCard = document.createElement("div")
    productCard.classList.add("product")
    productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `
    productContainer.appendChild(productCard)
  })
})

function addToCart(productId) {
  const products = [
    { id: 1, name: "Product 1", price: 100, image: "images/product1.jpg" },
    { id: 2, name: "Product 2", price: 200, image: "images/product2.jpg" },
    { id: 3, name: "Product 3", price: 300, image: "images/product3.jpg" },
  ]

  let cart = JSON.parse(localStorage.getItem("cart")) || []
  const product = products.find((p) => p.id === productId)

  const existingProduct = cart.find((item) => item.id === productId)

  if (existingProduct) {
    existingProduct.quantity++
  } else {
    cart.push({ ...product, quantity: 1 })
  }

  localStorage.setItem("cart", JSON.stringify(cart))
  alert(`${product.name} added to cart!`)
}
