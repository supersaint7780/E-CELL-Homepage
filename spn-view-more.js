const viewMoreButton = document.querySelector('#spn-view-more');
const allSponsors = document.querySelector('#sponsorIcons');

let isOpen = false

viewMoreButton.addEventListener("click", ()=> {
    if(isOpen){
        allSponsors.style.height = "574px"
        viewMoreButton.innerHTML = "View More"
        isOpen = false
    } 
    else {
        allSponsors.style.height = "auto"
        viewMoreButton.innerHTML = "View Less"
        isOpen = true
    }
})
