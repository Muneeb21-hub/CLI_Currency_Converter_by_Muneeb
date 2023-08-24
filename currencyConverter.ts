import axios from 'axios';
import inquirer from 'inquirer';

async function convertCurrency(
  amount: number,
  fromCurrency: string,
  toCurrency: string
): Promise<number> {
  try {
    const response = await axios.get(
      `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
    );

    const exchangeRates = response.data.rates;
    const targetExchangeRate = exchangeRates[toCurrency];

    if (!targetExchangeRate) {
      throw new Error('Invalid currency code.');
    }

    const convertedAmount = amount * targetExchangeRate;
    return convertedAmount;
  } catch (error) {
    throw new Error('Currency conversion failed.');
  }
}

async function main() {
  try {
    const questions = [
      {
        type: 'input',
        name: 'amount',
        message: 'Enter the amount:',
        validate: (value: any) => !isNaN(parseFloat(value)) || 'Please enter a valid number.',
      },
      {
        type: 'input',
        name: 'fromCurrency',
        message: 'Enter the source currency code:',
      },
      {
        type: 'input',
        name: 'toCurrency',
        message: 'Enter the target currency code:',
      },
    ];

    const answers = await inquirer.prompt(questions);

    const amount = parseFloat(answers.amount);
    const fromCurrency = answers.fromCurrency.toUpperCase();
    const toCurrency = answers.toCurrency.toUpperCase();

    const convertedAmount = await convertCurrency(
      amount,
      fromCurrency,
      toCurrency
    );

    console.log(
      `${amount} ${fromCurrency} is equal to ${convertedAmount} ${toCurrency}`
    );
  } catch (error) {
    let errorMessage = 'Failed to do something exceptional';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    console.log(errorMessage);
    
  }
}

main();
