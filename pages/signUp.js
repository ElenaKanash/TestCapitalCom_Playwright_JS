import { expect } from "@playwright/test";
import { USER_DATA, PLATFORMURL } from "../helpers/testData";

class SignUp {
  constructor(page) {
    this.page = page;

    //locators En language
    this.getSignUpForm = page.locator('.signup-form ');
    this.getEmailField = page.getByRole('textbox', { name: 'Email address' });
    this.getPasswordField = page.getByRole('textbox', { name: 'Password' });
    this.getContinueBtn = page.getByRole('button', { name: 'Continue' });


  }

  //Methods
  async validSignUpForm() {

    await this.fillEmailField();
    await this.fillPasswordField();
    await this.clickContinueBtn();
  }

  async fillEmailField() {    await this.getEmailField.fill(USER_DATA.email)
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

}
export default SignUp