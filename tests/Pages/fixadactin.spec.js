import {test,expect} from "@playwright/test";
//import { LoginPage } from "./Pages/loginpage";;
import { mytest } from "../../fixture/loginFixture";


import { searchPage } from "./searchhotel";

mytest('adactin fixture', async({loginfixture})=>{

    //const loginObj= new LoginPage(page);
    const searchobj= new searchPage(loginfixture);
    //const selectobj= new selectHotel(page);
    //const bookobj= new BookaHotel(page);
 
    //await loginObj.navigate();
    //await loginObj.login();
    
  

   // await page.waitForTimeout(3000);

    


})