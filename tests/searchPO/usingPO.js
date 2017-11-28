module.exports = {
    before : function(browser) {
        console.log('before...');
    },
    after : function(browser) {
        console.log('after...');
    },
    beforeEach : function(browser, done) {
        console.log('beforeEach...');
        browser.resizeWindow(1440, 800, done);
        // done();
    },
    afterEach : function() {
        console.log('afterEach...');
    },
    'step one: set search filters': function(client) {
        var searchBox = client.page.searchBox()
        searchBox
            .navigate(client.launch_url)
            .waitForElementVisible('body', 2000)
            .setValue('@queryInput', 'voiture')
            .click('@doSearchDesktop')
    },
    'step two: check search results': function(client) {
        client
            .pause(2000)
            .getTitle(function(title) {
                console.log('title ', title);
                this.assert.equal(title, 'voiture | A vendre | Toute la Tunisie | Tayara.tn');
            })
            .end();
    }
};