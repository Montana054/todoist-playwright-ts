# Playwright Automation Portfolio

##  Purpose
Demonstration of basic automation skills for Junior QA Engineer position with 2 years of manual testing experience.

##  Test Cases Covered
- TC-001: Add task with Today date
- TC-002: Add Task with Due Date from Calendar  
- TC-005: Cancel Task Creation
- TC-006: Create task with empty title

##  Tech Stack
- **Playwright** + **TypeScript** - Modern automation framework
- **Page Object Pattern** - Maintainable test structure
- **Allure Reporting** - Professional test reports
- **Custom Logger** - Detailed execution tracking

##  Quick Start

1. Install dependencies: npm install
2. Run all tests: npx playwright test --workers=1
3. Run specific test: npx playwright test -g "TC-002"
4. Generate Allure report: npm run report

## Project Structure
src/
├── pages/          # Page Object classes
├── tests/          # Test specifications  
├── utils/          # Helper utilities
└── data/           # Test data storage

Author
Anatolii Zakharov QA Engineer with 2 years of experience in manual and API testing, expanding skills to test automation.
