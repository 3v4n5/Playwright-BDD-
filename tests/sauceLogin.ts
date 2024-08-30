import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
const { Given, When, Then } = createBdd();

Given('que el usuario ingresa a {string}', async ({ page }, url) => {
    await page.goto( url )
});

When('escribe el nombre de usuario {string} y la conntrasenia {string}', async ({ page }, usuario, contrasenia) => {
    await page.locator('#user-name').fill(usuario);
    await page.locator('#password').fill(contrasenia);
}); 

When('da click en el boton', async ({ page }) => {
   await page.locator('#login-button').click()
});

Then('la url al acceder es {string}', async ({ page }, inventoryUrl) => {
   await expect( page ).toHaveURL(new RegExp( inventoryUrl ))
});

