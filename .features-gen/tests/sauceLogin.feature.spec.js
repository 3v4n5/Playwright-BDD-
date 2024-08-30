/** Generated from: tests\sauceLogin.feature */
import { test } from "playwright-bdd";

test.describe("Hacer Login", () => {

  test("Verificar si el usuario es valido al ingresar con credenciales", async ({ Given, page, When, And, Then }) => {
    await Given("que el usuario ingresa a \"https://www.saucedemo.com/\"", null, { page });
    await When("escribe el nombre de usuario \"standard_user\" y la conntrasenia \"secret_sauce\"", null, { page });
    await And("da click en el boton", null, { page });
    await Then("la url al acceder es \"/inventory.html\"", null, { page });
  });

  test.describe("Intento de inicio de sesión escenario outline", () => {

    test("Example #1", async ({ Given, page, When, And, Then }) => {
      await Given("que el usuario ingresa a \"https://www.saucedemo.com/\"", null, { page });
      await When("escribe el nombre de usuario \"standard_user\" y la conntrasenia \"secret_sauce\"", null, { page });
      await And("da click en el boton", null, { page });
      await Then("la url al acceder es \"/inventory.html\"", null, { page });
    });

    test("Example #2", async ({ Given, page, When, And, Then }) => {
      await Given("que el usuario ingresa a \"https://www.saucedemo.com/\"", null, { page });
      await When("escribe el nombre de usuario \"visual_user\" y la conntrasenia \"secret_sauce\"", null, { page });
      await And("da click en el boton", null, { page });
      await Then("la url al acceder es \"/inventory.html\"", null, { page });
    });

    test("Example #3", async ({ Given, page, When, And, Then }) => {
      await Given("que el usuario ingresa a \"https://www.saucedemo.com/\"", null, { page });
      await When("escribe el nombre de usuario \"performance_glitch_user\" y la conntrasenia \"secret_sauce\"", null, { page });
      await And("da click en el boton", null, { page });
      await Then("la url al acceder es \"/inventory.html\"", null, { page });
    });

  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("tests\\sauceLogin.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Verificar si el usuario es valido al ingresar con credenciales": {"pickleLocation":"7:1"},
  "Intento de inicio de sesión escenario outline|Example #1": {"pickleLocation":"22:7"},
  "Intento de inicio de sesión escenario outline|Example #2": {"pickleLocation":"23:7"},
  "Intento de inicio de sesión escenario outline|Example #3": {"pickleLocation":"24:7"},
};