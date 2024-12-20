// Select elements
const generateBtn = document.getElementById('generate-btn');
const numberDisplay = document.getElementById('number-display');

const minInput = document.getElementById('min');
const maxInput = document.getElementById('max');
const stepInput = document.getElementById('step');

// Add event listener to the button
generateBtn.addEventListener('click', () => {
    // Get min, max, and step values from inputs
    const min = parseFloat(minInput.value);
    const max = parseFloat(maxInput.value);
    const step = parseFloat(stepInput.value);

    // Validate inputs
    if (isNaN(min) || isNaN(max) || isNaN(step)) {
        alert('Please enter valid numbers for Min, Max, and Step.');
        return;
    }
    if (step <= 0) {
        alert('Step must be a positive number.');
        return;
    }
    if (min > max) {
        alert('Min should be less than or equal to Max.');
        return;
    }

    // Calculate the number of steps within the range
    const range = max - min;
    const numberOfSteps = Math.floor(range / step) + 1;

    if (numberOfSteps <= 0) {
        alert('The range is too small for the given step.');
        return;
    }

    // Generate a random index based on the number of steps
    const randomIndex = Math.floor(Math.random() * numberOfSteps);

    // Calculate the random number
    const randomNumber = min + randomIndex * step;

    // Handle floating point precision
    const precision = step.toString().includes('.') ? step.toString().split('.')[1].length : 0;
    const formattedNumber = randomNumber.toFixed(precision);

    // Display the random number
    numberDisplay.textContent = formattedNumber;

    // Add animation class
    numberDisplay.classList.add('animate');
    // Remove animation class after animation completes
    setTimeout(() => {
        numberDisplay.classList.remove('animate');
    }, 500);
});
