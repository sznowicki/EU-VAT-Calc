const { EUVatCalc } = require("eu-vat-calc");

const main = () => {
    const calc = new EUVatCalc({
        domesticCountry: 'PL',
        onlyDomesticTaxPayer: false
    });

    const vat = calc.getVat('DE', false);
    console.log(vat.standard_rate);
    if (typeof vat.standard_rate !== 'number') {
        throw new Error('Invalid return value');
    }
};

main();
