const language = 'English';
const country = 'Australia';

class Header {
  constructor(page) {
    this.page = page;

    //locators     
    this.CountryAndLangBtn = page.locator('header .licLangSw')
    this.DropdownCountry = page.getByRole('textbox');    
    this.GetCountry = page.locator('li.js-analyticsClick').getByRole('link', { name: country });
    this.GetLanguage = page.getByRole('link', { name: language });

    //Menu
    this.getEducationMenu = page.locator('a[data-type="nav_id96"]');

    // Platform
    this.LogoCapitalOnPlatform = page.locator('a.logo');
    this.AccountModeLive = page.locator('div.account__mode_live');
    this.AccountModeDemo = page.locator('div.account__mode_demo');

    // Countries
    this.GermanyCountry = page.locator('li.js-analyticsClick[data-type="nav_country_germany"]');
    this.TurkeyCountry = page.locator('li.js-analyticsClick[data-type="nav_country_turkey"]');
    this.Australia = page.locator('li.js-analyticsClick[data-type="nav_country_australia"]');
    this.UnitedKingdomCountry = page.getByRole('link', {name: 'United Kingdom'});
    this.SpainCountry = page.locator('li.js-analyticsClick[data-type="nav_country_spain"]');
    this.ArabicCountry = page.locator('li.js-analyticsClick[data-type="nav_country_united_arab_emirates"]');
    this.FranceCountry = page.locator('li.js-analyticsClick[data-type="nav_country_france"]');
    this.GermanyCountry = page.locator('li.js-analyticsClick[data-type="nav_country_germany"]');
    this.GreeceCountry = page.locator('li.js-analyticsClick[data-type="nav_country_greece"]');
    this.PolandCountry = page.locator('li.js-analyticsClick[data-type="nav_country_poland"]');
  }



  // Methods

  async hoverCountryAndLang() {
    await this.CountryAndLangBtn.hover()
  }

  async clickDropdownCountry() {
    await this.DropdownCountry.first().click();
  }

  async clickGetCountry() {
    await this.GetCountry.click();
  }

  async hoverEducationMenu() {
    await this.getEducationMenu.hover();
  }

  async clickEducationMenu() {
    await this.getEducationMenu.click();
  }


  async selectCountry() {
    await page.hover('селектор_элемента1');
    await page.evaluate(() => {
      const div = document.querySelector('div.licLangSw.js-licLangSw');
      div.classList.add('active');
    });

    // Дождитесь, пока меню станет видимым после добавления класса 'active'
    await page.waitForSelector('div.licLangSw.js-licLangSw.active', { state: 'visible' });

    // Выполнение клика по ссылке внутри div
    await page.click('селектор_ссылки_внутри_div');

    //await this.page.waitForSelector('ul.licLangSw__countries', { state: 'visible' });
    //page.locator('ul.licLanlicLangSw__wrapgSw__countries')
    await this.page.locator('#selectedCountryName').click()
    await this.page.locator('li[data-type="nav_country_australia"]').click()
  }
}

export default Header