function myFunction() {
    var x = document.getElementById("mobile-menu");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function menu1() {
    var x = document.getElementsByClassName("content");
    var y = document.getElementsByClassName("menu-button");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById("content-culegere1").style.display = "block";
    for (i = 0; i < y.length; i++) {
        y[i].style.border = "none";
    }
    y[0].style.border = "3px solid red";
}

function menu2() {
    var x = document.getElementsByClassName("content");
    var y = document.getElementsByClassName("menu-button");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById("content-analiza1").style.display = "block";
    for (i = 0; i < y.length; i++) {
        y[i].style.border = "none";
    }
    y[1].style.border = "3px solid red";
}

function menu3() {
    var x = document.getElementsByClassName("content");
    var y = document.getElementsByClassName("menu-button");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById("content-planificare1").style.display = "block";
    for (i = 0; i < y.length; i++) {
        y[i].style.border = "none";
    }
    y[2].style.border = "3px solid red";
}

function menu4() {
    var x = document.getElementsByClassName("content");
    var y = document.getElementsByClassName("menu-button");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById("content-realizare1").style.display = "block";
    for (i = 0; i < y.length; i++) {
        y[i].style.border = "none";
    }
    y[3].style.border = "3px solid red";
}

function menu5() {
    var x = document.getElementsByClassName("content");
    var y = document.getElementsByClassName("menu-button");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById("content-evaluare1").style.display = "block";
    for (i = 0; i < y.length; i++) {
        y[i].style.border = "none";
    }
    y[4].style.border = "3px solid red";
}

function myFunction1() {
    document.getElementById("content-culegere1").style.display = "none";
    document.getElementById("content-culegere2").style.display = "block";
}

function myFunction2() {
    document.getElementById("content-culegere2").style.display = "none";
    document.getElementById("content-culegere1").style.display = "block";
}

function myFunction3() {
    document.getElementById("content-analiza1").style.display = "none";
    document.getElementById("content-analiza2").style.display = "block";
}

function myFunction4() {
    document.getElementById("content-analiza2").style.display = "none";
    document.getElementById("content-analiza3").style.display = "block";
}

function myFunction5() {
    document.getElementById("content-analiza2").style.display = "none";
    document.getElementById("content-analiza1").style.display = "block";
}

function myFunction6() {
    document.getElementById("content-analiza3").style.display = "none";
    document.getElementById("content-analiza2").style.display = "block";
}

function myFunction7() {
    document.getElementById("content-planificare1").style.display = "none";
    document.getElementById("content-planificare2").style.display = "block";
}

function myFunction8() {
    document.getElementById("content-planificare2").style.display = "none";
    document.getElementById("content-planificare3").style.display = "block";
}

function myFunction9() {
    document.getElementById("content-planificare2").style.display = "none";
    document.getElementById("content-planificare1").style.display = "block";
}

function myFunction10() {
    document.getElementById("content-planificare3").style.display = "none";
    document.getElementById("content-planificare2").style.display = "block";
}

function myFunction11() {
    document.getElementById("content-realizare1").style.display = "none";
    document.getElementById("content-realizare2").style.display = "block";
}

function myFunction12() {
    document.getElementById("content-realizare2").style.display = "none";
    document.getElementById("content-realizare3").style.display = "block";
}

function myFunction13() {
    document.getElementById("content-realizare2").style.display = "none";
    document.getElementById("content-realizare1").style.display = "block";
}

function myFunction14() {
    document.getElementById("content-realizare3").style.display = "none";
    document.getElementById("content-realizare2").style.display = "block";
}

function myFunction15() {
    document.getElementById("content-evaluare1").style.display = "none";
    document.getElementById("content-evaluare2").style.display = "block";
}

function myFunction16() {
    document.getElementById("content-evaluare2").style.display = "none";
    document.getElementById("content-evaluare1").style.display = "block";
}