function displayCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || []
  const cartContainer = document.getElementById("cartContainer")
  cartContainer.innerHTML = ""

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>"
    return
  }

  let total = 0
  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity
    total += itemTotal

    const productDiv = document.createElement("div")
    productDiv.innerHTML = `
            <h2>${item.name}</h2>
            <img src="${item.image}" alt="${item.name}" width="100">
            <p>Price: $${item.price}</p>
            <p>Quantity: ${item.quantity}</p>
            <p>Total: $${itemTotal}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
            <hr>
        `
    cartContainer.appendChild(productDiv)
  })

  document.getElementById("cartTotal").innerText = `Total Amount: $${total}`
}

function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || []
  cart.splice(index, 1)
  localStorage.setItem("cart", JSON.stringify(cart))
  displayCart()
}

function clearCart() {
  localStorage.removeItem("cart")
  displayCart()
}

document.addEventListener("DOMContentLoaded", displayCart)
