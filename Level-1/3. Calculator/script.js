let display = document.getElementById("display");

function appendCharacter(char) {
    if (display.value === "0") {
        display.value = char;
    } else {
        display.value += char;
    }
}

function clearDisplay() {
    display.value = "0";
}

function backspace() {
    if (display.value.length === 1) {
        display.value = "0";
    } else {
        display.value = display.value.slice(0, -1);
    }
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        alert("Invalid Expression");
    }
}
