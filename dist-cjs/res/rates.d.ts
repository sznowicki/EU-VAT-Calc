export type CountryReducedRates = Record<string, number>;
export interface CountryRates {
    country_name: string;
    standard_rate: number;
    reduced_rates: CountryReducedRates;
}
export type RatesByCountries = Record<string, CountryRates>;
export interface RatesSource {
    rates: RatesByCountries;
}
export declare const source: RatesSource;
