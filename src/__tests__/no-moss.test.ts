import EUVATCalc from '../eu-vat-calc.js'

describe('Main test', () => {
  describe('PL test', () => {
    const eupl = new EUVATCalc({ domesticCountry: 'PL', onlyDomesticTaxPayer: true });

    it('should give 23% for PL consumer', () => {
      expect(eupl.getVat('PL', false).standard_rate).toEqual(23);
    });
    it('should give 23% for PL company customer', () => {
      expect(eupl.getVat('PL', true).standard_rate).toEqual(23);
    });

    it('should give 23% for DE consumer', () => {
      expect(eupl.getVat('DE', false).standard_rate).toEqual(23);
    });

    it('should give 0% for EU company', () => {
      expect(eupl.getVat('DE', true).standard_rate).toEqual(0);
    });

    it('should give 0% for nonEU company', () => {
      expect(eupl.getVat('RU', true).standard_rate).toEqual(0);
    });
  });
});
