import { Then } from "@cucumber/cucumber"
import { expect } from "@playwright/test"

Then ( 
    /^the header should contain the text "([^"]*)"$/,
    async function(title:string) {
        console.log("the contacts haaaaeader should contain the text Contacts");

        const content = await global.page.textContent("[data-id='contacts']");
        expect(content).toBe(title);
        
    }
)