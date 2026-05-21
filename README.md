🚀 Playwright Hybrid E2E Automation Framework
<div align="center"> <img src="https://playwright.dev/img/playwright-logo.svg" alt="Playwright Logo" width="100"/> <h1>🚀 Playwright Hybrid E2E Automation Framework</h1> <p><i>Next-Generation UI & API Integrated Testing Framework for Blazing Fast Execution</i></p> <!-- Badges --> <p> <img src="https://img.shields.io/badge/-Playwright-45ba4b?style=for-the-badge&logo=Playwright&logoColor=white" alt="Playwright"/> <img src="https://img.shields.io/badge/-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/> <img src="https://img.shields.io/badge/-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js"/> <img src="https://img.shields.io/badge/Code_Style-Clean-brightgreen?style=for-the-badge" alt="Clean Code"/> </p> </div>
📖 The "Wow" Factor: Why Hybrid Testing?

Traditional UI automation tests are known to be slow and brittle because they rely on the UI to create test data. This framework changes the game.

By utilizing a Hybrid Approach, we use Playwright's APIRequestContext to bypass the UI and inject data directly into the database via Backend APIs. The UI is then used strictly for what it's meant to do—asserting the final visual state.

✅ Result: Test execution speed is increased by over 50%, and flakiness is practically eliminated.

<br>
🎯 Test Scenario Automating
🌐 Target Application

AutomationInTesting.online

🔄 Hybrid Test Flow
✅ [API Level]

Send an HTTP POST request to /message/ to instantly create a new customer inquiry with a unique subject.

✅ [UI Level]

Launch the browser, navigate to the Admin Portal, and authenticate.

✅ [UI Level]

Open the Message Inbox.

✅ [Assertion]

Verify that the dynamically created message subject is visible on the UI.

<br>
📸 Framework in Action

(Screenshot of the Playwright UI mode or Test passing terminal goes here)

<br>
🏗️ Architectural Patterns Used
1. Page Object Model (POM)

Complete separation of UI interactions from test logic.

2. API Data Seeding

Using utils/apiHelper.ts to generate dynamic preconditions.

3. Data Independence

Using Date.now() to create unique identifiers (e.g., Subject lines) preventing data collisions during parallel execution.

4. Resilient Locators

Using user-centric locators like getByTestId and getByText.

📂 Project Structure
├── assets/                 # Contains README images/screenshots
├── pages/                  # Page Object classes (The Maps)
│   └── AdminPage.ts        # Locators and methods for the Admin Panel
├── tests/                  # Test suites (The Master Plans)
│   └── hybrid-test.spec.ts # Hybrid E2E integration test
├── utils/                  # Helper utilities (The Secret Tunnels)
│   └── apiHelper.ts        # API POST methods for instant data injection
├── package.json            # Node.js dependencies
└── playwright.config.ts    # Global Playwright configurations
⚙️ Quick Start Guide

Follow these steps to run this project on your local machine.

1️⃣ Prerequisites

Before you begin, ensure you have the following installed:

Node.js (v16 or higher)
Git
2️⃣ Installation

Clone the repository and install the required dependencies:

git clone https://github.com/YOUR_GITHUB_USERNAME/playwright-hybrid-e2e-framework.git

cd playwright-hybrid-e2e-framework

npm install
3️⃣ Run the Tests

You can execute the tests using the following commands based on your requirement.

▶️ Run in Headed Mode

(Watch the browser actions visually)

npx playwright test --headed
⚡ Run in Headless Mode

(Recommended for CI/CD pipelines)

npx playwright test
🛠️ Open Playwright UI Mode

(Best for debugging, traces, and step-by-step execution)

npx playwright test --ui
💡 Key Benefits of This Framework

✅ Faster execution using API-assisted setup
✅ Reduced UI dependency and test flakiness
✅ Parallel execution friendly
✅ Scalable enterprise-ready architecture
✅ Clean maintainable TypeScript codebase
✅ CI/CD pipeline compatible
✅ Easily extensible for API + UI + DB validation

🚀 Future Enhancements
Dockerized execution support
GitHub Actions CI pipeline integration
Allure Reporting integration
Environment-based configuration management
Cross-browser execution matrix
Database validation utilities
Visual regression testing support
🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to improve.

📜 License

This project is licensed under the MIT License.

<div align="center"> <h3>⭐ If you found this project useful, don't forget to star the repository ⭐</h3> </div>
