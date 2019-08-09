window.onload = function() {
    let mylist = localStorage.getItem("mylist");
    mylist = JSON.parse(mylist);
    let category3 = mylist["商品分類3"];
    let i = 1;
    for (let key in category3) {
        document.getElementById("product3"+i).textContent = key;
        document.getElementById("summary3"+i).textContent = category3[key];
        i++;
    }
};
