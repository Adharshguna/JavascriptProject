const { until } = require('selenium-webdriver');

class Utils {
    constructor(driver) {
        this.driver = driver;
    }

    async waitForLocator(expectedElement, timeout = 10000) {
        const element = await this.driver.wait(until.elementLocated(expectedElement), timeout);
        await this.driver.wait(until.elementIsVisible(element), timeout);
        return element;
    }
}

module.exports = Utils;