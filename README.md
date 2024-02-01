# Cypress Test Automation

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests](#running-tests)
  - [1. Using Cypress GUI](#1-using-cypress-gui)
  - [2. Headless Mode](#2-headless-mode)
  - [3. Command Line](#3-command-line)
- [Writing Tests](#writing-tests)
- [Folder Structure](#folder-structure)
- [Test Configuration](#test-configuration)
- [Additional Resources](#additional-resources)

## Introduction

This repository contains automated tests for QTeam Solution using Cypress, a powerful end-to-end testing framework.

## Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node.js package manager)

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/your-project.git


2. Navigate to the project directory:
    ```bash 
    cd your-project


3. Install project dependencies:
     ```bash
    npm install


 ## Running Tests
#### 1.  Using Cypress GUI

Launch the Cypress Test Runner:

    npm run cy:open

This will open the Cypress Test Runner GUI, allowing you to select and run tests interactively.


#### 2. Command Line in Headless Mode
Run tests using the Cypress command line:

    npm run cy:run

## Writing Tests
Tests are located in the **"cypress/e2e"** folder. You can write new tests or modify existing ones using JavaScript or TypeScript.

## Folder Structure
**cypress/e2e:** Contains test files.
**cypress/fixtures:** Contains test data in JSON files.
**cypress/support:** Contains reusable custom commands and other configurations.

## Test Configuration
Check cypress.config.json for Cypress configuration settings. Update the configuration as needed for your project.


---

# Regression Test Plan: Order Placement Process

## Objective

The purpose of this test plan is to ensure the stability and functionality of the order placement process on the Magento website after any changes or updates.

## Test Environment

- **Web Browsers:** Chrome, Firefox, Safari, Edge
- Depends on the web browser installed on the machine( the default will be Chrome ) 

## Test Scenarios

### 1. Login and Place Order

- Verify successful login for a registered user.
- Add a product to the cart.
- Navigate through the checkout process.
- Complete the order.

### 2. Guest Checkout

- Test the order placement process as a guest user.
- Add a product to the cart.
- Provide shipping information.
- Complete the order.

### 3. Order Modification

- Test the ability to modify the order before payment.
- Add a product to the cart.
- Change the quantity of the product.
- Verify the order total updates accordingly.

### 4. Order Cancellation

- Place an order.
- Verify the option to cancel the order before payment.
- Confirm the order cancellation process.

### 5. Shipping Options

- Test different shipping options (e.g., standard, express).
- Verify the correct shipping cost is applied.
- Confirm that the selected shipping option is displayed on the order summary.

### 6. Address Validation

- Test the order placement process with invalid shipping address details.
- Verify that the system detects and prompts for correction.
- Confirm the order cannot proceed with invalid address details.

### 7. Order Confirmation Page

- Test the order confirmation page after successful order placement.
- Verify that order details (product, quantity, total) are correct.
- Confirm the presence of the order number and a thank-you message.

## Test Execution and Reporting

- Test each scenario on the specified browsers and devices.
- Record test results, including pass/fail status, observed issues, and any deviations from expected behavior.
- Report issues promptly to the development team with detailed information.

## Test Data

- Utilize a mix of valid and invalid data for testing (addresses, credit card numbers, etc.).
- Use test credit card information for payment testing.

## Dependencies

- Ensure that the test environment is stable and mirrors the production environment.

## Notes

- Run these tests regularly, especially after any code changes, updates, or new releases.
- Adapt the test plan as needed based on specific requirements or changes in the order placement process.

---