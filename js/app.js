// navbar
const nav = document.querySelector(".nav_menu");
const openNavBtn = document.querySelector("#nav-toggle-open");
const closeNavBtn = document.querySelector("#nav-toggle-close");

const openNav = () => {
  nav.style.display = "flex";
  openNavBtn.style.display = "none";
  closeNavBtn.style.display = "inline-block";
};
openNavBtn.addEventListener("click", openNav);

const closeNav = () => {
  nav.style.display = "none";
  openNavBtn.style.display = "inline-block";
  closeNavBtn.style.display = "none";
};
closeNavBtn.addEventListener("click", closeNav);
// navbar

// slider
const nextSlide = document.querySelector(".next-slider");
const prevSlide = document.querySelector(".prev-slider");
const slider = document.querySelector(".slider");

nextSlide.addEventListener("click", function () {
  const slides = document.querySelectorAll(".slides");
  slider.appendChild(slides[0]);
});
prevSlide.addEventListener("click", function () {
  const slides = document.querySelectorAll(".slides");
  slider.prepend(slides[slides.length - 1]);
});
// slider

// todo
const inputBox = document.getElementById("todo-inputBox");
const listContainer = document.getElementById("list-container");
function addTask() {
  if (inputBox.value == "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
}
listContainer.addEventListener("click", function (e) {
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName == "SPAN") {
    e.target.parentElement.remove();
  }
});
// todo

// notes
let color = document.getElementById("color");
let createBtn = document.getElementById("createBtn");
let list = document.getElementById("list");

createBtn.onclick = () => {
  let newNote = document.createElement("div");
  newNote.classList.add("note");
  newNote.innerHTML = `
    <span class="close">x</span>
    <button class="copy-btn">Copy</button>
    <textarea placeholder="Write Content..." rows="10" cols="30"></textarea>`;

  newNote.style.borderColor = color.value;
  list.appendChild(newNote);
};

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("close")) {
    event.target.parentNode.remove();
  }
  if (event.target.classList.contains("copy-btn")) {
    let textarea = event.target.nextElementSibling; 
    textarea.select(); 
    document.execCommand("copy"); 
    alert("Text copied to clipboard!"); 
  }
});
// notes

// faq
const accordionItemHeaders = document.querySelectorAll(
  ".accordion-item-header"
);

accordionItemHeaders.forEach((accordionItemHeader) => {
  accordionItemHeader.addEventListener("click", () => {
    accordionItemHeaders.forEach((item) => {
      if (item !== accordionItemHeader) {
        item.classList.remove("active");
        const body = item.nextElementSibling;
        body.style.maxHeight = 0;
      }
    });

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});
// faq

// color-generator
const setBg = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);

  document.getElementById("colorContainer").style.backgroundColor =
    "#" + randomColor;
  document.getElementById("colorContainer").style.boxShadow =
    "0px 0px 40px #" + randomColor + "82";

  colorGen.innerHTML = "#" + randomColor;
  document.getElementById("dot1").style.backgroundColor =
    "#" + randomColor + "12";
  document.getElementById("dot2").style.backgroundColor =
    "#" + randomColor + "92";
  document.getElementById("dot3").style.backgroundColor =
    "#" + randomColor + "52";
  document.getElementById("dot4").style.backgroundColor =
    "#" + randomColor + "42";
  document.getElementById("dot5").style.backgroundColor =
    "#" + randomColor + "22";
  document.getElementById("dot6").style.backgroundColor =
    "#" + randomColor + "92";
};

genNew.addEventListener("click", setBg);

setBg();

const copyColorBtn = document.getElementById("copyColorBtn");
const copySound = document.getElementById("copySound");
const successMessage = document.getElementById("successMessage");

copyColorBtn.addEventListener("click", () => {
  const colorCode = colorGen.textContent;
  navigator.clipboard.writeText(colorCode).then(() => {
    copySound.play();
    successMessage.style.display = "block";
    setTimeout(() => {
      successMessage.style.display = "none";
    }, 2000);
  });
});
// color-generator

// form
const form = document.getElementById("contact-form");
const error = document.getElementById("form-error");
const success = document.getElementById("form-success");

form.addEventListener("submit", (e) => {
  e.preventDefault(); 
  error.textContent = ""; 
  success.textContent = ""; 

const name = document.getElementById("form-name").value.trim();
  const email = document.getElementById("form-email").value.trim();
  const message = document.getElementById("form-message").value.trim();
if (!name || !email || !message) {
    error.textContent =
      "All fields are required. Please fill in the missing details.";
    return;
  }
if (name.length < 3) {
    error.textContent = "Name must be at least 3 characters long.";
    return;
  }
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    error.textContent = "Please enter a valid email address.";
    return;
  }
if (message.length < 15) {
    error.textContent = "Message must be at least 15 characters long.";
    return;
  }
 success.textContent = "Form submitted successfully!";
  form.reset(); 
setTimeout(() => {
    success.textContent = "";
  }, 5000);
});
// form