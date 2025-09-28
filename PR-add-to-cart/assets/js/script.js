const products = [
    {
        id : 1,
        name :"Flowering tea",
        imageUrl :"./assets/images/tea1.jpg",
        rating :"./assets/images/stars.png",
        price :"40.00"
    },
    {
        id : 2,
        name :"Mock ups",
        imageUrl :"./assets/images/tea2.jpg",
        rating :"./assets/images/stars.png",
        price :"100.00"
    },
    {
        id : 3,
        name :"Fruit tea",
        imageUrl :"./assets/images/tea3.jpg",
        rating :"./assets/images/stars.png",
        price :"80.00"
    },
    {
        id : 4,
        name :"Green tea",
        imageUrl :"./assets/images/tea4.jpg",
        rating :"./assets/images/stars.png",
        price :"90.00"
    },
    {
        id : 5,
        name :"Black tea",
        imageUrl :"./assets/images/tea5.jpg",
        rating :"./assets/images/stars.png",
        price :"150.00"
    },
    {
        id : 6,
        name :"Herbal tea",
        imageUrl :"./assets/images/tea6.jpg",
        rating :"./assets/images/stars.png",
        price :"190.00"
    },
    {
        id : 7,
        name :"Metal box tea",
        imageUrl :"./assets/images/tea7.jpg",
        rating :"./assets/images/stars.png",
        price :"90.00"
    },
    {
        id : 8,
        name :"Blueberry tea",
        imageUrl :"./assets/images/tea8.jpg",
        rating :"./assets/images/stars.png",
        price :"70.00"
    },
]
const cart = JSON.parse(localStorage.getItem("cart")) || [];
const counter = document.getElementById("counter");

function updateCartcount(){
    counter.innerHTML = cart.length;
}

function addToCart(productId){
    let product = products.find((pro) =>{
        return pro.id == productId;
    })

    let idx = cart.findIndex((pro) => {
        return pro.id == productId;
    })

    if(idx == -1){
        product.quantity = 1;
        cart.push(product);
    }else{
        cart[idx].quantity++;
    }

    localStorage.setItem("cart",JSON.stringify(cart));
    updateCartcount();
}

const productRow = document.getElementById("product-row");

products.forEach((product,idx)=>{
    productRow.innerHTML += `
    <div class="col-xl-3 col-md-4 col-sm-6">
        <div>
            <div class="position-relative cart-img">
                <img src="${product.imageUrl}" alt="tea-img" class="img-fluid">
                <div class="cart-btn position-absolute">
                    <button onclick="addToCart(${product.id})">Add to cart</button>
                </div>
            </div>
            <div class="card-content text-center">
                <h4 class="tea-name text-primary">${product.name}</h4>
                <img src="${product.rating}" alt="" class="img-fluid pt-1 stars">
                <div class="tea-price">$${product.price}</div>
            </div>
        </div>
    </div>
    `
})
updateCartcount();



window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) { // When user scrolls down 50px
        navbar.classList.add("scrolled");
        
    } else {
        navbar.classList.remove("scrolled");
    }
});
