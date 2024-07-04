import { test, expect } from "@playwright/test";
import MainPage from "../pages/mainPage";
import Header from "../pages/header";
import Login from './../pages/login';

const language = 'EN';
const country = 'Australia';
const license = 'ASIC';

test.describe('JS/US_11.01.07_Menu [Educations] > Menu item [Glossary of trading terms]  on UnReg Role', () => {

  test.beforeEach(async ({ page }) => {
    const mainPage = new MainPage(page);
    const header = new Header(page);

    await mainPage.goToMainPage();
    await mainPage.clickAcceptAllCookies();
    await header.selectCountry();
  });

  test(`JS/TC_11.01.07!00_01_Unreg | Educations > Menu item" [Glossary of trading terms] > Click button [1. Create & verify your account ] on block "Steps trading" (Still looking for a platform/broker you can trust?) on '${language}' language and '${license}' license`, async ({ page }) => {
    const header = new Header(page);
    await header.hoverEducationMenu();
    await header.clickEducationGlossarySubMenu();
  });

});

test.describe('JS/US_11.01.07_Menu [Educations] > Menu item [Glossary of trading terms]  on UnAuth Role', () => {

  test.beforeEach(async ({ page }) => {
    const mainPage = new MainPage(page);
    const header = new Header(page);
    const login = new Login(page);

    await mainPage.goToMainPage();
    await mainPage.clickAcceptAllCookies();
    await header.selectCountry();
    await header.clickLoginButton();
    await login.userUnautoruzed();
  });

  test(`JS/TC_11.01.07!00_01_UnAuth | Educations > Menu item" [Glossary of trading terms] > Click button [1. Create & verify your account ] on block "Steps trading" (Still looking for a platform/broker you can trust?) on '${language}' language and '${license}' license`, async ({ page }) => {
    const header = new Header(page);
    await header.hoverEducationMenu();
    await header.clickEducationGlossarySubMenu();
  });

});

test.describe('JS/US_11.01.07_Menu [Educations] > Menu item [Glossary of trading terms]  on Auth Role', () => {

  test.beforeEach(async ({ page }) => {
    const mainPage = new MainPage(page);
    const header = new Header(page);
    const login = new Login(page);

    await mainPage.goToMainPage();
    await mainPage.clickAcceptAllCookies();
    await header.selectCountry();
    await header.clickLoginButton();    
    await login.userAutorizes();
  });


  test(`JS/TC_11.01.07!00_01_Auth | Educations > Menu item" [Glossary of trading terms] > Click button [1. Create & verify your account ] on block "Steps trading" (Still looking for a platform/broker you can trust?) on '${language}' language and '${license}' license`, async ({ page }) => {
    const header = new Header(page);
    await header.hoverEducationMenu();
    await header.clickEducationGlossarySubMenu();
  });

});