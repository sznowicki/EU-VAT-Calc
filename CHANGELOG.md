# CHANGELOG

## v2.3.0
- Added `onlyDomesticTaxPayer` param to a constructor (see [README](./README.md)).
  `
## v2.2.0
- Update VAT rates.
- Update dev dependencies.
- Minor code style changes.

## v2.1.0
- update VAT rates for DE, IE
- update dev dependencies

## v2.0.0
### BRAKING CHANGE: 
- static .rates has a different shape:
    - `rates.[countryId].country` is renamed to `country_name`
    -  reduced rates are gone in favor of `.reduced_rates` object.
    
