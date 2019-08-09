window.onload = function() {
    let mylist = localStorage.getItem("mylist");
    mylist = JSON.parse(mylist);
    let category2 = mylist["商品分類2"];
    let i = 1;
    for (let key in category2) {
        document.getElementById("product2"+i).textContent = key;
        document.getElementById("summary2"+i).textContent = category2[key];
        i++;
    }
};
