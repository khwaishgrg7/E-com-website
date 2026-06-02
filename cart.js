// SELECT BUTTONS

const plusBtns =
document.querySelectorAll(".plus");

const minusBtns =
document.querySelectorAll(".minus");

const removeBtns =
document.querySelectorAll(".remove-btn");

// UPDATE CART TOTAL

function updateCart(){

    const cartCards =
    document.querySelectorAll(".cart-card");

    let subtotal = 0;

    let totalProducts = 0;

    cartCards.forEach((card) => {

        // PRICE

        const priceText =
        card.querySelector(".price")
        .innerText;

        const price =
        Number(priceText.replace("$",""));

        // QUANTITY

        const quantity =
        Number(
            card.querySelector(".quantity")
            .innerText
        );

        subtotal += price * quantity;

        totalProducts += quantity;

    });

    // DISCOUNT

    let discount = 0;

    if(subtotal >= 300){

        discount = 30;

    }

    // FINAL TOTAL

    const finalTotal =
    subtotal - discount;

    // UPDATE HTML

    document.getElementById(
        "subtotal"
    ).innerText =
    "$" + subtotal;

    document.getElementById(
        "discount"
    ).innerText =
    "-$" + discount;

    document.getElementById(
        "total-bill"
    ).innerText =
    "$" + finalTotal;

    document.getElementById(
        "total-products"
    ).innerText =
    totalProducts;

}

// PLUS BUTTON

plusBtns.forEach((btn) => {

    btn.addEventListener("click", () => {

        const quantity =
        btn.parentElement
        .querySelector(".quantity");

        let count =
        Number(quantity.innerText);

        count++;

        quantity.innerText = count;

        updateCart();

    });

});

// MINUS BUTTON

minusBtns.forEach((btn) => {

    btn.addEventListener("click", () => {

        const quantity =
        btn.parentElement
        .querySelector(".quantity");

        let count =
        Number(quantity.innerText);

        if(count > 1){

            count--;

            quantity.innerText = count;

            updateCart();

        }

    });

});

// REMOVE PRODUCT

removeBtns.forEach((btn) => {

    btn.addEventListener("click", () => {

        btn.parentElement
        .parentElement
        .remove();

        updateCart();

    });

});

// INITIAL CALL

updateCart();