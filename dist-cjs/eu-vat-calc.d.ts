import { CountryRates, RatesByCountries } from './res/rates.js';
export type CountryId = string;
export interface CountryRatesSimplified {
    standard_rate: number;
    country_name?: string;
}
export interface EUVatCalcOptions {
    domesticCountry: string | undefined;
    onlyDomesticTaxPayer?: boolean;
}
export declare class EUVatCalc {
    domesticCountry: CountryId;
    domesticPayer?: boolean;
    static getRate(countryId: CountryId): CountryRates;
    static isEU(countryId: any): boolean;
    static get rates(): RatesByCountries;
    constructor(options: EUVatCalcOptions);
    /**
     * Returns VAT rates for provided countryId and customer type (isCompany)
     * @param countryId
     * @param isCompany
     * @return {Object} rate entry if applicable, 0 if no VAT for this customer.
     */
    getVat(countryId: CountryId, isCompany: boolean): CountryRatesSimplified;
}
export default EUVatCalc;
