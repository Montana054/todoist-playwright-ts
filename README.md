#  TypeScript + Playwright Automation

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Playwright-2EAD33?style=flat-square&logo=playwright&logoColor=white" alt="Playwright">
  <img src="https://img.shields.io/badge/Allure-FF6AEB?style=flat-square&logo=allure&logoColor=white" alt="Allure">
</p>

##  Purpose
Demonstration of modern test automation skills QA Engineer position.

##  Quick Start

```bash
# Install dependencies
npm install

# Run all tests
npx playwright test --workers=1

# Run specific test
npx playwright test -g "TC-002"

# Generate Allure report
npm run report

## Test Cases Covered
TC-001: Add task with Today date

TC-002: Add Task with Due Date from Calendar

TC-005: Cancel Task Creation

TC-006: Create task with empty title

## Architecture

src/
├── pages/          # Page Object classes
├── tests/          # Test specifications  
├── utils/          # Helper utilities
└── data/           # Test data storage

Author
Anatolii Zakharov - QA Engineer.