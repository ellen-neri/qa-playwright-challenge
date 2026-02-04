import { Page, Locator } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly checkoutButton: Locator;
  readonly guestCheckoutRadio: Locator;
  readonly continueButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkoutButton = page.getByRole('link', { name: 'Checkout' });
    this.guestCheckoutRadio = page.getByRole('radio', { name: 'Guest Checkout' })
    this.continueButton = page.getByRole('button', { name: 'Continue' })
  }

  async proceedToCheckout() {
    await this.checkoutButton.first().click();
  }

  async selectCheckoutAsGuest() {
    await this.guestCheckoutRadio.click();
    await this.continueButton.click();
  }
}