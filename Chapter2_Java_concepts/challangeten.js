var passCount = 0;
var failCount = 0;
var errorCount = 0;

const testCases = [
    { name: "Status code is 200", actual: 200, expected: 200, type: "strictEqual" },
    { name: "String loose match", actual: "10", expected: 10, type: "looseEqual" },
    { name: "Check boolean type", actual: true, expected: "boolean", type: "typeCheck" },
    { name: "Truthy validation", actual: "QA", expected: null, type: "truthy" },
    { name: "Response time < 500", actual: 650, expected: 500, type: "lessThan" }
];

let results = [];

for (let i = 0; i < testCases.length; i++) {

    const tc = testCases[i];
    let result = false;
    let message = "";
    let actualValue = tc.actual ?? "undefined";

    try {

        switch (tc.type) {

            case "strictEqual":
                result = (tc.actual === tc.expected);
                message = `${tc.actual} === ${tc.expected}`;
                break;

            case "looseEqual":
                result = (tc.actual == tc.expected);
                message = `${tc.actual} == ${tc.expected}`;
                break;

            case "typeCheck":
                result = (typeof tc.actual === tc.expected);
                message = `typeof ${tc.actual} === ${tc.expected}`;
                break;

            case "truthy":
                result = !!tc.actual;
                message = `truthy(${tc.actual})`;
                break;

            case "lessThan":
                result = (tc.actual < tc.expected);
                message = `${tc.actual} < ${tc.expected}`;
                break;

            default:
                throw new Error("Invalid comparison type");
        }

        if (result === true) {
            passCount++;
            results.push(true);
            console.log(`TC-0${i+1}: ${tc.name} → PASS (${message})`);
        } else {
            failCount++;
            results.push(false);
            console.log(`TC-0${i+1}: ${tc.name} → FAIL (${message})`);
        }

    } catch (err) {
        errorCount++;
        results.push(false);
        console.log(`TC-0${i+1}: ERROR - ${err.message}`);
    }
}

let consecutivePass = 0;
let idx = 0;

while (idx < results.length && results[idx] === true) {
    consecutivePass++;
    idx++;
}

let firstFailIndex = -1;
let j = 0;

do {
    if (results[j] === false) {
        firstFailIndex = j;
        break;
    }
    j++;
} while (j < results.length);

let total = testCases.length;
let passRate = ((passCount / total) * 100).toFixed(2);
let overallStatus = (failCount === 0 && errorCount === 0)
    ? "PASSED"
    : "FAILED";

console.log("\n===== TEST SUMMARY =====");
console.log("Total:", total);
console.log("Passed:", passCount);
console.log("Failed:", failCount);
console.log("Errors:", errorCount);
console.log("Consecutive Passes (from start):", consecutivePass);
console.log("First Failure Index:", firstFailIndex !== -1 ? firstFailIndex + 1 : "None");
console.log("Pass Rate:", passRate + "%");
console.log("Overall:", overallStatus);