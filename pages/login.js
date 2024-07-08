import { expect } from "@playwright/test";
import { USER_DATA, PLATFORMURL } from "../helpers/testData";
import Header from "./header";

class Login {
  constructor(page, header) {
    this.page = page;
    this.header = header;

    //locators En language
    this.getLoginForm = page.locator('#l_overlay > .form-container-white');
    this.getEmailField = page.getByRole('textbox', { name: 'Email address' });
    this.getPasswordField = page.getByRole('textbox', { name: 'Password' });
    this.getContinueBtn = page.getByRole('button', { name: 'Continue' });
    this.getMyAccountButton = page.locator('header').getByRole('button', { name: 'My account' });
    this.getLogout = page.locator('.logout-user')//page.getByText('Logout')

  }

  //Methods

  async userAutorizes() {
    await this.clickHeaderLoginButton();
    await this.validLoginForm();
    await this.page.waitForNavigation();
    await expect(this.page).toHaveURL(PLATFORMURL.platformBaseUrl)
    await this.page.goBack();
    await this.checkMyAccountButton();
  }

  async userUnautoruzed() {
    await this.clickHeaderLoginButton();
    await this.validLoginForm();
    await this.page.waitForNavigation();
   // await this.page.waitForLoadState('load')
    await this.page.goBack();
    await this.page.waitForLoadState('load');      
    await this.checkMyAccountButton();    
    await this.getMyAccountButton.scrollIntoViewIfNeeded();
   // await this.getMyAccountButton.focus();
    await this.clickMyAcoountBtn()  
    await this.getLogout.scrollIntoViewIfNeeded();
    await this.clickLogoutBtn()   
  }

  async clickHeaderLoginButton() {
    await this.header.clickLoginButton();
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

  async clickMyAcoountBtn() {
    await this.getMyAccountButton.click(); 
  }

  async clickLogoutBtn() {
   // await this.getLogout.scrollIntoViewIfNeeded();
    await this.getLogout.click();  
  }

}
export default Login