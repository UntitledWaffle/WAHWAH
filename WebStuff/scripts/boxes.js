const numberContainer = document.getElementById("number-container");

for (let i = 0; i < 100; i++) {
    // Create a div with appropriate class name
    const div = document.createElement("div");
    div.className = "number";

    // Generate Random Numbers for background color
    const r = GetRandomNumber();
    const g = GetRandomNumber();
    const b = GetRandomNumber();
    div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    // Random condition to set text color
    if (r > 220 || g > 220 || b > 220) {
        div.style.color = "white";
    }

    // Create an h2 element and set its innerText
    const heading = document.createElement("h2");
    heading.innerText = i;

    // Use `append` to add the heading to div. 
    div.append(heading);

    // Add the div to the main container
    numberContainer.append(div);
}

// Helper function to generate a random number between 0-255
function GetRandomNumber() {
    return Math.floor(Math.random() * 256);
}