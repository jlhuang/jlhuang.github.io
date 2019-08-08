document.querySelector("html").onclick = function() {
    let myheading = document.querySelector("h1");
    if (myheading.textContent === "HAPPY FACE") {
        myheading.textContent = "STOP CLICK ME!";
    } else {
        myheading.textContent = "HAPPY FACE";
    }
};