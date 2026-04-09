import { test as base } from '@playwright/test';
import { LoginPage } from '../tests/Pages/loginpage';
import data from '../testdata/data.json';

export const mytest = base.extend({
    loginfixture: async ({ page }, use) => {
        const loginobj = new LoginPage(page);
        await loginobj.navigate(data.url);
        await loginobj.login(data.username, data.password, data.result);
        await use(page);
        
    }
});