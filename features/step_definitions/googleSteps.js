const { Builder } = require('selenium-webdriver');
require('chromedriver');
const { setDefaultTimeout, Before, After, Given, When, Then } = require('@cucumber/cucumber');
const GoogleActions = require('../../actions/googleActions');

setDefaultTimeout(20000); // Increase timeout to 20 seconds

Before(async function () {
    const chrome = require('selenium-webdriver/chrome');
    const chromeOptions = new chrome.Options();
    if (process.env.CI || process.env.GITHUB_ACTIONS) {
        chromeOptions.addArguments('--headless=new', '--no-sandbox', '--disable-dev-shm-usage');
    }
    this.driver = await new Builder().forBrowser('chrome').setChromeOptions(chromeOptions).build();
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