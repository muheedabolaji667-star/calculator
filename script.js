const display = document.getElementById("display");

function appendNumber(n) {
    current += n;
    display.value = current;
}

function chooseOperator(op) {
    previous = current;
    operator = op;
    current = "";
}

function calculate() {
    let a = Number(previous);
    let b = Number(current);

    if (operator === "+") current = String(a + b);
    if (operator === "-") current = String(a - b);
    if (operator === "*") current = String(a * b);
    if (operator === "/") {
        current = b === 0 ? "Error" : String(a / b);
    }

    display.value = current;
    previous = "";
    operator = "";
}

function clearDisplay() {
    current = "";
    previous = "";
    operator = "";
    display.value = "0";
}

function deleteLast() {
    current = current.slice(0, -1);
    display.value = current || "0";
}

function percentage() {
    current = String(Number(current) / 100);
    display.value = current;
}

function toggleSign() {
    current = String(Number(current) * -1);
    display.value = current;
} 