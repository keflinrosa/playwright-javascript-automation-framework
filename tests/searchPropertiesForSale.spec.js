import { test } from './setup/fixtures'; 
import { SearchProperties } from './pages/searchProperties';
import { searchPropertiesData } from './data/searchData';

test.describe('Search properties for sale', async () => {
  test('Search by City Name', async ({ page }) => {
    const searchProperties = new SearchProperties(page);
    
    test.step('Enter a city', async () => {
      await searchProperties.searchLocation(searchPropertiesData.byCityName);
      await searchProperties.validateSearchResults(
        searchPropertiesData.byCityName
      );      
    });
  });
});