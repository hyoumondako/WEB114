//Loads image based on dropdown selection in canvas element. While text is entered, formatted text will appear in the canvas element over the image.

const themeSelect = document.getElementById('themeSelect');
const canvas = document.getElementById('meme'); 
const ctx = canvas.getContext('2d');
const topTextInput = document.getElementById('topTextInput');
const bottomTextInput = document.getElementById('bottomTextInput');
const resetButton = document.querySelector('input[type="reset"]');

//Create empty image object to load image to
let currentImage = new Image();

//Set canvas size
canvas.width = 500;
canvas.height = 500;

//Listen for selection change and execute loadImage function
themeSelect.addEventListener('change', () => {
       loadImage(themeSelect.value);
});

//Listen for top textbox change, change as text is entered
topTextInput.addEventListener("input" , () => {
    drawMeme(canvas, currentImage, topTextInput.value, bottomTextInput.value);
});

//Listen for bottom textbox change, change as text is entered
bottomTextInput.addEventListener("input" , () => {
    drawMeme(canvas, currentImage, topTextInput.value, bottomTextInput.value);
});

//loadImage function: selecting and loading image 
function loadImage(theme) {
    console.log(`Theme selected: ${theme}`);
    //Handling random selection
    if (theme === 'random') {
        const themes = ['happy', 'tired', 'hungry', 'sad', 'angry'];
        theme = themes[Math.floor(Math.random() * themes.length)];

        //Update dropdown selection to show chosen random theme
        themeSelect.value = theme;
    }
    
    //Load the image to canvas
    currentImage.src = `images/${theme}.jpg`;

    //When image loads, excute drawMeme function
    currentImage.onload = () => {
        drawMeme();
    };
    
    //Handle image errors in console
    currentImage.onerror = () => {
        console.log(`Failed to load images/${theme}.jpg`);
    };
}

//drawMeme function: create meme on canvas element
function drawMeme() {
    //Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //Draw the image to the canvas
    ctx.drawImage(currentImage, 0, 0, canvas.width, canvas.height);

    //Set font sizing and offset
    const fontSize = Math.floor(canvas.width / 15);
    const yOffset = canvas.height / 25;
    
    //Set font styling 
    ctx.strokeStyle = "black";
    ctx.lineWidth = Math.floor(fontSize / 4);
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.lineJoin = "round";
    ctx.font = `${fontSize}px Impact, sans-serif`;

    //Add top text
    ctx.textBaseline = "top";
    ctx.strokeText(topTextInput.value, canvas.width / 2, yOffset);
    ctx.fillText(topTextInput.value, canvas.width / 2, yOffset);

    //Add bottom text
    ctx.textBaseline = "bottom";
    ctx.strokeText(bottomTextInput.value, canvas.width / 2, canvas.height - yOffset);
    ctx.fillText(bottomTextInput.value, canvas.width / 2, canvas.height - yOffset);
    
    //Log message
    console.log('Image drawn on canvas');
}

//Start Over button
resetButton.addEventListener('click', () =>  {
    // Reset to default theme
    themeSelect.value = 'happy';
    
    // Clear text inputs
    topTextInput.value = '';
    bottomTextInput.value = '';
    
    // Reload the default image
    loadImage('happy');
    
    //Log message
    console.log('Reset to default settings');
});

//Browser Refresh 
window.addEventListener('load', () => {
    themeSelect.value = 'happy'; 
    topTextInput.value = '';
    bottomTextInput.value = '';
    loadImage('happy');

    //Log message
    console.log('Reset to default settings');
});