// Select elements
const text = document.querySelector('.text');
const btn = document.getElementById('btn');
const container = document.getElementById('container');

// Change text color on click
text.addEventListener('click', () => {
  text.style.color = 'red';
});

// Add new paragraph on button click
btn.addEventListener('click', () => {
  const newParagraph = document.createElement('p');
  newParagraph.textContent = 'New dynamically added paragraph!';
  container.appendChild(newParagraph);
});
