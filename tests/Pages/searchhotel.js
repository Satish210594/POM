import { expect } from "@playwright/test";
import data from'../../testdata/data.json';

export class searchPage{
    constructor(page){
        this.page=page;
        this.location=page.locator('#location');
        this.hotels=page.locator('[name="hotels"]');
        this.Roomtype=page.locator('[name="room_type"]');
        this.Numberofrooms=page.locator('[name="room_nos"]');
        this.checkindate=page.locator('#datepick_in');
        this.checkoutdate=page.locator('#datepick_out');
        this.adultsperroom=page.locator('#adult_room');
        this.search=page.locator('#Submit');    


    }

    async searchHotel(){
        await this.location.selectOption(data.location);
        await this.Roomtype.selectOption(data.roomtype);
        await this.checkindate.selectOption(data.checkindate);
        await this.checkoutdate.selectOption(data.checkoutdate);
        await this.adultsperroom.selectOption(data.adultsperroom);
        await this.page.waitForTimeout(3000);
        await this.search.click();
    }

}