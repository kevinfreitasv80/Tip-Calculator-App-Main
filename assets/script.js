let inputs = document.querySelectorAll("input");
for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("input", () => {
        inputs[i].value = ("/[a-z]/ig", "");
    });
}