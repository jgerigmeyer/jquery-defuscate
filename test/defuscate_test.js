(function ($) {
    /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
        module(name, {[setup][ ,teardown]})
        test(name, callback)
        expect(numberOfAssertions)
        stop(increment)
        start(decrement)
    Test assertions:
        ok(value, [message])
        equal(actual, expected, [message])
        notEqual(actual, expected, [message])
        deepEqual(actual, expected, [message])
        notDeepEqual(actual, expected, [message])
        strictEqual(actual, expected, [message])
        notStrictEqual(actual, expected, [message])
        throws(block, [expected], [message])
    */

    module('jQuery#defuscate', {
        // This will run before each test in this module.
        setup: function () {
            this.elems = $('#qunit-fixture .tests').children();
            this.results = $('#qunit-fixture .results').children();
        }
    });

    test('is chainable', 1, function() {
        strictEqual(this.elems.defuscate(), this.elems, 'should be chainable');
    });

    test('defuscateHref', 3, function () {
        strictEqual(this.elems.eq(0).defuscate('defuscateHref', this.elems.eq(0).attr('href')), this.results.eq(0).attr('href'));
        strictEqual(this.elems.eq(1).defuscate('defuscateHref', this.elems.eq(1).attr('href')), this.results.eq(1).attr('href'));
        strictEqual(this.elems.eq(2).defuscate('defuscateHref', this.elems.eq(2).attr('href')), this.results.eq(2).attr('href'));
    });

    test('defuscateHtml', 6, function () {
        strictEqual(this.elems.eq(0).defuscate('defuscateHtml', this.elems.eq(0).html(), true), this.results.eq(0).html());
        strictEqual(this.elems.eq(0).defuscate('defuscateHtml', this.elems.eq(1).html(), true), this.results.eq(1).html());
        strictEqual(this.elems.eq(0).defuscate('defuscateHtml', this.elems.eq(2).html(), true), this.results.eq(2).html());
        strictEqual(this.elems.eq(0).defuscate('defuscateHtml', this.elems.eq(3).html(), false), this.results.eq(3).html());
        strictEqual(this.elems.eq(0).defuscate('defuscateHtml', this.elems.eq(4).html(), false), this.results.eq(4).html());
        strictEqual(this.elems.eq(0).defuscate('defuscateHtml', this.elems.eq(5).html(), false), this.results.eq(5).html());
    });

    test('updateHref', 3, function () {
        strictEqual(
            this.elems.eq(0).defuscate('updateHref', this.elems.eq(0), this.results.eq(0).attr('href')).attr('href'),
            this.results.eq(0).attr('href')
        );
        strictEqual(
            this.elems.eq(1).defuscate('updateHref', this.elems.eq(1), this.results.eq(1).attr('href')).attr('href'),
            this.results.eq(1).attr('href')
        );
        strictEqual(
            this.elems.eq(2).defuscate('updateHref', this.elems.eq(2), this.results.eq(2).attr('href')).attr('href'),
            this.results.eq(2).attr('href')
        );
    });

    test('updateHtml', 6, function () {
        strictEqual(
            this.elems.eq(0).defuscate('updateHtml', this.elems.eq(0), this.results.eq(0).html()).html(),
            this.results.eq(0).html()
        );
        strictEqual(
            this.elems.eq(1).defuscate('updateHtml', this.elems.eq(1), this.results.eq(1).html()).html(),
            this.results.eq(1).html()
        );
        strictEqual(
            this.elems.eq(2).defuscate('updateHtml', this.elems.eq(2), this.results.eq(2).html()).html(),
            this.results.eq(2).html()
        );
        strictEqual(
            this.elems.eq(3).defuscate('updateHtml', this.elems.eq(3), this.results.eq(3).html()).html(),
            this.results.eq(3).html()
        );
        strictEqual(
            this.elems.eq(4).defuscate('updateHtml', this.elems.eq(4), this.results.eq(4).html()).html(),
            this.results.eq(4).html()
        );
        strictEqual(
            this.elems.eq(5).defuscate('updateHtml', this.elems.eq(5), this.results.eq(5).html()).html(),
            this.results.eq(5).html()
        );
    });

    test('integration', 1, function () {
        strictEqual(this.elems.defuscate().html(), this.results.html());
    });

}(jQuery));
