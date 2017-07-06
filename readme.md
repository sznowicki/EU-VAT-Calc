# What is EU-VAT-CALC?
Simple function which returns VAT according to country and information if your payer represents a company or not.

## Disclaimer
This script is made by one, private person. You use this software at your own risk. Always check the source code. Do not "npm i" and blindly use anything, especially if it's related to taxation.

## Examples
Get VAT percentage by countryId and isCompany
```javascript
const calculator = new EUVatCalc({domesticCountry: 'PL'});
calculator.getVat('DE', true); // DE, company => 0%
calculator.getVat('DE', false); // DE, not company => 19%
```
Get all data
```javascript
/**
* Produces:
* {
*   AT: {
*        "country": "Austria",
*        "standard_rate": 20.00,
*        "reduced_rate": 10.00,
*        "reduced_rate_alt": 13.00,
*        "super_reduced_rate": false,
*        "parking_rate": 12.00
*      },
*   BE: ...
*  }
*/
EUVatCalc.rates; // => rates.json.rates

// Same, but for instantiated object
const calculator = new EUVatCalc({domesticCountry: 'DE'});
calculator.constructor.rates;
```
## Credits
Thanks https://euvatrates.com/rates.json for data source. Feel free to create pull request if you find ./res/rates.json out of date.

