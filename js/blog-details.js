const querystring = document.location.search;
const params = new URLSearchParams(querystring);
const id = params.get("id");
const titleUpdate = document.querySelector("title");

const postsUrl = "https://muel.no/productapi/wp-json/wp/v2/posts/" +id + "?_embed";
const postsContainer = document.querySelector(".postcontainer");
const loader = document.querySelector(".loader");

const modalImg = document.querySelector(".modal-image");
const modal = document.querySelector(".modal");

const backButtons = document.querySelector(".backbuttons");

window.onscroll = function (){
    stickyButtons();
}

function stickyButtons() {
    if(window.pageYOffset > 180){
        console.log(backButtons);
    }
}


async function getPost(){
    try {
        const response = await fetch(postsUrl);
        const results = await response.json();
        console.log(results);

        loader.style.display="none";
        postsContainer.innerHTML +=" <h1>"+ results.title.rendered + " </h1>"+ results.content.rendered;
        titleUpdate.innerHTML = "Blog | " + results.title.rendered;

        const img = document.querySelector(".postcontainer img");
        const span = document.querySelector(".close");
        
        

        img.onclick = function() {
            processedSrc = "https" + img.src.slice(4)
            modal.style.display = "block";
            modalImg.src = processedSrc; 
            modalImg.alt = results._embedded["wp:featuredmedia"][0].alt_text; 
        }
        span.onclick = function() {
            modal.style.display = "none";
        }
        modal.onclick = function() {
            modal.style.display = "none";
        }
    } catch(error) {
        console.log (error);
    }
}    

getPost();


