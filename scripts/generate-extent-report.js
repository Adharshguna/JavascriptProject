const reporter = require('multiple-cucumber-html-reporter');
const path = require('path');

const jsonDir = path.resolve(__dirname, '..', 'reports');
const reportPath = path.resolve(__dirname, '..', 'reports', 'extent-report');

reporter.generate({
  jsonDir: jsonDir,
  reportPath: reportPath,
  openReportInBrowser: false,
  displayDuration: true,
  pageTitle: 'E2E Test Report',
  reportName: 'Google E2E Test Report',
  metadata: {
    browser: {
      name: 'chrome',
      version: 'latest'
    },
    device: 'Local test machine',
    platform: {
      name: process.env.CI ? 'CI' : 'Local'
    }
  },
  customData: {
    title: 'Run info',
    data: [
      { label: 'Project', value: 'google-e2e-cucumber' },
      { label: 'Release', value: '1.0.0' },
      { label: 'Execution Start Time', value: new Date().toISOString() }
    ]
  }
});

console.log('Extent-style report generated at:', reportPath + '.html or index.html inside directory');
