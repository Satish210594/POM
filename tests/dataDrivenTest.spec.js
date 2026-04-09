import { test } from "@playwright/test";
// import { LoginPage } from "./Pages/loginpage.js";
//import logindata from "../testdata/dataDrivenTestdata.json";
import {LoginPage} from '../tests/Pages/loginpage.js';
import data from "../testdata/data.json";
import {excelReader} from "../utility/excelReader.js";

const logindata = excelReader();

for (let DDT of logindata) {

test(`Data Driven Test for ${DDT.UserName} and ${DDT.Password}`, async ({ page }) => {

    const loginDDOjt = new LoginPage(page);

    await loginDDOjt.navigate(data.url);
    await loginDDOjt.login(DDT.UserName, DDT.Password,DDT.Remark);
});
}