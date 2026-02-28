let testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"];

let passCount = 0;
let failCount = 0;
let skipCount = 0;

for (let i = 0; i < testResults.length; i++) {
    if (testResults[i] === "pass") {
        passCount++;
    } else if (testResults[i] === "fail") {
        failCount++;
    } else if (testResults[i] === "skip") {
        skipCount++;
    }
}

let totalTests = testResults.length;
let passRate = ((passCount / totalTests) * 100).toFixed(2);

let verdict;

if (failCount === 0) {
    verdict = "All tests passed. Ready for release.";
} else if (failCount <= 2) {
    verdict = "Minor failures. Review before release.";
} else {
    verdict = "Multiple failures. Block release.";
}


console.log("Total Tests :", totalTests);
console.log("Passed:", passCount);
console.log("Failed:", failCount);
console.log("Skipped:", skipCount);
console.log("Pass Rate:", passRate + "%");
console.log("VERDICT:", verdict);