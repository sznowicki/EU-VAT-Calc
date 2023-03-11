const { EUVatCalc } = require("eu-vat-calc");

const main = () => {
    const calc = new EUVatCalc({
        domesticCountry: 'PL',
        domesticPayer: false,
    });
};

main();
