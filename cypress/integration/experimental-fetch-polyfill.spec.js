describe("experimental fetch polyfill", () => {
    before(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
    });

    beforeEach(() => {
        cy.server();
        cy.mockLogin();

        cy.clearCookies();
        cy.clearLocalStorage();
    });

    it("should login", () => {
        cy.visit("/", {
            onBeforeLoad(win) {
                win.sessionStorage.clear();
            },
        });

        cy.get("button").click();
        cy.get("input[name='username']").clear().type("some");
        cy.get("input[name='password']").clear().type("test");

        cy.get("button").contains("Sign In").click();

        cy.wait("@cognitoLogin");
    });

    it("should load the page again", () => {
        cy.visit("/");
    });
});
