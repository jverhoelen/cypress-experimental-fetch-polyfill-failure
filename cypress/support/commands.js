Cypress.Commands.add("mockLogin", (response = "fixture:userlogin.json", success = true) => {
    cy.route({
        method: "POST",
        status: success ? 200 : 400,
        url: "https://cognito-idp.us-east-2.amazonaws.com/",
        response,
    }).as("cognitoLogin");
});
