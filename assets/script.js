const inputs = document.querySelectorAll("input");
const resetButton = document.querySelector(".resetButton");
const tipButton = document.querySelectorAll(".tipButton");
let verifyInputs = () => {
    for (let i = 0; i < inputs.length; i++) {
        !inputs[i].value ? resetButton.classList.add("disabled") : resetButton.classList.remove("disabled");
    }
}

for (let i = 0; i < inputs.length; i++) {
    verifyInputs();
    inputs[i].addEventListener("input", () => {
        verifyInputs();
        inputs[i].value = inputs[i].value.replace(/[a-z]/ig, "");
    });
}
for (let i = 0; i < tipButton.length; i++) {
    tipButton[i].addEventListener("click", function() {
        for (let j = 0; j < tipButton.length; j++) {
            this.style.background = "var(--color1)";    
        }
        this.style.background = "var(--color1)";
        this.style.color = "var(--color2)";
    });
}