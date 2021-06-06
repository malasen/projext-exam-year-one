const slider = document.querySelector(".slider");
const leftButton = document.querySelector(".left");
const rigthButton = document.querySelector(".right");
const indicatorParents = document.querySelector(".indicator");

let index = 0;



document.querySelectorAll(".indicator li").forEach(function(indicator, ind){
    indicator.addEventListener("click", function() {
        index = ind;
        document.querySelector(".indicator .selected").classList.remove("selected");
        indicator.classList.add("selected");
        slider.style.transform = 'translate(' + (ind) * -25 + '%)';
    });
});

rigthButton.addEventListener("click", function() {
    index = (index < 3) ? index +1 : 3;
    document.querySelector(".indicator .selected").classList.remove("selected");
    indicatorParents.children[index].classList.add("selected");
    slider.style.transform = 'translate(' + (index) * -25 + '%)';
})
leftButton.addEventListener("click", function() {
    index = (index > 0) ? index -1 : 0;
    document.querySelector(".indicator .selected").classList.remove("selected");
    indicatorParents.children[index].classList.add("selected");
    slider.style.transform = 'translate(' + (index) * -25 + '%)';
})

const url = "https://muel.no/productapi/wp-json/wp/v2/posts?_embed";
const sliderOne = document.querySelector(".slider1")
const sliderTwo = document.querySelector(".slider2")
const sliderThree = document.querySelector(".slider3")
const sliderFour = document.querySelector(".slider4")



async function getPost(){
    try {
        const response = await fetch(url);
        const results = await response.json();
        console.log(results);
        
        getContent(results, sliderOne, 0);
        getContent(results, sliderTwo, 1);
        getContent(results, sliderThree, 2);
        getContent(results, sliderFour, 3);

           
    } catch(error){
        console.log (error);
    }
}

function getContent(results, sliderNumber, number){
    sliderNumber.innerHTML=`<a href="html/blogpost.html?id=${results[number].id}">
                            <div class="slidercontent">
                             <h2>${results[number].title.rendered} </h2>
                            ${results[number].excerpt.rendered}
                            </div></a>`
    sliderNumber.style.backgroundImage=`url(${results[number]._embedded["wp:featuredmedia"][0].source_url})`;
    sliderNumber.style.backgroundSize="cover";
}

getPost();

