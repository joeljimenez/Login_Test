Feature: Poder entrar a un Sistema de Login de Prueba
  Es una Pagina  de internet
  Para poder probar si la pagina web cuenta con las validaciones necesarias
  para poder Subirlo a produccion
 
Scenario: Iniciar Sesion En FCCPANAMA
    When Entrar al Sitio con  "soporte@scarletbytes.com" "Panama2018"
    Then Deberia Entrar al Dashboard
 