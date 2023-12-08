// Add an event listener to the button
const bunnyImage = document.querySelector('img');
const hideButton = document.querySelector('button');

// Add an event listener to the button that hides the bunny image
hideButton.addEventListener('click', () => {
  bunnyImage.classList.add('hidden');
});
