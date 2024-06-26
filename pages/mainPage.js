class MainPage {
  constructor(page) {
    this.page = page;

    //locators 
    this.AcceptAllCookiesBtn = page.locator('#onetrust-accept-btn-handler');


  }

  // Methods
  async goToMainPage() {
    await this.page.goto('/');
  }

  async clickAcceptAllCookies() {
    await this.AcceptAllCookiesBtn.click();
  }

}

export default MainPage 