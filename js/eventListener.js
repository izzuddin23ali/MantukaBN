let signedIn = false;

function openForm(){
    document.getElementById("signInForm").style.display = "block";
}

function closeForm(){
    document.getElementById("signInForm").style.display = "none";
}

//back to top function

let topButton = document.getElementById("backToTop");

window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        topButton.style.display = "block";
    }
    else{
        topButton.style.display = "none";
    }
}

function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//index nav

let indexNav = document.getElementById("indexNav");

window.onscroll = function() {indexNavScrollFunction()};

function indexNavScrollFunction(){
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        indexNav.style.background = "#363538";
    }
    else{
        indexNav.style.background = "none";
    }
}

//loader

let loader = document.querySelector(".loader");

window.addEventListener("load", function(){
    loader.classList.add("hidden");
})

//design sorter

/*

var brandSort = document.getElementById("sort");

let sortAlphabetically = document.getElementById("sortedAlphabetically");
let sortedByRegion = document.getElementById("sortedByRegion");

brandSort.addEventListener("change", function(){
    if(this.value === "alphabetical"){
        sortAlphabetically.classList.remove("hidden");
        sortedByRegion.classList.add("hidden");
    }
    else if(this.value === "region"){
        sortAlphabetically.classList.add("hidden");
        sortedByRegion.classList.remove("hidden");
    }
})

*/