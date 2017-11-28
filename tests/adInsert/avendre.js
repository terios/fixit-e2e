module.exports = {
    before : function(browser) {
        console.log('before...');
    },
    after : function(browser) {
        console.log('after...');
    },
    beforeEach : function(browser, done) {
        console.log('beforeEach...');
        // browser.resizeWindow(1440, 800, done);
        done();
    },
    afterEach : function() {
        console.log('afterEach...');
    },
    'step 1: open IMMO AI': function(client) {
        client
            .url(client.launch_url)
            .waitForElementVisible('body', 2000)
            .assert.containsText('#intro-modal', 'Bienvenue sur la nouvelle page d\'insertion d\'annonces immobilières d\'Avito!')
            .click('#intro-modal button')
            .pause(2000)
    },
    'step 2: set category': function(client) {
        client
            .click('select[id="category"] option[value="1090"]')
            .click(".region-select.normal-index .custom-select")
            .click(".region-select.normal-index .option[data-value='1']")
            .click("#area_hub .custom-select")
            .click("#area_hub .option[data-value='161']")
    },
    'step 3: choose package': function(client){
        client
            .click('#free')
    },
    'step 4: set Ad params': function(client) {
        var adParams = client.page.adParams()
        adParams
            .setValue('@size', 120)
            .setValue('@title', 'appartement a vendre fixit')
            .setValue('@description', 'appartement a vendre fixit fixit fixit fixit fixit fixit fixit fixit')
            .setValue('@price', 1000000)

        var userParams = client.page.userParams()
        userParams
            .setValue('@name', 'user x')
            .setValue('@email', 'usppepprx@mail.com')
            .setValue('@password', 'azerty')
            .setValue('@phone', '0667187877')
    },
    'step 5': function(client){
        client
            .click('input[type=submit]')
            .pause(8000)
            .end();
    } 
};