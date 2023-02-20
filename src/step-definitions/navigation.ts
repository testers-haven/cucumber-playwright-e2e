import { Given } from '@cucumber/cucumber'
import { ScenarioWorld } from './setup/world';
import { PageId } from '../env/global';
import { navigateToPage, currentPathMatchesPageId } from '../support/navigation-behaviour';
import { waitFor } from '../support/wait-for-behaviour';

Given(
    /^I am on the "([^"]*)" page$/,
    async function(this: ScenarioWorld, pageId: PageId) {
        const {
            screen: { page },
            globalConfig
        } = this;

        console.log(`I am on the ${pageId} page`);

        await navigateToPage(page, pageId, globalConfig);

        await waitFor(() => currentPathMatchesPageId(page, pageId, globalConfig));
    }
)