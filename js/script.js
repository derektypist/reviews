// Set Up Reviews

const reviews = [
    {
        id: 1,
        name: "Irina Nita",
        job: "Junior Software Developer",
        img: "images/irina-nita.PNG",
        text: "Well done"
    }, 

    {
        id: 2,
        name: "Stuart Crang",
        job: "IT Career Consultant",
        img: "images/stuart-crang.PNG",
        text: "Well done"
    },

    {
        id: 3,
        name: "Cindy Marchena",
        job: "Junior Developer",
        img: "images/cindy-marchena.PNG",
        text: "Congratulations"

    }, 

    {
        id: 4,
        name: "Jon McKennon",
        job: "Corporate Resource Director",
        img: "images/jon-mckennon.PNG",
        text: "Congratulations"

    }
];

// Select Items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// Set Starting Item
let currentItem = 0;

// Load Initial Item
window.addEventListener("DOMContentLoaded",function() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
});