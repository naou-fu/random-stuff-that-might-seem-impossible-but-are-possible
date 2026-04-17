//checking user data


let userData = null;

fetch('../data.json')
    .then(response => response.json())
    .then(data => {
        // Store the ORIGINAL user array, not mapped parts
        userData = data.users;
        console.log('Data loaded:', userData);
    })
    .catch(error => console.error('Error loading data:', error));

const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('btn-submit');

submitButton.addEventListener('click', () => {
    // Guard clause: Don't run if data isn't loaded yet
    if (!userData) {
        alert('Data still loading. Please wait.');
        return;
    }
    
    const enteredUsername = usernameInput.value.trim();
    const enteredPassword = passwordInput.value.trim();
    
    // Search through the user ARRAY for a match
    const matchedUser = userData.find(user => 
        user.username === enteredUsername && user.password === enteredPassword
    );
    
    if (matchedUser) {
        alert(`Login successful! Welcome, ${matchedUser.username}.`);
    } else {
        alert('Invalid username or password.');
    }
});


let yo = "wassup boy"

console.log(yo.trim())