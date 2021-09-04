const screen = document.getElementById('screen');
function display(value) {
    screen.value += value;
}

function clearScreen() {
    screen.value = "";
}

function calculate() {
    try {
        screen.value = eval(screen.value)
    }
    catch(e) {
        alert("Invalid Input. Expression should be valid")
    }
}