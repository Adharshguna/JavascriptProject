const { Builder } = require('selenium-webdriver');
require('chromedriver');
const { setDefaultTimeout, Before, After, Given, When, Then } = require('@cucumber/cucumber');
const GoogleActions = require('../../actions/googleActions');

setDefaultTimeout(20000); // Increase timeout to 20 seconds

Before(async function () {
    this.driver = await new Builder().forBrowser('chrome').build();
    this.googleActions = new GoogleActions(this.driver);
});

After(async function () {
    if (this.driver) {
        await this.driver.quit();
    }
});

Given('I open the Gmail homepage', async function () {
    await this.googleActions.openGmail();
});

When('I search for {string}', async function (gmail) {
    await this.googleActions.search(gmail);
});

Then('the page title should contain {string}', async function (expectedTitle) {
    await this.googleActions.verifyTitle(expectedTitle);
});