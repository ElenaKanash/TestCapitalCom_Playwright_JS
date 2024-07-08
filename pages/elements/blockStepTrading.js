class BlockStepTrading {
  constructor(page){
    this.page = page;

    //this.getCreateAndVerifyYourAccountIcon = page.locator('.regSteps__shape > i[data-type="banner_with_steps"]');
    //this.getCreateAndVerifyYourAccountText = page.locator('`.regSteps__shape > b:has-text("${text}")`')
    this.getCreateAndVerifyYourAccountBtn = page.locator('.regSteps__shape > i[data-type="banner_with_steps"], .regSteps__shape > b')
  }

  async clickCreateAndVerifyYourAccountBtn() {
    await this.getCreateAndVerifyYourAccountBtn.click();
  }

}
export default BlockStepTrading



  


