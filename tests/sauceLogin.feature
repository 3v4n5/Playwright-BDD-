
Feature: Hacer Login 

Ingresar a Sauce demo y verificar las credenciales validas e invalidas


Scenario: Verificar si el usuario es valido al ingresar con credenciales
    Given que el usuario ingresa a "https://www.saucedemo.com/"
    When escribe el nombre de usuario "standard_user" y la conntrasenia "secret_sauce"
    And da click en el boton 
    Then la url al acceder es "/inventory.html" 


  Scenario Outline: Intento de inicio de sesión escenario outline
    Given que el usuario ingresa a "https://www.saucedemo.com/"
    When escribe el nombre de usuario "<usuario>" y la conntrasenia "<contraseña>"
    And da click en el boton 
    Then la url al acceder es "<url>" 

    Examples:
      | usuario                  | contraseña   | url             |
      | standard_user            | secret_sauce | /inventory.html |
      | visual_user              | secret_sauce | /inventory.html |
      | performance_glitch_user  | secret_sauce | /inventory.html |