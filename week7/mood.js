//Loren Bracciano 11/18/25

// Mood Changer using event delegation on the document.

const moodDisplay = document.getElementById('moodDisplay'); // Step 1: Select the mood display element from the DOM

// Step 2: Define an object with configurations for each mood
// This object holds the background color, text color, and message for each mood
const moods = {
  happy:     { bg: '#ff9800', text: '#3e2723', message: 'Pumpkin spice everything!' },
  calm:      { bg: '#7bd4c4ff', text: '#3e2723', message: 'Take a deep breath and relax.' },
  excited:   { bg: '#baea49ff', text: '#3e2723', message: 'Get out there and have fun!' },
  chill:     { bg: '#3b63b4ff', text: '#3e2723', message: 'Kick back and take it easy.' },
  mysterious:{ bg: '#ae70cbff', text: '#3e2723', message: 'A good time for a spooky movie.' }
};


document.addEventListener('click', function (event) { // This listens for clicks anywhere on the page and checks if it's a mood button
  
  if (event.target.classList.contains('mood-btn')) { // Check if the clicked element has the class 'mood-btn'

    const mood = event.target.getAttribute('data-mood'); // Get the mood from the button's data-mood attribute
    
    const config = moods[mood]; // Get the configuration for this mood from the moods object

    document.body.style.backgroundColor = config.bg; // Update the background color of the body
    
    document.body.style.color = config.text; // Update the text color of the body
    
    moodDisplay.textContent = config.message; // Update the display message
  }
});

 