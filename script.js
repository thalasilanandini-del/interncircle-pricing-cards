// =========================
// SELECT ELEMENTS
// =========================

const billingToggle = document.getElementById("billingToggle");

const monthlyLabel = document.getElementById("monthlyLabel");

const yearlyLabel = document.getElementById("yearlyLabel");

const prices = document.querySelectorAll(".price");

const billingNotes = document.querySelectorAll(".billing-note");


// =========================
// BILLING STATE
// =========================

let isYearly = false;


// =========================
// UPDATE PRICES
// =========================

function updatePricing() {

    prices.forEach(function(price) {

        if (isYearly) {

            price.textContent = price.dataset.yearly;

        } else {

            price.textContent = price.dataset.monthly;

        }

    });


    billingNotes.forEach(function(note) {

        if (isYearly) {

            note.textContent = "Billed yearly";

        } else {

            note.textContent = "Billed monthly";

        }

    });


    // Update toggle appearance

    if (isYearly) {

        billingToggle.classList.add("yearly");

        billingToggle.setAttribute(
            "aria-pressed",
            "true"
        );

        monthlyLabel.classList.remove("active");

        yearlyLabel.classList.add("active");

    } else {

        billingToggle.classList.remove("yearly");

        billingToggle.setAttribute(
            "aria-pressed",
            "false"
        );

        monthlyLabel.classList.add("active");

        yearlyLabel.classList.remove("active");

    }

}


// =========================
// TOGGLE EVENT
// =========================

billingToggle.addEventListener("click", function() {

    isYearly = !isYearly;

    updatePricing();

});


// =========================
// INITIAL DISPLAY
// =========================

updatePricing();