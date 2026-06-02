// QUANTITY BUTTONS

const plusBtns = document.querySelectorAll(".plus");
const minusBtns = document.querySelectorAll(".minus");

plusBtns.forEach((btn) => {

    btn.addEventListener("click", () => {

        let quantity =
            btn.parentElement.querySelector(".quantity");

        let count = Number(quantity.innerText);

        count++;

        quantity.innerText = count;

    });

});

minusBtns.forEach((btn) => {

    btn.addEventListener("click", () => {

        let quantity =
            btn.parentElement.querySelector(".quantity");

        let count = Number(quantity.innerText);

        if(count > 1){

            count--;

            quantity.innerText = count;

        }

    });

});

// ADD TO CART BUTTON

const cartBtns =
    document.querySelectorAll(".cart-btn");

cartBtns.forEach((btn) => {

    btn.addEventListener("click", () => {

        btn.innerText = "Added ✔";

        btn.style.background = "green";

    });

});