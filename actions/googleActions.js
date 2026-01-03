const { until } = require('selenium-webdriver');
const GooglePage = require('../pages/googlePage');
const { assert } = require('chai');

class GoogleActions {
    constructor(driver) {
        this.driver = driver;
        this.page = new GooglePage(driver);
    }

    async openGmail() {
        await this.page.open();
    }

    async search(query) {
        await this.page.enterSearch(query);
        await this.page.clickNext();
    }

    async verifyTitle(expectedTitle){
        const timeout = 10000;
        try {
            await this.driver.wait(until.titleContains(expectedTitle), timeout);
            const actualTitle = await this.page.getTitle();
            assert.include(actualTitle, expectedTitle);
        } catch (err) {
            const actualTitle = await this.page.getTitle().catch(() => '');
            assert.fail(`Expected title to include "${expectedTitle}", but got "${actualTitle}"`);
        }
    }
}

module.exports = GoogleActions;
