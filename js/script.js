const header = document.querySelector("nav");

window.onscroll = function (){
    stickyHeader();
}

function stickyHeader() {
    if(window.pageYOffset > 280){
        header.classList.add("sticky");
    }else {
        header.classList.remove("sticky");
    }
}