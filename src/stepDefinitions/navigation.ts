import { Given } from "@cucumber/cucumber";

Given ( 
    /^I am on the "([^"]*)" page$/,
    async function(pageId:string) {
        console.log(`I am on the ${pageId} page`);

        const {
            screen: { page}
        } = this;

        await page.goto("https://hub.testingtalks.com.au/");
    }
)