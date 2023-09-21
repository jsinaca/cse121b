/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Josue Sinaca Gomez";
let currentYear = "2023";
let profilePicture = "images/profile.JPG";

/* Step 3 - Element Variables */
let nameElement = document.getElementById("name");
let foodElement = document.getElementById("food");
let yearElement = document.querySelector("#year");
let imageElement = document.querySelector("img");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);



/* Step 5 - Array */
let favoriteFood = ["Asadito", "Torta de Pina", "Tacos de asada", "Tacos al pastor", "Tacos de ojo", "Tacos de tripa", "Arros chaufa", "Fried fish", "Suchi", "Steak", "Enchiladas", "Rotisserie chicken", "Paella", "Saltenas", "Charque"];
foodElement.innerHTML = favoriteFood;
let singleFood = "Tacos de suadero";
favoriteFood.push(singleFood);
foodElement.innerHTML += `<br>${favoriteFood}`;
favoriteFood.shift();
foodElement.innerHTML += `<br>${favoriteFood}`;
favoriteFood.pop();
foodElement.innerHTML += `<br>${favoriteFood}`;
