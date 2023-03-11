# CHANGELOG

## v3.0.0

WARNING: potentially breaking changes due to exports both `cjs` and `esm` modules from a single package.
It should work out of the box, but if you observe any problems please report here in Github.

In case of errors, downgrade to 2.4.0. Functional wise those packages are the same. 

## Breaking changes:
- Dropped node support below node 16.

## Features
- package now exports commonjs and esmodules depending on your nodejs setup.
- code base rewritten to typescript with types declaration (you should observe better linting)

## v2.4.0
- Updated rates (without GB this time).

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
    
