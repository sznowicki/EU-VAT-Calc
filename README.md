# What is EU-VAT-CALC?
Simple function which returns VAT according to country and information if your payer represents a company or not.

## Disclaimer
You use this software at your own risk.

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
*        "standard_rate": 20,
*        "reduced_rate": 10,
*        "reduced_rate_alt": 13,
*        "super_reduced_rate": false,
*        "parking_rate": 12
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
Data comes from http://apilayer.net. We highly recommend them!

