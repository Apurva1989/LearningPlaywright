let isPresent = true;
let isDisplayed = true;
let isEnabled = false;

let status;
let action;

if (isPresent === true && isDisplayed === true && isEnabled === true) {
    status = "READY";
    action = "Element is ready for interaction.";
} 
else if (isPresent === true && isDisplayed === true && isEnabled === false) {
    status = "DISABLED";
    action = "Element is visible but disabled. Wait for enable state or check preconditions.";
} 
else if (isPresent === true && isDisplayed === false) {
    status = "HIDDEN";
    action = "Element is hidden. Wait until it becomes visible.";
} 
else if (isPresent === false) {
    status = "NOT FOUND";
    action = "Element not found. Verify locator or page load.";
}

let severity = (isPresent === false)
    ? "CRITICAL"
    : (isDisplayed === false || isEnabled === false)
        ? "WARNING"
        : "OK";

console.log("Status:", status);
console.log("Severity:", severity);
console.log("Action:", action);
