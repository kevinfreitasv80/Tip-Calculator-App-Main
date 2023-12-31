const custom = document.getElementById("custom");
const inputs = document.querySelectorAll(".inputsNotTip");
const spanError = document.querySelector(".spanError");
const tipPerson = document.getElementById("tipPerson");
const tipButton = document.querySelectorAll(".tipButton");
const totalPerson = document.getElementById("totalPerson");
const resetButton = document.querySelector(".resetButton");
const valuesPercentage = [0.05, 0.1, 0.15, 0.2, 0.5];
let percentage = 0.0;

function updateResetButtonState() {
    const hasEmptyInput = [...inputs].some(input => !input.value);
    const isAnyTipButtonSelected = [...tipButton].some(button => button.style.background === "var(--color1)");

    if (hasEmptyInput || (!custom.value && !isAnyTipButtonSelected)) {
        resetButton.classList.add("disabled");
    } else {
        resetButton.classList.remove("disabled");
        const billValue = parseFloat(inputs[0].value);
        const numPeople = parseFloat(inputs[1].value);
        const result = ((billValue / numPeople) * percentage).toFixed(2);
        tipPerson.textContent = result;
        const resultTotal = ((billValue / numPeople) * (1 + percentage)).toFixed(2);
        totalPerson.textContent = resultTotal;
    }
}

inputs.forEach((input, index) => {
    input.addEventListener("input", function() {
        switch (index) {
            case 1:
                if (!inputs[1].value || inputs[1].value <= 0) {
                    spanError.textContent = "Can't be zero";
                    inputs[1].classList.add("invalid");
                } else {
                    spanError.textContent = "";
                    inputs[1].classList.remove("invalid");
                }
                break;
        }
        index === 0 ? this.value = this.value.replace(/\D/g, "").replace(/(\d{2})$/, ".$1") : this.value = this.value.replace(/\D/g, "");
        updateResetButtonState();
    });
});

tipButton.forEach((button, index) => {
    button.addEventListener("click", function() {
        if (!custom.value) {
            percentage = valuesPercentage[index];
            tipButton.forEach(element => {
                element.style.background = "var(--color2)";
                element.style.color = "var(--color7)";
            });
            this.style.background = "var(--color1)";
            this.style.color = "var(--color2)";
            updateResetButtonState();
        }
    });
});

custom.addEventListener("input", function() {
    if (this.value) {
        percentage = parseFloat(this.value) / 100;
        tipButton.forEach(button => {
            button.style.background = "var(--color2)";
            button.style.color = "var(--color7)";
        });
        updateResetButtonState();
    } else {
        percentage = 0.0;
        updateResetButtonState();
    }
});

resetButton.addEventListener("click", function() {
    inputs.forEach(element => {
        element.value = "";
    });
    tipButton.forEach(element => {
        element.style.background = "var(--color2)";
        element.style.color = "var(--color7)";
    });
    this.classList.add("disabled");
    tipPerson.textContent = "0.00";
    totalPerson.textContent = "0.00";
    custom.value = "";
    updateResetButtonState();
});

updateResetButtonState();