import { source } from './res/rates.js';
export class EUVatCalc {
    domesticCountry;
    domesticPayer;
    static getRate(countryId) {
        if (!this.rates[countryId]) {
            throw new Error(`Unknown country: ${countryId}. Check rates.json file for list of possible countries. If you see something out of date, feel free to contribute on GitHub.`);
        }
        return this.rates[countryId];
    }
    static isEU(countryId) {
        return !!this.rates[countryId];
    }
    static get rates() {
        return source.rates;
    }
    constructor(options) {
        if (!options?.domesticCountry || typeof options.domesticCountry !== 'string') {
            throw new Error('You must provide domestic country');
        }
        // input validation
        EUVatCalc.getRate(options.domesticCountry);
        this.domesticCountry = options.domesticCountry;
        this.domesticPayer = !!options.onlyDomesticTaxPayer;
    }
    /**
     * Returns VAT rates for provided countryId and customer type (isCompany)
     * @param countryId
     * @param isCompany
     * @return {Object} rate entry if applicable, 0 if no VAT for this customer.
     */
    getVat(countryId, isCompany) {
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
