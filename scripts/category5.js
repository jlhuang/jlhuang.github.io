window.onload = function() {
    let mylist = localStorage.getItem("mylist");
    mylist = JSON.parse(mylist);
    let category5 = mylist["商品分類5"];
    let i = 1;
    for (let key in category5) {
        document.getElementById("product5"+i).textContent = key;
        document.getElementById("summary5"+i).textContent = category5[key];
        i++;
    }
};
