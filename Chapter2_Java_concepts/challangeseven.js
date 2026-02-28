let responseTimes = [120, 230, 450, 510, 180, 620];
const SLA_LIMIT = 500;

let index = 0;
let min = responseTimes[0];
let max = responseTimes[0];
let breachCount = 0;

while (index < responseTimes.length) {

    let current = responseTimes[index];

    if (current < min) {
        min = current;
    }

    if (current > max) {
        max = current;
    }

    if (current > SLA_LIMIT) {
        breachCount++;
    }

    index++;
}

let totalRequests = responseTimes.length;
let breachPercentage = ((breachCount / totalRequests) * 100).toFixed(2);

let overallStatus = (breachCount > 0)
    ? "SLA VIOLATED"
    : "SLA MET";

console.log("Total Requests:", totalRequests);
console.log("Min Response:", min + "ms");
console.log("Max Response:", max + "ms");
console.log("SLA Breaches:", breachCount + " (" + breachPercentage + "%)");
console.log("Overall Status:", overallStatus);