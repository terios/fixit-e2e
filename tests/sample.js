module.exports = {
    'Demo test Google': function(browser) {
        browser
            .url('https://www.tayara.tn')
            .waitForElementVisible('body', 2000)
            .setValue('input[id=search-input]', 'voiture')
            .click('button[id=search-desktop]')
            .pause(2000)
            .assert.containsText('title', 'voiture | A vendre | Toute la Tunisie | Tayara.tn')
            .end();
    }
};