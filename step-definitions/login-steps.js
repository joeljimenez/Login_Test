//MODULO SELENIUM QUE TRABAJA CON CUCUMBER PARA RESCATAR LOS DATOS Y TRABAR CON ELLOS
module.exports = function() {

    this.When(/^Entrar al Sitio con  "([^"]*)" "([^"]*)"$/, function(email, password) {

        return helpers.loadPage('http://fccpanama.com/login').then(function() {

            return page.busqueda.login(email, password);
        })

    });
    this.Then(/^Deberia Entrar al Dashboard$/, function(callback) {
        // Write code here that turns the phrase above into concrete actions
        return 'pending'
    });




};