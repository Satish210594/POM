import { expect } from "@playwright/test"
import data from "../../testdata/data.json"

export class LoginPage{

constructor(page){
 this.page=page;
 this.username= page.locator('#username');
 this.password= page.locator('[name="password"]');
 this.button=page.locator('[class="login_button"]');

    }

    async navigate(){

        await this.page.goto(data.url);
    }

    async login(){

        await this.username.fill(data.username);
        await this.password.fill(data.password);
        await this.button.click();
        //await expect(this.page).toHaveURL('https://adactinhotelapp.com/');
        /* if (result == "Pass") {
            await expect(this.page).toHaveURL('https://adactinhotelapp.com/SearchHotel.php');  
        } else {
            await expect(this.page).toHaveTitle('Adactin.com - Hotel Reservation System');
        } */

    }


    }
    