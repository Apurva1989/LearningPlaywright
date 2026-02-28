let envName = "staging";

const DEV_CONFIG = {
    baseUrl: "https://dev-api.testingacademy.com",
    apiKeyPrefix: "dev_key_",
    timeout: 5000,
    description: "Development - Internal testing"
};

const STAGING_CONFIG = {
    baseUrl: "https://staging-api.testingacademy.com",
    apiKeyPrefix: "stg_key_",
    timeout: 8000,
    description: "Staging - Pre-production mirror"
};

const QA_CONFIG = {
    baseUrl: "https://qa-api.testingacademy.com",
    apiKeyPrefix: "qa_key_",
    timeout: 7000,
    description: "QA - Functional testing environment"
};

const PROD_CONFIG = {
    baseUrl: "https://api.testingacademy.com",
    apiKeyPrefix: "prod_key_",
    timeout: 10000,
    description: "Production - Live environment"
};

let config;

switch (envName.toLowerCase()) {

    case "dev":
        config = DEV_CONFIG;
        break;

    case "staging":
        config = STAGING_CONFIG;
        break;

    case "qa":
        config = QA_CONFIG;
        break;

    case "production":
    case "prod":
        config = PROD_CONFIG;
        break;

    default:
        console.log("Invalid environment selected.");
}

if (config) {
    let apiKeyPattern = config.apiKeyPrefix + "xxxx-xxxx";

    console.log("Environment:", envName.toUpperCase());
    console.log("Base URL:", config.baseUrl);
    console.log("API Key:", apiKeyPattern);
    console.log("Timeout:", config.timeout + "ms");
    console.log("Description:", config.description);
}