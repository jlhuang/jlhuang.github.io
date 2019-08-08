let mylist = {"商品分類1":{"商品11":"概要11","商品12":"概要12","商品13":"概要13"},
              "商品分類2":{"商品21":"概要21"},
              "商品分類3":{"商品31":"概要31","商品32":"概要32"},
              "商品分類4":{"商品41":"概要41","商品42":"概要42","商品43":"概要43","商品44":"概要44"},
              "商品分類5":{"商品51":"概要51","商品52":"概要52","商品53":"概要53"}};

window.onload = function() {
    let flag1 = false;
    let flag2 = false;
    let flag3 = false;
    let flag4 = false;
    let flag5 = false;
    let flag6 = false;
    for (let key in mylist) {
        if (key === "商品分類1") flag1 = true;
        if (key === "商品分類2") flag1 = true;
        if (key === "商品分類3") flag1 = true;
        if (key === "商品分類4") flag1 = true;
        if (key === "商品分類5") flag1 = true;
        if (key === "商品分類6") flag1 = true;
    }
    if (flag1 === false) document.getElementsByName("category1").style.visibility = "hidden";
    if (flag2 === false) document.getElementsByName("category2").style.visibility = "hidden";
    if (flag3 === false) document.getElementsByName("category3").style.visibility = "hidden";
    if (flag4 === false) document.getElementsByName("category4").style.visibility = "hidden";
    if (flag5 === false) document.getElementsByName("category5").style.visibility = "hidden";
    if (flag6 === false) document.getElementsByName("category6").style.visibility = "hidden";
};

document.querySelector("html").onclick = function() {
    let myheading = document.querySelector("h1");
    if (myheading.textContent === "HAPPY FACE") {
        myheading.textContent = "STOP CLICK ME!";
    } else {
        myheading.textContent = "HAPPY FACE";
    }
};