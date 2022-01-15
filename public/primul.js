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
    x[0].style.display = "block";
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
    x[2].style.display = "block";
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
    x[5].style.display = "block";
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
    x[8].style.display = "block";
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
    x[11].style.display = "block";
    for (i = 0; i < y.length; i++) {
        y[i].style.border = "none";
    }
    y[4].style.border = "3px solid red";
}

function myFunction1() {
    var x = document.getElementsByClassName("content");
    var i;
    var z;
    for (i = 0; i < x.length; i++) {
        if (x[i].style.display === "block") {
            z = i + 1;
            x[i].style.display = "none";
        }
    }
    x[z].style.display = "block";
}

function myFunction2() {
    var x = document.getElementsByClassName("content");
    var i;
    var z;
    for (i = 0; i < x.length; i++) {
        if (x[i].style.display === "block") {
            z = i - 1;
            x[i].style.display = "none";
        }
    }
    x[z].style.display = "block";
}

function myFunction3() {
    document.getElementById("maslow").style.display = "grid";
    document.getElementById("virginia").style.display = "none";
}

function myFunction4() {
    document.getElementById("maslow").style.display = "none";
    document.getElementById("virginia").style.display = "grid";
}