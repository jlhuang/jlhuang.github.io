window.onload = function() {
    let mylist = localStorage.getItem("mylist");
    mylist = JSON.parse(mylist);
    let category1 = mylist["商品分類1"];
    let i = 1;
    for (let key in category1) {
        document.getElementById("product1"+i).textContent = key;
        document.getElementById("summary1"+i).textContent = category1[key];
        i++;
    }
};
