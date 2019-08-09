window.onload = function() {
    let mylist = localStorage.getItem("mylist");
    mylist = JSON.parse(mylist);
    let category4 = mylist["商品分類4"];
    let i = 1;
    for (let key in category4) {
        document.getElementById("product4"+i).textContent = key;
        document.getElementById("summary4"+i).textContent = category4[key];
        i++;
    }
};
