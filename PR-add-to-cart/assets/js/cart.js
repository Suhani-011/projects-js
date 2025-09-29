const cart = JSON.parse(localStorage.getItem("cart")) || [];
const counter = document.getElementById("counter");
const cartContainer = document.getElementById("cart-container");
const mainTotal = document.getElementById("main-total");
const emptyCart = document.getElementById("empty-cart");
const tableSection = document.getElementById("cart-table-section");

function checkCart(){
    if(cart.length == 0){

    tableSection.style.display = "none";

    emptyCart.innerHTML = `
    <div class="d-flex justify-content-center align-items-center">
        <img src="./assets/images/empty-cart.png" alt="Empty Cart">
    </div>
    `;
    }else{
        emptyCart.innerHTML = "";
        tableSection.style.display = "block";
        displayContainerItems();
    }
}
// ---------- DISPLAY FUNCTION ----------
function displayContainerItems() {
    cartContainer.innerHTML = ""; 
    counter.innerHTML = cart.length;

    let sum = 0;

    cart.forEach((prod, idx) => {
        let subtotal = prod.quantity * prod.price;
        sum += subtotal;

        cartContainer.innerHTML += `
        <tr>
            <!-- Product -->
            <td>
                <div class="text-center py-3">
                    <img src="${prod.imageUrl}" alt="${prod.name}" class="product-img img-fluid mb-2" style="width:80px; height:80px; object-fit:cover;">
                    <p class="mb-0 fw-semibold">${prod.name}</p>
                </div>
            </td>

            <!-- Price -->
            <td>$${prod.price * prod.quantity}</td>

            <!-- Quantity -->
            <td>
                <div class="d-flex justify-content-center align-items-center">
                    <button class="btn btn-outline-primary btn-sm fw-bold fs-6" onclick="updateQuantity(${idx}, -1)">-</button>
                    <span class="px-3 fs-6">${prod.quantity}</span>
                    <button class="btn btn-outline-primary btn-sm fw-bold fs-6" onclick="updateQuantity(${idx}, 1)">+</button>
                </div>
            </td>

            <!-- Subtotal -->
            <td>$${prod.price}</td>

            <!-- Total -->
            <td class="text-danger fw-semibold">$${subtotal}</td>

            <!-- Delete Button -->
            <td class="text-center">
                <button class="btn btn-danger btn-sm delete-btn" onclick="removeProduct(${idx})">
                    <i class="ri-delete-bin-line"></i>
                </button>
            </td>
        </tr>
        `;
    });

    mainTotal.innerHTML = `$${sum}`;
}

// ---------- SAVE CART ----------
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// ---------- REMOVE PRODUCT ----------
function removeProduct(idx) {
    cart.splice(idx, 1);
    saveCart();
    displayContainerItems();
    checkCart();
}

// ---------- CLEAR CART ----------
function clearCart() {
    cart.splice(0);
    saveCart();
    displayContainerItems();
    checkCart();
}

// ---------- UPDATE QUANTITY ----------
function updateQuantity(idx, value) {
    cart[idx].quantity += value;
    if (cart[idx].quantity <= 0) {
        removeProduct(idx);
    } else {
        saveCart();
        displayContainerItems();
    }
}
// ---------- INITIALIZE ----------
document.addEventListener("DOMContentLoaded", checkCart);
