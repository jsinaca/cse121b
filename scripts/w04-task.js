/* LESSON 3 - Programming Tasks */

/* Profile Object  */
// let name = 
let myProfile = {
    name: "Josue Sinaca",
    photo: "images/profile.JPG",
    favoriteFoods: ["Tacos", "Sushi", "Pollo a la brasa", "Charque", "Tortas"],
    hobbies: ["Video Games", "Coding", "Puzzles", "Exercise"],
    placesLived: [],
    };
    
/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({
    place: "Mexico",
    length: "18 Years"
});
myProfile.placesLived.push({
    place: "Paraguay",
    length: "2 Years"
});
myProfile.placesLived.push({
    place: "USA",
    length: "10 Years"
});
    
/* DOM Manipulation - Output */

/* Name */
let prof = document.querySelector("#name");
prof.textContent = myProfile.name;
prof.alt = myProfile.name;

/* Photo with attributes */
document.querySelector("#photo").src = myProfile.photo;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(element => {
    let temp = document.createElement("li");
    temp.textContent = element;
    document.querySelector("#favorite-foods").appendChild(temp);
});

/* Hobbies List */
myProfile.hobbies.forEach(element => {
    let temp = document.createElement("li");
    temp.textContent = element;
    document.querySelector("#hobbies").appendChild(temp);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(element => {
    let tempPlace = document.createElement("dt");
    tempPlace.innerHTML = `<strong>${element.place}`;
    let tempLenght = document.createElement("dd");
    tempLenght.textContent = element.length;

    document.querySelector("#places-lived").appendChild(tempPlace);
    document.querySelector("#places-lived").appendChild(tempLenght);
});


