const language = 'English';
const country = 'Australia';

class Header {
  constructor(page) {
    this.page = page;

    //locators     
    this.getCountryAndLangBtn = page.locator('header .licLangSw')
    this.getDropdownCountry = page.getByRole('textbox');    
    this.getCountry = page.locator('li.js-analyticsClick').getByRole('link', { name: country });
    this.getLanguage = page.getByRole('link', { name: language });
    this.getSignUpButton = page.locator('header').getByRole('link', { name: 'Sign up' });
    this.getLoginButton = page.locator('header').getByRole('link', { name: 'Log in' });
    this.getMyAccountButton = page.locator('header').getByRole('link', { name: 'My account' });



    //Menu
    //this.getEducationMenu = page.locator('a[data-type="nav_id96"]');  Education
    this.getEducationMenu = page.locator('header').getByRole('link', { name: 'Education' }); 
    this.getEducationGlossarySubMenu = page.locator('header').getByRole('link', { name: 'Glossary of trading terms' });

    // Platform
    this.getLogoCapitalOnPlatform = page.locator('a.logo');
    this.getAccountModeLive = page.locator('div.account__mode_live');
    //this.get.AccountModeDemo = page.locator('div.account__mode_demo');

    // Countries
    this.getGermanyCountry = page.locator('li.js-analyticsClick[data-type="nav_country_germany"]');
    this.getTurkeyCountry = page.locator('li.js-analyticsClick[data-type="nav_country_turkey"]');
    this.getAustralia = page.locator('li.js-analyticsClick[data-type="nav_country_australia"]');
    this.getUnitedKingdomCountry = page.getByRole('link', {name: 'United Kingdom'});
    this.getSpainCountry = page.locator('li.js-analyticsClick[data-type="nav_country_spain"]');
    this.getArabicCountry = page.locator('li.js-analyticsClick[data-type="nav_country_united_arab_emirates"]');
    this.getFranceCountry = page.locator('li.js-analyticsClick[data-type="nav_country_france"]');
    this.getGermanyCountry = page.locator('li.js-analyticsClick[data-type="nav_country_germany"]');
    this.getGreeceCountry = page.locator('li.js-analyticsClick[data-type="nav_country_greece"]');
    this.getPolandCountry = page.locator('li.js-analyticsClick[data-type="nav_country_poland"]');
  }

  // Methods

  async hoverCountryAndLang() {
    await this.getCountryAndLangBtn.hover()
  }

  async clickDropdownCountry() {
    await this.getDropdownCountry.first().click();
  }

  async clickGetCountry() {
    await this.getCountry.click();
  }

  async hoverEducationMenu() {
    await this.getEducationMenu.hover();
  }

  async clickEducationGlossarySubMenu() {
    await this.getEducationGlossarySubMenu.click();
  }

  async clickSignUpButton() {
    await this.getSignUpButton.click();
  }

  async clickLoginButton() {
    await this.getLoginButton.click();
  }

  
}

export default Header