let mylist = {"商品分類1":{"商品11":"概要11","商品12":"概要12","商品13":"概要13","商品14":"概要14"},
              "商品分類2":{"商品21":"概要21"},
              "商品分類3":{"商品31":"概要31","商品32":"概要32"},
              "商品分類4":{"商品41":"概要41","商品42":"概要42","商品43":"概要43","商品44":"概要44"},
              "商品分類5":{"商品51":"概要51","商品52":"概要52","商品53":"概要53","商品54":"概要54","商品55":"概要55","商品56":"概要56"}};

$(document).ready(function() {
    //$("button").each(function(){
    //    if($(this).attr("id") !== "button") {
    //        $(this).addClass("class");
    //    }
    //});
    var myDate= new Date(); 
    var startYear=myDate.getFullYear()//起始年份 
    var endYear=myDate.getFullYear()+10;//结束年份 
    var obj=document.getElementById('myYear');
    for (var i=startYear;i<=endYear;i++)
    { 
        obj.options.add(new Option(i,i)); 
    }
    
    var products = {"商品1":{"定期商品代码":"代码1",
                            "商品名":"商品名1",
                            "商品情报":"商品情报1",
                            "金利追加情报":"金利追加情报1",
                            "详情URL":"详情URL1"},
                    "商品2":{"定期商品代码":"代码2",
                            "商品名":"商品名2",
                            "商品情报":"商品情报2",
                            "金利追加情报":"金利追加情报2",
                            "详情URL":"详情URL2"},
                    "商品3":{"定期商品代码":"代码3",
                            "商品名":"商品名3",
                            "商品情报":"商品情报3",
                            "金利追加情报":"金利追加情报3",
                            "详情URL":"详情URL3"},
                    "商品4":{"定期商品代码":"代码4",
                            "商品名":"商品名4",
                            "商品情报":"商品情报4",
                            "金利追加情报":"金利追加情报4",
                            "详情URL":"详情URL4"},
                    "商品5":{"金利优遇商品51":{"定期商品代码":"代码51",
                                            "商品名":"商品名51",
                                            "商品情报":"商品情报51",
                                            "金利追加情报":"金利追加情报51",
                                            "详情URL":"详情URL51"},
                            "金利优遇商品52":{"定期商品代码":"代码52",
                                            "商品名":"商品名52",
                                            "商品情报":"商品情报52",
                                            "金利追加情报":"金利追加情报52",
                                            "详情URL":"详情URL52"},
                            "金利优遇商品53":{"定期商品代码":"代码53",
                                            "商品名":"商品名53",
                                            "商品情报":"商品情报53",
                                            "金利追加情报":"金利追加情报53",
                                            "详情URL":"详情URL53"}},
                    "商品6":{"金利优遇商品61":{"定期商品代码":"代码61",
                                            "商品名":"商品名61",
                                            "商品情报":"商品情报61",
                                            "金利追加情报":"金利追加情报61",
                                            "详情URL":"详情URL61"}},
                    "商品7":{"金利优遇商品71":{"定期商品代码":"代码71",
                                            "商品名":"商品名71",
                                            "商品情报":"商品情报71",
                                            "金利追加情报":"金利追加情报71",
                                            "详情URL":"详情URL71"},
                            "金利优遇商品72":{"定期商品代码":"代码72",
                                            "商品名":"商品名72",
                                            "商品情报":"商品情报72",
                                            "金利追加情报":"金利追加情报72",
                                            "详情URL":"详情URL72"},
                            "金利优遇商品73":{"定期商品代码":"代码73",
                                            "商品名":"商品名73",
                                            "商品情报":"商品情报73",
                                            "金利追加情报":"金利追加情报73",
                                            "详情URL":"详情URL73"},
                            "金利优遇商品74":{"定期商品代码":"代码74",
                                            "商品名":"商品名74",
                                            "商品情报":"商品情报74",
                                            "金利追加情报":"金利追加情报74",
                                            "详情URL":"详情URL74"},
                            "金利优遇商品75":{"定期商品代码":"代码75",
                                            "商品名":"商品名75",
                                            "商品情报":"商品情报75",
                                            "金利追加情报":"金利追加情报75",
                                            "详情URL":"详情URL75"}}};
    var name_code = {};
    name_code[products["商品1"]["商品名"]] = products["商品1"]["定期商品代码"];
    name_code[products["商品2"]["商品名"]] = products["商品2"]["定期商品代码"];
    name_code[products["商品3"]["商品名"]] = products["商品3"]["定期商品代码"];
    name_code[products["商品4"]["商品名"]] = products["商品4"]["定期商品代码"];
    for (var key in products["商品5"]) {
        name_code[products["商品5"][key]["商品名"]] = products["商品5"][key]["定期商品代码"];
    }
    for (var key in products["商品6"]) {
        name_code[products["商品6"][key]["商品名"]] = products["商品6"][key]["定期商品代码"];
    }
    for (var key in products["商品7"]) {
        name_code[products["商品7"][key]["商品名"]] = products["商品7"][key]["定期商品代码"];
    }
    console.log(name_code);
    localStorage.setItem("mylist", JSON.stringify(mylist));
    let flag1 = false;
    let flag2 = false;
    let flag3 = false;
    let flag4 = false;
    let flag5 = false;
    let flag6 = false;
    for (let key in mylist) {
        if (key === "商品分類1") flag1 = true;
        if (key === "商品分類2") flag2 = true;
        if (key === "商品分類3") flag3 = true;
        if (key === "商品分類4") flag4 = true;
        if (key === "商品分類5") flag5 = true;
        if (key === "商品分類6") flag6 = true;
    }
    if (flag1 === false) document.getElementById("category1").style.visibility = "hidden";
    if (flag2 === false) document.getElementById("category2").style.visibility = "hidden";
    if (flag3 === false) document.getElementById("category3").style.visibility = "hidden";
    if (flag4 === false) document.getElementById("category4").style.visibility = "hidden";
    if (flag5 === false) document.getElementById("category5").style.visibility = "hidden";
    if (flag6 === false) document.getElementById("category6").style.visibility = "hidden";

    $("#my_dialog1").dialog({  //创建dialog，并设置为非自启动
        autoOpen: false,
        closeOnEscape: false,
        dialogClass: "no-close",
        title: "商品1",
        modal: true,
        buttons: {
            "确认": function(){
                isBorderColorRed("category1");
                //$("#category1").css("border-color", "red");
                $("#my_dialog1").dialog("close");
            },
            "取消": function(){
                //$("#category1").css("border-color", "");
                if ($("#category1").hasClass("red-button")) {
                    $("#category1").removeClass("red-button");
                }
                if (!$("#category1").hasClass("not-red-button")) {
                    $("#category1").addClass("not-red-button");
                }
                $("#my_dialog1").dialog("close");
            },
        },
    });
    $("#category1").click(function(event) { //通过按钮的点击事件打开dialog
        $("#my_dialog1").dialog("open");
        console.log(event);
    });

    $("#my_dialog2").dialog({  //创建dialog，并设置为非自启动
        autoOpen: false,
        closeOnEscape: false,
        dialogClass: "no-close",
        title: "商品2",
        modal: true,
        buttons: {
            "确认": function(){
                isBorderColorRed("category2");
                //$("#category2").css("border-color", "red");
                $("#my_dialog2").dialog("close");
            },
            "取消": function(){
                //$("#category2").css("border-color", "");
                if ($("#category2").hasClass("red-button")) {
                    $("#category2").removeClass("red-button");
                }
                if (!$("#category2").hasClass("not-red-button")) {
                    $("#category2").addClass("not-red-button");
                }
                $("#my_dialog2").dialog("close");
            },
        },
    });
    $("#category2").click(function() { //通过按钮的点击事件打开dialog
        $("#my_dialog2").dialog("open");
    });

    $("#my_dialog3").dialog({  //创建dialog，并设置为非自启动
        autoOpen: false,
        closeOnEscape: false,
        dialogClass: "no-close",
        title: "商品3",
        modal: true,
        buttons: {
            "确认": function(){
                isBorderColorRed("category3");
                //$("#category3").css("border-color", "red");
                $("#my_dialog3").dialog("close");
            },
            "取消": function(){
                //$("#category3").css("border-color", "");
                if ($("#category3").hasClass("red-button")) {
                    $("#category3").removeClass("red-button");
                }
                if (!$("#category3").hasClass("not-red-button")) {
                    $("#category3").addClass("not-red-button");
                }
                $("#my_dialog3").dialog("close");
            },
        },
    });
    $("#category3").click(function() { //通过按钮的点击事件打开dialog
        $("#my_dialog3").dialog("open");
    });

});

function isBorderColorRed(buttonId) {
    for (var i = 1; i <= 3; i++) {
        var tmp = "category" + i;
        if (tmp !== buttonId) {
            //var tmp_color = $("#"+tmp).css("border-color");
            //if (tmp_color === "rgb(255, 0, 0)") {
            //    alert("商品变更");
            //    $("#"+tmp).css("border-color", "");
            //}
            if ($("#"+tmp).hasClass("red-button")) {
                alert("商品変更");
                $("#"+tmp).removeClass("red-button");
                $("#"+tmp).addClass("not-red-button");
            }
        }
    }
    if (!$("#"+buttonId).hasClass("red-button")) {
        if ($("#"+buttonId).hasClass("not-red-button")) {
            $("#"+buttonId).removeClass("not-red-button");
        }
        $("#"+buttonId).addClass("red-button");
    }
};

// no need to see, just for fan 
document.querySelector("html").onclick = function() {
    console.log(document.getElementById("my_p").innerHTML);
    let myheading = document.querySelector("h1");
    if (myheading.textContent === "HAPPY FACE") {
        myheading.textContent = "STOP CLICK ME";
    } else {
        myheading.textContent = "HAPPY FACE";
    }
};
