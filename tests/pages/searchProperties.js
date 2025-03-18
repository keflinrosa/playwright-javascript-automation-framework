import { BasePage } from "./BasePage";
import { searchPropertiesElements } from "../elements/searchPropertiesElements";

export class SearchProperties extends BasePage {

    async acceptCookies() {
        await this.clickElement(searchPropertiesElements.acceptCookies);
    }

    async searchLocation(location) {
        await this.fillInput(searchPropertiesElements.searchInput, location);
        await this.page.locator(searchPropertiesElements.searchResult).filter({ hasText: new RegExp(`^${location}$`) }).click();
    }

    async validateSearchResults(location) {
        await this.expectToContainText(searchPropertiesElements.headerTitle, `Properties For Sale in Greater ${location}`);
        await this.page.locator(searchPropertiesElements.resultCount).isVisible()
    }
}