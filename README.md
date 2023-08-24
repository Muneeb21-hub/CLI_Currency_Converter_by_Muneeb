# Currency Converter

A command-line currency converter built with TypeScript and axios that allows you to convert between different currencies.

## Description

Welcome to the Currency Converter! This program provides a convenient way to convert between different currencies using real-time exchange rates. You can specify the amount, source currency, and target currency, and the program will display the converted amount.

## How to Use

1. Clone or download this repository to your local machine.

2. Open your terminal and navigate to the directory where the Currency Converter files are located.

3. Make sure you have Node.js and npm installed on your machine. You can download them from [nodejs.org](https://nodejs.org/).

4. Install the required dependencies using the following command:

   ```sh
   npm install
   ```

5. Start the Currency Converter by running the following command:

   ```sh
   tsc currencyConverter.ts && node currencyConverter.js
   ```

6. Follow the prompts to enter the amount, source currency code, and target currency code.

7. The program will fetch the latest exchange rates and display the converted amount.

## Code Overview

The Currency Converter is implemented using TypeScript and the `axios` and `inquirer` libraries for API requests and user input, respectively. Here's a brief overview of how the code works:

- The program makes an API request to get the latest exchange rates from `https://api.exchangerate-api.com`.
- Users input the amount, source currency code, and target currency code through the command-line interface provided by the `inquirer` library.
- The `convertCurrency` function calculates the converted amount based on the exchange rates.
- The main function handles user interactions and error handling.

Feel free to explore the code and customize it as you see fit. You can enhance the app by adding more currency-related features and error handling.

## Dependencies

- [Node.js](https://nodejs.org/)
- [axios](https://www.npmjs.com/package/axios)
- [inquirer](https://www.npmjs.com/package/inquirer)

## Author

[Muneeb u Rehman]