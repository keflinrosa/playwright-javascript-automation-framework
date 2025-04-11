# Playwright JavaScript Automation Framework

A robust and scalable automation framework built with [Playwright](https://playwright.dev/) and JavaScript for end-to-end testing of web applications.

## Features

- **Cross-Browser Testing**: Supports Chromium, Firefox, and WebKit.
- **Headless and Headed Modes**: Run tests in headless mode for speed or headed mode for debugging.
- **Parallel Execution**: Execute tests in parallel to reduce execution time.
- **Allure Reporting**: Generate detailed test reports with Allure.
- **GitHub Actions Integration**: CI/CD pipeline for automated test execution and report deployment.
- **Customizable**: Easily extendable to suit your project needs.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/)
- [Playwright Browsers](https://playwright.dev/docs/cli#install-browsers)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/playwright-javascript-automation-framework.git
   cd playwright-javascript-automation-framework

2. Install dependencies: `npm install`
3. Install Playwright browsers: `npx playwright install --with-deps`

## Running Tests

To execute all tests, run: `npx playwright test`

To run tests in a specific browser:
    
    npx playwright test --project=chromium

    npx playwright test --project=firefox

    npx playwright test --project=webkit

## Allure Report

The latest test results and detailed reports are available at the following link:

[View Allure Report](https://keflinrosa.github.io/playwright-javascript-automation-framework/)

## CI/CD Integration
This framework is integrated with GitHub Actions for automated testing and report deployment. The workflow:

Runs tests on every push or pull request to the main branch.
Generates and deploys Allure reports to GitHub Pages.

## Folder Structure

    playwright-javascript-automation-framework/
    ├── tests/                # Test files
    ├── .github/workflows/    # GitHub Actions workflows
    ├── allure-results/       # Allure results (generated after tests)
    ├── allure-report/        # Allure report (generated after tests)
    ├── [playwright.config.js](http://_vscodecontentref_/1)  # Playwright configuration
    ├── [package.json](http://_vscodecontentref_/2)          # Project dependencies and scripts
    └── [README.md](http://_vscodecontentref_/3)             # Project documentation

## Contact
For questions or feedback, feel free to reach out:

    GitHub: @keflinrosa
    Email: keflinduarte@gmail.com