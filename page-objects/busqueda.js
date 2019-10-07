//MODULO ACCESIBLE GLOBALMENTE
module.exports = {

    elements: {
        email: by.id('edit-email'),
        password: by.id('edit-password')
    },


    login: function(email, password) {

        driver.findElement(by.name('email')).sendKeys(email);
        return driver.findElement(by.name('password')).sendKeys(password, selenium.Key.ENTER);
    }
};