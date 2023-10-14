/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = async (temples) => {
    await temples.forEach(element => {
        let article = document.createElement("article");
        let title = document.createElement("h3");
        title.appendChild(document.createTextNode(element.templeName));
        let image = document.createElement("img");
        image.src = element.imageUrl;
        image.alt = element.location;
        article.appendChild(title);
        article.appendChild(image);
        templesElement.appendChild(article);
    });
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList = await response.json();
    console.log(templeList);
    displayTemples(templeList);
}

/* reset Function */
const reset = () => {
    while (templesElement.firstChild) {
        templesElement.removeChild(templesElement.firstChild);
    }
    
} 

/* sortBy Function */
const sortBy = (temples) => {
    reset();
    let filter = document.querySelector("#sortBy").value;
    switch (filter) {
        case "utah":
            let selection = temples.filter((element) => element.location.includes("Utah"));
            displayTemples(selection);
            break;
        case "notutah":
            displayTemples(temples.filter((element) => !element.location.includes("Utah")));
            break;
        case "older":
            displayTemples(temples.filter((element) => new Date(element.dedicated) <=  new Date(1950, 0, 1)));
            break;
        case "all": 
            displayTemples(temples);
            break;
    }
}

getTemples();


/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {sortBy(templeList)});