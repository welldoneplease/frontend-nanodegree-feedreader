/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        // loop through the feed items and check the url property
        it('individual feeds "urls" are defined', function() {
            for(var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        // loop through the feed items and check the name property
        it('individual feeds "names" are defined', function() {
            for(var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {

        // set up variables
        // get body and icon element
        var body = $('body'),
            icon = $('.menu-icon-link');

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         // check if body per default hast the menu-hidden class
         it('is hidden by default', function() {
             expect(body.hasClass('menu-hidden')).toBe(true);
         });

        /* TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */

        // check after clicks on the icon if the body loses menu-hidden class
        it('should be visible upon click and hidden on another click', function() {
            icon.click();
            expect(body.hasClass('menu-hidden')).toBe(false);
            icon.click();
            expect(body.hasClass('menu-hidden')).toBe(true);
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        // set up the call to the asyn call with the udacity blog id
        beforeEach(function(done) {
            loadFeed(0,done);
        });

        // make sure there is something in the feed entry element after the call completes
        it("have at least a single .entry element within the .feed container", function(done) {
            expect($('.feed .entry').length).not.toBe(0);
            done();
        });
    });


    /* TODO: Write a new test suite named "New Feed Selection"*/
    describe('New Feed Selection', function() {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

        // set up a variable to be usable in beforeEach and it function
        var feedItemOld;

        beforeEach(function(done) {
            // get the content of the first feed entry
            feedItemOld = $('.feed .entry-link').first().text();
            // make a call to the css tricks feed url
            loadFeed(1, done);
        });

        it("feed content has changed", function(done) {
            // get the content of the first feed entry AFTER the call
            var feedItemNew = $('.feed .entry-link').first().text();
            // check that both items are not matching
            expect(feedItemOld).not.toMatch(feedItemNew);
            done();
        });
    });
}());
