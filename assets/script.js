const inputs = document.querySelectorAll("input");
for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("input", () => {
        inputs[i].value = inputs[i].value.replace(/[a-z]/ig, "");
    });
}