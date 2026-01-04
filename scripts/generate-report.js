const reporter = require('cucumber-html-reporter');
const path = require('path');

const jsonFile = path.resolve(__dirname, '..', 'reports', 'cucumber_report.json');
const output = path.resolve(__dirname, '..', 'reports', 'cucumber_report.html');

const options = {
  theme: 'bootstrap',
  jsonFile: jsonFile,
  output: output,
  reportSuiteAsScenarios: true,
  launchReport: false,
  metadata: {
    'App Version': '1.0.0',
    'Test Environment': process.env.CI ? 'CI' : 'Local',
    'Browser': 'Chrome',
    'Parallel': 'false'
  }
};

reporter.generate(options);

console.log('HTML report generated at:', output);
