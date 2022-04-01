import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

const url = 'https://www.amazon.com'

Given('I open Amazon page', () => {
    cy.visit(url)
})

Then('I see Amazon logo', () => {
    cy.get(`#nav-logo`).should(`be.visible`);
})