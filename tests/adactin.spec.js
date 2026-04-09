import {test,expect} from "@playwright/test";
//import { LoginPage } from "./Pages/loginpage";
import { searchPage } from "./Pages/searchhotel";
import { BookaHotel } from "./Pages/bookahotel";
import { selectHotel } from "./Pages/selecthotel";
import logindata from "../testdata/dataDrivenTestdata.json"; 

test('adactin hotel app', async({page})=>{

    const loginObj= new LoginPage(page);
    const searchobj= new searchPage(page);
    const selectobj= new selectHotel(page);
    const bookobj= new BookaHotel(page);
 
    await loginObj.navigate();
    await loginObj.login();
    await searchobj.searchHotel();
    await selectobj.selectHotel();
    await bookobj.BookaHotel();

    await page.waitForTimeout(3000);

    


})