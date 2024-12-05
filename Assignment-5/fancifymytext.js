// Increases text size and sends the alert
function makeBigger() {
    const textArea = document.getElementById("textField");
    textArea.style.fontSize = "24pt";
    alert("Hello, world!");
}

// Applies fancy and boring styles
function applyStyle() {
    const textArea = document.getElementById("textField");
    const fancy = document.getElementById("fancyShmancy").checked;

    if (fancy) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

// Adds "-Moo" to the end of each sentence
function mooifyText() {
    const textArea = document.getElementById("textField");
    let text = textArea.value.toUpperCase();
    const sentences = text.split(".");
    textArea.value = sentences.join("-Moo.");
}

// Event listeners
document.getElementById("biggerButton").onclick = makeBigger;
document.getElementById("fancyShmancy").onchange = applyStyle;
document.getElementById("boringBetty").onchange = applyStyle;
document.getElementById("mooButton").onclick = mooifyText;
