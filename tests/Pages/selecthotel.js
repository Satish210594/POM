import { expect } from "@playwright/test";
import data from'../../testdata/data.json';

export class selectHotel{
    constructor(page){
        this.page=page;
        this.select=page.locator('#radiobutton_0');
        this.continue=page.locator('#continue');

    }

    async selectHotel(){
        



    }

}

