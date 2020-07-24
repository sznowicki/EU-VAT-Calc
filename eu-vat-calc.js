const Rates = require('./res/rates.json');

class EUVatCalc {
  static getRate(countryId) {
    if (!this.rates.hasOwnProperty(countryId)) {
      throw new Error(`Unknown country: ${countryId}. Check rates.json file for list of possible countries. If you see something out of date, feel free to contribute on GitHub.`)
    }

    return this.rates[countryId];
  }

  static isEU(countryId) {
    return this.rates.hasOwnProperty(countryId);
  }

  static get rates() {
    return Rates.rates;
  }

  constructor({ domesticCountry } = {}) {
    if (!domesticCountry) {
      throw new Error('You must provide domestic country');
    }
    // input validation
    this.constructor.getRate(domesticCountry);

    this.domesticCountry = domesticCountry;
  }

  /**
   * Returns VAT rates for selected countryId and customer type (isCompany)
   * @param countryId
   * @param isCompany
   * @return {Object} rate entry if applicable, 0 if no VAT for this customer.
   */
  getVat(countryId, isCompany) {
    /**
     * Same country as domestic - always same VAT
     */
    if (this.domesticCountry === countryId) {
      return this.constructor.getRate(this.domesticCountry);
    }

    /**
     * Non EU countries - always 0% (non-EU export)
     * EU countries, but companies - 0% (internal EU export)
     */
    if (
      !this.constructor.isEU(countryId)
      ||
        isCompany
    ) {
      return {
        standard_rate: 0,
      };
    }

    return this.constructor.getRate(countryId);
  }
}

module.exports = EUVatCalc;
