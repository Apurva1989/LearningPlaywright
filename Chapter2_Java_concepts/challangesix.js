let bugTitle = "Checkout page crashes on applying coupon";
let frequency = "always";
let impact = "blocker";

let severity;

if (frequency === "always") {

    if (impact === "blocker") {
        severity = "P0 - Critical: Stop release immediately";
    } else if (impact === "major") {
        severity = "P1 - High: Fix before release";
    } else if (impact === "minor") {
        severity = "P2 - Medium: Monitor closely";
    }

} else if (frequency === "often") {

    if (impact === "blocker") {
        severity = "P1 - High: Fix before release";
    } else if (impact === "major") {
        severity = "P2 - Medium: Schedule fix soon";
    } else if (impact === "minor") {
        severity = "P3 - Low: Fix in upcoming sprint";
    }

} else if (frequency === "rarely") {

    if (impact === "blocker") {
        severity = "P2 - Medium: Needs attention";
    } else if (impact === "major") {
        severity = "P3 - Low: Fix when possible";
    } else if (impact === "minor") {
        severity = "P4 - Very Low: Cosmetic issue";
    }

} else {
    severity = "Invalid classification";
}

console.log("Bug Title:", bugTitle);
console.log("Frequency:", frequency);
console.log("Impact:", impact);
console.log("Severity:", severity);