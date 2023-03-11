# What is EU-VAT-CALC?
Small class to calculate taxes for businesses that pay EU VAT tax.

## Use cases
### For those under MOSS procedure
If you're under a Mini One Stop Shop procedure (or even if not, but pay consumer VAT in every EU country):

Get VAT percentage by countryId and isCompany
```javascript
const calculator = new EUVatCalc({ domesticCountry: 'PL' });
calculator.getVat('DE', true); // DE, company => 0%
calculator.getVat('DE', false); // DE, not company => 19% (DE VAT)
calculator.getVat('SOME_OTHER_COUNTRY_NOT_IN_EU', false); // consumer, not in EU => 0%
```

### For those paying VAT only in a home country
Some countries allow small businesses to opt out from the MOSS procedure and pay VAT as the consumer would be domestic one.

```javascript
const calculator = new EUVatCalc({ domesticCountry: 'PL', onlyDomesticTaxPayer: true });
calculator.getVat('DE', true); // DE, company => 0%
calculator.getVat('DE', false); // DE, not company => 23% (PL VAT)
calculator.getVat('SOME_OTHER_COUNTRY_NOT_IN_EU', false); // consumer, not in EU => 0%
```

## Class API
### constructor({ domesticCountry: string, onlyDomesticPayer: bool}) => EUVatCalc
- domesticCountry: string - valid EU country code, all posible codes you can find in the [rates.json](src/res/rates.json)
- onlyDomesticPayer: bool - true when calculations should assume payer opt out from MOSS

### Methods
#### getVat(countryId, isCompany) -> Rate
Returns VAT rates for provided countryId and customer type.
- countryId: string - valid EU country code or any other country code outside EU
- isCompany: bool - true when buys is a company (for EU: is a VAT payer)

### Static methods
#### getRate(countryId: string) => {Rate}
Returns selected rate (if exists) from [rates](src/res/rates.json) file.

Throws if country doesn't exist.

#### isEU(countryId) => bool
Checks if country exists in [rates](src/res/rates.json) file. 

### Static getters
#### rates
Returns content of [rates](src/res/rates.json) file.

```
const rates = EUVatCalc.rates;
```

## Entities
### Rate
```javascript
{
    standard_rate: 'number'
}
```

Rate only has one documented field. All the other fields are undocumented (country_name, reduced_rates),
however in case of change that would be breaking, a major change is going to be released.

Except of adding or removing fields in `reduced_rates` property. Changes in those are considered minor.

## Disclaimer
You use this software at your own risk. Author does not promise frequent updates in the rates file (PRs welcomed tho!)
and DOES NOT promise any data that comes from this software is trustworthy.

In other words, if you charge your customers wrong tax rates based on this package,
you're more than welcome to create an issue or even prepare a PR, but there's no reason to sue me because you used
open source software at your own risk.

## Credits
Data comes from http://apilayer.net. We highly recommend them!

