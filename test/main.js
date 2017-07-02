const { assert } = require('chai');
const EUVATCalc = require('../eu-vat-calc');

describe('Main test', () => {
  describe('PL test', () => {
    const eupl = new EUVATCalc({ domesticCountry: 'PL' });

    it('should give 23% for standard customer', () => {
      assert(
        eupl.getVat('PL', false).standard_rate,
        23
      )
    });

    it('should give 23% for company customer', () => {
      assert(
        eupl.getVat('PL', true).standard_rate,
        23
      );
    });

    console.log(eupl.getVat('DE', true).standard_rate);
    it('should give 0% for EU company', () => {
        assert(
          eupl.getVat('DE', true).standard_rate,
          0
        );
    });

    it('should give 19% for DE customer', () => {
      assert(
        eupl.getVat('DE', false).standard_rate,
        19
      );
    });
  });
});