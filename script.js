// Build Mode Toggle Script
const modeToggle = document.getElementById("modeToggle");

modeToggle.addEventListener("click", function () {
    document.body.classList.toggle("build-mode");

    if (document.body.classList.contains("build-mode")) {
        modeToggle.textContent = "Switch to Focus Mode";
    } else {
        modeToggle.textContent = "Switch to Build Mode";
    }
});

// Project Card Toggle Logic
const projectButtons = document.querySelectorAll(".project-toggle-btn");

projectButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const details = button.nextElementSibling;

        details.classList.toggle("active");

        if (details.classList.contains("active")) {
            button.textContent = "Hide Details";
        } else {
            button.textContent = "Show Details";
        }
    });
});