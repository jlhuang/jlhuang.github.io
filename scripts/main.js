document.querySelector("html").onclick = function() {
    let myheading = document.querySelector("h1");
    if (myheading.textContent === "MY HEADING") {
        myheading.textContent = "stop click me!";
    } else {
        myheading.textContent = "MY HEADING";
    }
};