import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';

console.log('Hello Coders! :)');

fetch('../data/DATA.json')
  .then(response => response.json())
  .then(data => {
    const restaurants = data.restaurants;

    const container = document.getElementById('data-container');

    restaurants.forEach(restaurant => {
      const { city, name, rating, description, pictureId } = restaurant;

      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <h3>${city}</h3>
        <img src="${pictureId}" alt="${name}">
        <span><p>Rating ${rating}</p></span>
        <h2>${name}</h2>
        <p>${description}</p>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });

  window.addEventListener("scroll", function() {
    var navBar = document.querySelector(".navBar");
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  
    if (scrollPosition > 0) {
      navBar.classList.add("bgActive");
    } else {
      navBar.classList.remove("bgActive");
    }
  });