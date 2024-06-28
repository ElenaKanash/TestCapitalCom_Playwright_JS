import { test, expect } from "@playwright/test";
import MainPage from "../pages/mainPage";
import Header from "../pages/header";
import SignUp from "../pages/signUp";



const language = 'en';
const country = 'Australia';
const license = 'ASIC';

test.describe('JS/US_11.01.07_Menu [Educations] > Menu item [Glossary of trading terms]  on UnReg Role', () => {

  test.beforeEach(async ({ page }) => {
    const mainPage = new MainPage(page);
    const header = new Header(page);    

    await mainPage.goToMainPage();
    await mainPage.clickAcceptAllCookies();
    await header.hoverCountryAndLang();
    await header.clickDropdownCountry();
    await header.clickGetCountry();
    await header.hoverEducationMenu();
  });

  test(`JS/TC_11.01.07!00_01_Unreg | Educations > Menu item" [Glossary of trading terms] > Click button [1. Create & verify your account ] on block "Steps trading" (Still looking for a platform/broker you can trust?) on '${language}' language and '${license}' license`, async ({ page }) => {
      //await header.clickSignUpButton();
    //await signUp.validSignUpForm();


  });

});