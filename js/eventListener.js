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