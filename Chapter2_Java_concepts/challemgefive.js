var globalUserCount = 0;

const roles = ["admin", "editor", "viewer", "tester", "manager"];
const emailDomain = "@testingacademy.com";

const TOTAL_USERS = 8;

for (let i = 1; i <= TOTAL_USERS; i++) {

    globalUserCount++;

    let userId = "USR-" + String(i).padStart(4, "0");

    let name = "TestUser_" + i;

    let email = "testuser" + i + emailDomain;

    let role = roles[(i - 1) % roles.length];

    let status = (i % 3 === 0) ? "INACTIVE" : "ACTIVE";

    console.log(
        userId + " | " +
        name + " | " +
        email + " | " +
        role + " | " +
        status
    );
}