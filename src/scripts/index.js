import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';

console.log('Hello Coders! :)');

fetch('../../src/public/data/DATA.json')
  .then(response => response.json())
  .then(data => {
    const cityElement = document.getElementById('city');
    const pictureIdElement = document.getElementById('pictureId');
    const ratingElement = document.getElementById('rating');
    const nameElement = document.getElementById('name');
    const descriptionElement = document.getElementById('description');

    const restaurant = data.restaurants[0]; 
    
    cityElement.textContent = restaurant.city;
    pictureIdElement.src = restaurant.pictureId;
    ratingElement.textContent = restaurant.rating;
    nameElement.textContent = restaurant.name;
    descriptionElement.textContent = restaurant.description;
  })
  .catch(error => {
    console.log('Error:', error);
  });