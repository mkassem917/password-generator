// variables

var lowerCased = "abcdefghijklmnopqrstuvwxyz";
var upperCased = "ABCDEFGHIJKLMNOPQRSTUZWXYZ";
var numerical = "1234567890";
var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

var passwrd = '';
var lowerCasedLetters = false;
var upperCasedLetters = false;
var numericChar = false;
var specialChar = false;

// Function to prompt user for password option they want

function passwordOptionPrompts() {
    var length = '';

    while (isNaN(length) || length < 8 || length > 128) {
        length = prompt('How many characters would you like your password to be? (Min of 8 and Max 128 characters)');
        if (length === null) {
            break;
        }
    }
    if (length) {

        if (confirm('Would you like to use lowercase letters?') == true) {
            lowerCasedLetters = true
        }

        if (confirm('Would you like to use uppercase letters?') == true) {
            upperCasedLetters = true
        }

        if (confirm('Would you like to use numerical characters?') == true) {
            numericChar = true
        }

        if (confirm('Would you like to use special characters?') == true) {
            specialChar = true
        }

        if (lowerCasedLetters === false && upperCasedLetters === false && numericChar === false && specialChar === false) {
            alert('At least one character type must be selected')
        }

    }

    // Random password 

    var randomNumChar = "";
    randomNumChar += (lowerCasedLetters ? lowerCased : '');
    randomNumChar += (upperCasedLetters ? upperCased : '');
    randomNumChar += (numericChar ? numerical : '');
    randomNumChar += (specialChar ? special : '');

    passwrd = password(length, randomNumChar);

    document.getElementById('password').innerHTML = passwrd;

}

function password(pwd, randomNumChar) {
    var passwrd = '';
    for (var i = 0; i < pwd; ++i) {
        passwrd += randomNumChar.charAt(Math.floor(Math.random() * randomNumChar.length));
    }
    return passwrd;
}



/*
keeping this code for future reference 

var length = parseInt(
        length = prompt('How many characters would you like your password to be?')
    );
    // If statement to check if the input is a number.
    if (isNaN(length) === true) {
        alert('Please enter a number.');
        return;
    }

    if (length < 8) {
        alert('Password should be a minimum of 8 characters.');
        return;
    }

    if (length > 128) {
        alert('Password should be less than 129 characters.');
        return;
    }

    var specialCharChoice = confirm(
        'Click OK to confirm including special characters.'
    );
}

*/