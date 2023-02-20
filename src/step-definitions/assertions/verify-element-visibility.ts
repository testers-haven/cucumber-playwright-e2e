import { Then } from '@cucumber/cucumber'
import { waitFor } from '../../support/wait-for-behaviour';
import { getElementLocator } from "../../support/web-element-helper";
import { ScenarioWorld } from '../setup/world';

Then(
    /^the "([^"]*)" should be displayed$/,
    async function (this: ScenarioWorld, elementKey: string) {
        const {
            screen: { page },
            globalConfig
        } = this;
        console.log(`the ${elementKey} should be displayed`);

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

        await  waitFor(async() => {
            const isElementVisible = (await page.$(elementIdentifier)) != null;
            return isElementVisible;
        });
    }
);