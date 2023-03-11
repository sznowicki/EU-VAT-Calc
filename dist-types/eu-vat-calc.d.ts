import { CountryRates, RatesByCountries } from './res/rates.js';
export type CountryId = string;
export interface CountryRatesSimplified {
    standard_rate: number;
    country_name?: string;
}
export declare class EUVatCalc {
    domesticCountry: CountryId;
    domesticPayer: boolean;
    static getRate(countryId: CountryId): CountryRates;
    static isEU(countryId: any): boolean;
    static get rates(): RatesByCountries;
    constructor({ domesticCountry, onlyDomesticTaxPayer }?: {
        domesticCountry?: any;
        onlyDomesticTaxPayer?: boolean;
    });
    /**
     * Returns VAT rates for provided countryId and customer type (isCompany)
     * @param countryId
     * @param isCompany
     * @return {Object} rate entry if applicable, 0 if no VAT for this customer.
     */
    getVat(countryId: any, isCompany: any): CountryRatesSimplified;
}
export default EUVatCalc;
