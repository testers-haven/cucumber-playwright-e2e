import { Given } from '@cucumber/cucumber'
import { ScenarioWorld } from './setup/world';
import { PageId } from '../env/global';
import { navigateToPage } from '../support/navigation-behaviour';

Given(
    /^I am on the "([^"]*)" page$/,
    async function(pageId: PageId) {
        const {
            screen: { page },
            globalConfig
        } = this;

        console.log(`I am on the ${pageId} page`);

        await navigateToPage(page, pageId, globalConfig);

    }
)