import EUVATCalc from '../eu-vat-calc.js'

describe('Main test', () => {
  describe('.constructor.rates test', () => {
    it('should return all rates data', () => {
      expect(typeof EUVATCalc.rates).toBe('object');
    });
  });

  describe('PL test', () => {
    const eupl = new EUVATCalc({ domesticCountry: 'PL' });

    it('should give 23% for standard customer', () => {
      expect(eupl.getVat('PL', false).standard_rate).toMatchSnapshot();
    });
    it('should give 23% for company customer', () => {
      expect(eupl.getVat('PL', true).standard_rate).toMatchSnapshot();
    });

    it('should give 0% for EU company', () => {
      expect(eupl.getVat('DE', true).standard_rate).toMatchSnapshot();
    });

    it('should give 0% for nonEU consumer', () => {
      expect(eupl.getVat('OUTSIDE_EU', true).standard_rate).toEqual(0);
    });

    it('should give 19% for DE customer', () => {
      expect(eupl.getVat('DE', false).standard_rate).toMatchSnapshot();
    });
  });

  describe('Error handling', () => {
    it('should throw when not providing domestic country', () => {
      expect(() => {
        // @ts-ignore
        new EUVATCalc();
      }).toThrow();
    });

    it('should throw when country is not supported', () => {
      expect(() => {
        EUVATCalc.getRate('NOT_A_COUNTRY');
      }).toThrow();
    });
  });
});
