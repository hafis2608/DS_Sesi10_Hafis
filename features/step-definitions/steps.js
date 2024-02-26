const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page.js');
const HomePage = require('../pageobjects/home.page.js');

Given(/^Hafis is on the login page$/, async () => {
    await LoginPage.open()
})

When(/^Hafis login with "(.*)" credential$/, async (username) => {
    await LoginPage.login(username)
})

Then(/^Hafis should see home page$/, async() => {
    await HomePage.validateHomePage()
})

Then(/^Hafis should see error "(.*)"$/, async (dynamicMessage) => {
    await LoginPage.validateLockedOutUserError(dynamicMessage)
}) 

When(/^Hafis login with "(.*)"$/, async (name) => {
    await LoginPage.login(name)
})











