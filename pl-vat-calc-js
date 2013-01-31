/* vatCalc - makes vat calculation for polish e-services simple */
var vatCalc = function(){
    this.defaultVAT = 23;
    this.VAT = false;
    this.country = false;
    this.getVATByCountry = function(){
        if (this.country) {
            switch(this.country){
                case('Poland'):
                    vat = this.defaultVAT;
                    break;
                case('EU'):
                    vat = this.defaultVAT;
                    break;
                case('nonEU'):
                    vat = 0;
                    break;
            }
            return vat;
        }
        else {
            return false;
        }
    };
    /* function returns proper vat for country - company/consumer pairs
     * @param (string) country ('Poland', 'EU', 'nonEU')
     * @param (bool) isCompany
     * return (int)
     */
    this.getVAT = function(country, isCompany){
        
        this.country = country;
        vatByCountry = this.getVATByCountry();
        
        if (vatByCountry == this.defaultVAT){
             if (this.country == 'EU' && isCompany == 1) {
                 this.VAT = 0;
             }
             else {
                 this.VAT = this.defaultVAT;
             }
             
        }
        else { // non EU countries has always 0% VAT
            this.VAT = 0; 
        }
        
        return this.vat;
    };
    
}

/* simple usage below */
$(document).ready(function(){
    $('select[name="country"], select[name="companyInvoice"]').on("change", function(){
            var vat = new vatCalc();
            var country = $('select[name="country"]').attr('value');
            var company = $('select[name="companyInvoice"]').attr('value');
            vat.getVAT(country, company);
            
            console.info(vat.VAT);
    });         
});