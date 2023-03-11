import { CountryRates, RatesByCountries, source } from './res/rates';

export type CountryId = string;

export interface CountryRatesSimplified {
  standard_rate: number;
  country_name?: string;
}
class EUVatCalc {
  public domesticCountry: CountryId;
  public domesticPayer: boolean;

  static getRate(countryId: CountryId): CountryRates {
    if (!this.rates[countryId]) {
      throw new Error(`Unknown country: ${countryId}. Check rates.json file for list of possible countries. If you see something out of date, feel free to contribute on GitHub.`);
    }

    return this.rates[countryId];
  }

  static isEU(countryId): boolean {
    return !!this.rates[countryId];
  }

  static get rates(): RatesByCountries {
    return source.rates;
  }

  constructor({ domesticCountry = undefined, onlyDomesticTaxPayer = false } = {}) {
    if (!domesticCountry || typeof domesticCountry !== 'string') {
      throw new Error('You must provide domestic country');
    }
    // input validation
    EUVatCalc.getRate(domesticCountry);

    this.domesticCountry = domesticCountry;
    this.domesticPayer = onlyDomesticTaxPayer;
  }

  /**
   * Returns VAT rates for provided countryId and customer type (isCompany)
   * @param countryId
   * @param isCompany
   * @return {Object} rate entry if applicable, 0 if no VAT for this customer.
   */
  getVat(countryId, isCompany): CountryRatesSimplified {
    /**
     * Same country as domestic - always same VAT
     */
    if (this.domesticCountry === countryId) {
      return EUVatCalc.getRate(this.domesticCountry);
    }

    /**
     * Non EU countries - always 0% (non-EU export)
     * EU countries, but companies - 0% (internal EU export)
     */
    if (!EUVatCalc.isEU(countryId) || isCompany) {
      return {
        standard_rate: 0,
      };
    }

    if (this.domesticPayer) {
      return EUVatCalc.getRate(this.domesticCountry);
    }

    return EUVatCalc.getRate(countryId);
  }
}

export default EUVatCalc;
