/// <reference types="cypress" />

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
    on("before:browser:launch", (browser = {}, launchOptions) => {
        if (browser.family === "chrome") {
            console.log("Adding --disable-dev-shm-usage...");
            launchOptions.args.push("--disable-dev-shm-usage");
        }

        return launchOptions;
    });
};
