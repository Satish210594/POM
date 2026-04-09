# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: adactin.spec.js >> adactin hotel app
- Location: tests/adactin.spec.js:8:5

# Error details

```
ReferenceError: LoginPage is not defined
```

# Test source

```ts
  1  | import {test,expect} from "@playwright/test";
  2  | //import { LoginPage } from "./Pages/loginpage";
  3  | import { searchPage } from "./Pages/searchhotel";
  4  | import { BookaHotel } from "./Pages/bookahotel";
  5  | import { selectHotel } from "./Pages/selecthotel";
  6  | import logindata from "../testdata/dataDrivenTestdata.json"; 
  7  | 
  8  | test('adactin hotel app', async({page})=>{
  9  | 
> 10 |     const loginObj= new LoginPage(page);
     |                     ^ ReferenceError: LoginPage is not defined
  11 |     const searchobj= new searchPage(page);
  12 |     const selectobj= new selectHotel(page);
  13 |     const bookobj= new BookaHotel(page);
  14 |  
  15 |     await loginObj.navigate();
  16 |     await loginObj.login();
  17 |     await searchobj.searchHotel();
  18 |     await selectobj.selectHotel();
  19 |     await bookobj.BookaHotel();
  20 | 
  21 |     await page.waitForTimeout(3000);
  22 | 
  23 |     
  24 | 
  25 | 
  26 | })
```