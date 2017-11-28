module.exports = {
    before : function(browser) {
        console.log('before...');
    },

    after : function(browser) {
        console.log('after...');
    },

    beforeEach : function(browser) {
        console.log('beforeEach...');
    },

    afterEach : function() {
        console.log('afterEach...');
    },
    'step one: set search filters': function(browser) {
        browser
            .url('https://www.tayara.tn')
            .waitForElementVisible('body', 2000)
            .setValue('input[id=search-input]', 'voiture')
            .click('button[id=search-desktop]')
    },
    'step two: check search results': function(browser) {
        browser
            .pause(2000)
            .getTitle(function(title) {
                console.log('title ', title);
                this.assert.equal(title, 'voiture | A vendre | Toute la Tunisie | Tayara.tn');
            })
            .end();
    }
};