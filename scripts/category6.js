window.onload = function() {
    let mylist = localStorage.getItem("mylist");
    mylist = JSON.parse(mylist);
    let category6 = mylist["商品分類6"];
    let i = 1;
    for (let key in category6) {
        document.getElementById("product6"+i).textContent = key;
        document.getElementById("summary6"+i).textContent = category6[key];
        i++;
    }
};
