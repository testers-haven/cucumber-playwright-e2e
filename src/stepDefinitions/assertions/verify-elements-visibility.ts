import { Then } from "@cucumber/cucumber"
import { expect } from "@playwright/test"

Then ( 
    /^the header should contain the text "(.*)"$/,
    async function(title:string) {
        const {
            screen: { page}
        } = this;

    
        console.log("the contacts header should contain the text Contacts");

        const content = await page.textContent("[data-id='contacts']");
        expect(content).toBe(title);
        
    }
)

Then ( 
    /^the "(.*)" should be displayed$/,
    async function(title:string) {
        const {
            screen: { page}
        } = this;

        console.log(title);

        const locator = await page.locator("[data-id='header-logo']");
        expect(locator).toBeVisible();
    }
)