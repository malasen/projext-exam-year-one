const postsUrl = "https://muel.no/productapi/wp-json/wp/v2/posts?_embed&per_page=9";
const postsUrlMore = "https://muel.no/productapi/wp-json/wp/v2/posts?_embed&per_page=100&offset=9";

const postsContainer = document.querySelector(".blogcontainer");
const loadMorePosts = document.querySelector(".load-more");



const loader = document.querySelector(".loader");

async function getPost(postsUrl){
    try {
        const response = await fetch(postsUrl);
        const results = await response.json();
        console.log(results);

        for(let i= 0; i < results.length; i++){  
            loader.classList.remove("loader");
            postsContainer.innerHTML += `<div class="card" >
                                         <a href="blogpost.html?id=${results[i].id}">
                                         <div class="featuredAuthor">By: ${results[i]._embedded.author[0].name}</div>
                                         <div class="featuredDate"><time>${results[i].date.split("T")} </time></div>
                                         <div class="featuredTags"></div>
                                         <div class="featuredTitle"> <h2>${results[i].title.rendered} </h2></div>
                                         <div class="featuredContent">${results[i].excerpt.rendered}</div>
                                         <div class="featuredImg" style="background-image:url('${results[i]._embedded["wp:featuredmedia"][0].source_url}')">
                                         </div>
                                         <button class="call-to">Continue Reading</button>
                                         </a></div>
                                         ` 
            }    
    } catch(error) {
        console.log (error);
    }
}

loadMorePosts.addEventListener("click", function(){
    getPost(postsUrlMore);
    loadMorePosts.innerHTML = "No more posts to show";
});

getPost(postsUrl);