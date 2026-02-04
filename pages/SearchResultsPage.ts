import { Page, Locator } from '@playwright/test';

export class SearchResultsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async selectProduct(productName: string) {
    await this.page.getByRole('link', { name: productName}).click();
  }
}