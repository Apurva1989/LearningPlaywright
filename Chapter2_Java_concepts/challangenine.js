const VALID_EMAIL = "admin@testingacademy.com";
const VALID_PASSWORD = "Test@1234";
const MAX_ATTEMPTS = 3;

let attempts = ["wrong", "wrong", "wrong", "correct"];

var strikeCount = 0;

let index = 0;
let isLocked = false;

do {

    let currentAttempt = attempts[index];
    let email = VALID_EMAIL; 
    let password = (currentAttempt === "correct") ? "Test@1234" : "WrongPass";

    if (isLocked === true) {
        console.log(`Attempt ${index + 1}: ACCOUNT LOCKED - Rejected`);
    } 
    else if (email === VALID_EMAIL && password === VALID_PASSWORD) {
        console.log(`Attempt ${index + 1}: SUCCESS - Logged in`);
        strikeCount = 0; 
    } 
    else {
        strikeCount++;
        console.log(`Attempt ${index + 1}: FAILED - Strike ${strikeCount}/${MAX_ATTEMPTS}`);

        if (strikeCount === MAX_ATTEMPTS) {
            isLocked = true;
            console.log("ACCOUNT LOCKED");
        }
    }

    index++;

} while (index < attempts.length);