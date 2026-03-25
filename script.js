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
        button.classList.toggle("active");

        if (details.classList.contains("active")) {
            button.textContent = "Hide Details";
        } else {
            button.textContent = "Show Details";
        }
    });
});

// Interactive Timeline Logic
const timelineButtons = document.querySelectorAll(".timeline-btn");
const timelineContent = document.getElementById("timelineContent");

const timelineData = {
    ubc: {
        title: "University of Toronto",
        text: "I began my academic journey at the University of Toronto in 2018 as a Political Science student. I progressed through my studies for two years before COVID-19 hit. As the world reeled from COVID-19, I took some time away from my studies as I realized Political Science was not my true passion. I knew myself well enough to know that when I went back to school, it needed to be for something I was truly passionate about, something I could wake up every day excited to learn about. I took some time to reflect on my future and explore different career paths, which ultimately led me to discover my passion for technology and programming. "
    },
    earls: {
        title: "Earls",
        text: "While taking the time to reflect on my future, I explored the hospitality industry and discovered a passion for customer service, leadership, management, and entrepreneurship."
    },
    transition: {
        title: "Transition",
        text: "After four years at Earls, I realized I wanted to pursue a career in technology and began exploring programming courses. I went back to school starting at Langara College in early 2025 in their Computer Programming Associate of Science program, where I built a strong foundation in programming concepts and languages such as Python, JavaScript, and HTML/CSS. I also developed skills in web development, databases, and network administration principles.  "
    },
    humber: {
        title: "Humber",
        text: "In August 2025, I found out that I would be moving to Toronto in December. I decided to begin anew at Humber College for their Winter 2026 semester in their Computer Programming Diploma program, where I am currently enrolled. I am excited to continue building my technical skills and gaining hands-on experience through projects and internships."
    },
    future: {
        title: "Future",
        text: "My long-term goal is to continue building strong technical skills, develop meaningful projects, collect relevant network and cybersecurity certifications, and grow into opportunities in software development and cybersecurity."
    }
};

timelineButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        timelineButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const stage = button.dataset.stage;
        const selectedStage = timelineData[stage];

        timelineContent.innerHTML = `
            <h3>${selectedStage.title}</h3>
            <p>${selectedStage.text}</p>
        `;
    });
});

// Form Validation Logic, Useful Error Messages, and Confirmation Message
const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const formError = document.getElementById("formError");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const messageValue = messageInput.value.trim();

    if (nameValue === "" || emailValue === "" || messageValue === "") {
        formError.textContent = "Please complete all fields before submitting.";
        return;
    }

    if (!emailValue.includes("@") || !emailValue.includes(".")) {
        formError.textContent = "Please enter a valid email address.";
        return;
    }

    formError.textContent = "Message sent successfully.";

    contactForm.reset();
});

// Scroll Indicator Hide/Show/Bounce Logic
const scrollIndicator = document.querySelector(".scroll-indicator");

function handleScroll() {
    if (window.scrollY > 100) {
        scrollIndicator.classList.add("hidden");
    } else {
        scrollIndicator.classList.remove("hidden");
    }
}

// Run once on page load
handleScroll();

// Run on scroll
window.addEventListener("scroll", handleScroll);