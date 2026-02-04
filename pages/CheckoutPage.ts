import { Page, Locator, expect } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly addressInput: Locator;
  readonly cityInput: Locator;
  readonly regionSelect: Locator;
  readonly zipCodeInput: Locator;
  readonly countrySelect: Locator;
  readonly continueButton: Locator;
  readonly confirmOrderButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameInput = page.locator('#guestFrm_firstname');
    this.lastNameInput = page.locator('#guestFrm_lastname');
    this.emailInput = page.locator('#guestFrm_email');
    this.addressInput = page.locator('#guestFrm_address_1');
    this.cityInput = page.locator('#guestFrm_city');
    this.regionSelect = page.locator('#guestFrm_zone_id');
    this.zipCodeInput = page.locator('#guestFrm_postcode');
    this.countrySelect = page.locator('#guestFrm_country_id');
    this.continueButton = page.getByRole('button', { name: 'Continue' });
    this.confirmOrderButton = page.getByRole('button', { name: 'Confirm Order' })
  }

  async fillClientDetails() {
    await this.firstNameInput.fill('Ellen');
    await this.lastNameInput.fill('Neri');
    await this.emailInput.fill(`ellen.neri.@test.com`);
    await this.addressInput.fill('123 Test Street');
    await this.cityInput.fill('New York');
    await this.countrySelect.selectOption({ label: 'United States' });
    await this.regionSelect.selectOption({ label: 'New York' });
    await this.zipCodeInput.fill('10001');
    
    await this.continueButton.click();
  }

  async verifyConfirmOrderVisible() {
    await expect(this.confirmOrderButton).toBeVisible();
  }
}