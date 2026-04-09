import { expect } from "@playwright/test"
import data from'../../testdata/data.json';

export class BookaHotel{

    constructor(page){
 this.page=page;
 this.firstname= page.locator('#first_name');
 this.lastname= page.locator('[name="#last_name"]');
 this.billingaddress= page.locator('[name="address"]');
 this.creditno= page.locator('#cc_num');
 this.cctype= page.locator('#cc_type');
 this.expmonth= page.locator('#cc_exp_month');
 this.expyear= page.locator('#cc_exp_year');
 this.cvvnum= page.locator('[name="cc_cvv"]');
 this.bookbutton= page.locator('#book_now');
}

async BookaHotel({loc,roomtype,datein}){
    await this.firstname.fill(data.firstname);
    await this.lastname.fill(data.lastname);
    await this.billingaddress.fill(data.billingaddress);
    await this.creditno.fill(data.creditno);
    await this.cctype.fill(data.cctype);
    await this.expmonth.fill(data.expmonth);
    await this.expyear.fill(data.expyear);
    await this.cvvnum.fill(data.cvvnum);
    await this.bookbutton.click();


    
}



}