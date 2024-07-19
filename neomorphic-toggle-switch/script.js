// Get references to the toggle switch and buttons
var switchButton = document.getElementById("cb4");
var switchOuter = document.getElementById("outer");
var buttons = document.getElementsByClassName("button");

// Function to toggle classes on the switch and buttons
function toggleClasses() {
    if (this.switchButton.checked == false) {
        // Add 'neubtn-move' class to switch outer element
        this.switchOuter.classList.add("neubtn-move");
        // Add 'glow' class to all buttons
        for (i =0; i < this.buttons.length; i++) {
            this.buttons[i].classList.add("glow");
        }
    } else {
        // Remove 'neubtn-move' class from switch outer element
        this.switchOuter.classList.remove("neubtn-move");
        // Remove 'glow' class from all buttons
        for (i =0; i < this.buttons.length; i++) {
            this.buttons[i].classList.remove("glow");
        }
    }
}
