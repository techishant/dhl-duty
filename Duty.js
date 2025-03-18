class Duty{
    /**
     * initializing the calculators
     */
    constructor(){
        this.name = null;
        this.freight = null;

        this.curr = "USD";

        this.gst = null;
        
        this.r = null;
        this.ci = null;

        this.inr = null;
        this.misc = null;
        this.misc_duty=0;
        this.fr = null;
        this.insurance= null;
        this.total = null;
        this.bcd = null;
        this.sw = null;
        this.gstAmt = null;
        this.amt = null;
        this.bcd_rate = null;
    }

    // input
    inputCI$R(ci,r){
        this.ci = ci;
        this.r = r;
    }

    inputGST(gst){
        this.gst = gst;
    }

    calculateINRvalue(){
        this.inr = Math.round(this.ci *this.r*100)/100;
    }
    calculateFrValue(){
        this.fr = Math.round(20/100.0 * this.inr);
    }
    calculateFrValue(freight){
        this.fr = freight;
    }
    calculateInsurance(){
        this.insurance = Math.round(1.125 / 100 * this.inr);
    }
    calculateTotal(){
        this.total = Math.round(this.inr + this.fr + this.insurance);
    }
    calculateBCDandSW(){
        this.bcd = Math.round(this.bcd_rate / 100.0 * this.total);
        this.sw = Math.round(10 / 100 * this.bcd);
    }
    calulateMiscDutyValue(){
        this.misc_bcd = this.bcd_rate/100.0 * this.misc;
        this.misc_sw = 10/100.0 * this.misc_bcd;
        this.misc_taxable = this.misc_bcd + this.misc_sw + this.misc;
        this.misc_gst = this.gst/100.0 * this.misc_taxable;
        this.misc_duty = this.misc_bcd + this.misc_sw + this.misc_gst;
        console.log("---")
        console.log(this.misc_bcd);
        console.log(this.misc_sw);
        console.log(this.misc_taxable);
        console.log(this.misc_gst);
        console.log(this.misc_duty);
    }

    calculateFreightPercent(){
        return Math.round(this.fr/this.inr * 100);
    }

    calculateDutyInPercent(){
        return Math.round(this.amt*100/this.inr*100)/100;
    }

    calculateGstAndAmount(){
        console.log(this.gst);
        console.log(this.bcd + this.sw + this.total);
        this.gstAmt = Math.round(this.gst / 100.0 * (this.bcd + this.sw + this.total));
        this.amt = Math.round(this.bcd + this.sw + this.gstAmt + this.misc_duty);
    }

    getFr(){
        return Math.round(20/100.0 * this.inr);
    }

    // calculateFreightPercent(){
    //     return this.fr/
    // }



}

