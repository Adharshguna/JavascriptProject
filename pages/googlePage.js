// pages/googlePage.js
const { By, until } = require('selenium-webdriver');

class GooglePage {
    constructor(driver) {
        this.driver = driver;
        this.url = 'https://www.gmail.com';
        this.searchBox = By.name('identifier');
        this.nextButton = By.xpath("//span[text()='Next']");
    }

    async open() {
        await this.driver.get(this.url);
    }

    async getSearchBoxElement(timeout = 10000) {
        await this.driver.wait(until.elementLocated(this.searchBox), timeout);
        const el = await this.driver.findElement(this.searchBox);
        await this.driver.wait(until.elementIsVisible(el), 5000);
        return el;
    }

    async enterSearch(query) {
        const el = await this.getSearchBoxElement();
        await el.clear();
        await el.sendKeys(query);
    }

    async submitSearch() {
        const el = await this.getSearchBoxElement();
        await el.click();
    }

    async waitForNextButtonText(expectedText, timeout = 5000) {
        const btn = await this.driver.wait(until.elementLocated(this.nextButton), timeout);
        await this.driver.wait(until.elementIsVisible(btn), timeout);
        await this.driver.wait(until.elementTextContains(btn, expectedText), timeout);
        return btn.getText();
    }

    async clickNext()
    {
        const el = await this.getSearchBoxElement();
        await el.sendKeys('\n');
    }

    async getTitle() {
        return this.driver.getTitle();
    }
}

module.exports = GooglePage;