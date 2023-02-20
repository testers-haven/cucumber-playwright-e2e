import { Then } from '@cucumber/cucumber'
import { waitFor } from '../../support/wait-for-behaviour';
import { getElementLocator } from "../../support/web-element-helper";
import { ScenarioWorld } from '../setup/world';

Then(
    /^the "([^"]*)" should contain the text "(.*)"$/,
    async function(this: ScenarioWorld, elementKey: string, expectedElementText: string) {
        const {
            screen: { page },
            globalVariables,
            globalConfig
        } = this;

        const elementIdentifier = getElementLocator(page, elementKey, globalVariables, globalConfig);
        await  waitFor(async() => {
            const elementText = (await page.textContent(elementIdentifier));
            return elementText?.includes(expectedElementText);
        });

    }
)