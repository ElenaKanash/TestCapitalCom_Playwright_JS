import { expect } from "@playwright/test";
import { USER_DATA, PLATFORMURL } from "../helpers/testData";
import Header from "./header";


class Login {
  constructor(page) {
    this.page = page;

    //locators En language
    this.getLoginForm = page.locator('#l_overlay > .form-container-white');
    this.getEmailField = page.getByRole('textbox', { name: 'Email address' });
    this.getPasswordField = page.getByRole('textbox', { name: 'Password' });
    this.getContinueBtn = page.getByRole('button', { name: 'Continue' });
    this.getMyAccountButton = page.locator('header').getByRole('button', { name: 'My account' });
    this.getLogout = page.locator('.logout-user')//page.getByText('Logout')
    this.getLoginBtn = page.locator('header').getByRole('link', { name: 'Log in' });

  }

  //Methods

  async userAutorizes() {
    //await this.clickLoginButton();
    await this.validLoginForm();
    await this.page.waitForNavigation();
    await expect(this.page).toHaveURL(PLATFORMURL.platformBaseUrl)
    await this.page.goBack();
    await this.checkMyAccountButton();
  }

  async userUnautoruzed() {
    //await this.clickLoginButton();
    await this.validLoginForm();
    await this.page.waitForNavigation();
    await this.page.goBack();
    await this.page.waitForLoadState('load');
    await this.checkMyAccountButton();   
    await this.getMyAccountButton.scrollIntoViewIfNeeded();
    await this.getMyAccountButton.focus();
    await this.getMyAccountButton.click({ timeout: 25000 });    
    await this.getLogout.scrollIntoViewIfNeeded();
    await this.getLogout.focus()
    await this.getLogout.click({ timeout: 25000 });
    await expect(this.getLoginBtn).toBeVisible(); 
  }

  async clickLoginButton() {
    const header = new Header();
    await header.getLoginButton.click()
  }

  async validLoginForm() {
    await this.fillEmailField();
    await this.fillPasswordField();
    await this.clickContinueBtn();
  }

  async fillEmailField() {
    await this.getEmailField.fill(USER_DATA.email)
    await expect(this.getEmailField).toHaveValue(USER_DATA.email);
  }

  async fillPasswordField() {
    await this.getPasswordField.fill(USER_DATA.password)
    await expect(this.getPasswordField).toHaveValue(USER_DATA.password);
    await this.getPasswordField.blur();
  }

  async clickContinueBtn() {
    await this.getContinueBtn.click();

  }
  async checkMyAccountButton() {
    await expect(this.getMyAccountButton).toBeVisible();
  }

}
export default Login