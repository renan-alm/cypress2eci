# Cypress to ECI

## Overview

This repository contains tests for end-to-end testing using Cypress. Cypress is used to automate the consumption of tarballs into the ECI portal for repository migrations. Despite this being a test tool, the goal here is to enable the automation of the migration process.

## Prerequisites

- Node.js
- npm 
- Cypress

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/cypress-eci.git
    ```
2. Navigate to the project directory:
    ```bash
    cd cypress-eci
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

## Running Tests

To run the Cypress tests, use the following command:
```bash
npm run cypress:open
```
This will open the Cypress Test Runner, where you can run the tests interactively.

For headless mode, use:
```bash
npm run cypress:run
```

## Folder Structure

- `cypress/fixtures`: Test data files
- `cypress/integration`: Test scripts
- `cypress/plugins`: Plugins and custom commands
- `cypress/support`: Support files and utilities
