(function ($) {

  'use strict';

  module('jQuery#defuscate', {
    // This will run before each test in this module.
    setup: function () {
      this.elems = $('#qunit-fixture .tests').children();
      this.results = $('#qunit-fixture .results').children();
    }
  });

  test('is chainable', function() {
    strictEqual(this.elems.defuscate(), this.elems, 'should be chainable');
  });

  test('defuscateHref', function () {
    strictEqual(this.elems.eq(0).defuscate('defuscateHref', this.elems.eq(0).attr('href')), this.results.eq(0).attr('href'));
    strictEqual(this.elems.eq(1).defuscate('defuscateHref', this.elems.eq(1).attr('href')), this.results.eq(1).attr('href'));
    strictEqual(this.elems.eq(2).defuscate('defuscateHref', this.elems.eq(2).attr('href')), this.results.eq(2).attr('href'));
  });

  test('defuscateHtml', function () {
    strictEqual(this.elems.eq(0).defuscate('defuscateHtml', this.elems.eq(0).html(), true), this.results.eq(0).html());
    strictEqual(this.elems.eq(0).defuscate('defuscateHtml', this.elems.eq(1).html(), true), this.results.eq(1).html());
    strictEqual(this.elems.eq(0).defuscate('defuscateHtml', this.elems.eq(2).html(), true), this.results.eq(2).html());
    strictEqual(this.elems.eq(0).defuscate('defuscateHtml', this.elems.eq(3).html(), false), this.results.eq(3).html());
    strictEqual(this.elems.eq(0).defuscate('defuscateHtml', this.elems.eq(4).html(), false), this.results.eq(4).html());
    strictEqual(this.elems.eq(0).defuscate('defuscateHtml', this.elems.eq(5).html(), false), this.results.eq(5).html());
  });

  test('updateHref', function () {
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

  test('updateHtml', function () {
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

  test('integration', function () {
    strictEqual(this.elems.defuscate().html(), this.results.html());
  });

  test('if first arg not a method or object, returns an error', function () {
    sinon.stub($, 'error');
    this.elems.eq(0).defuscate('test');

    ok($.error.calledOnce, '$.error was called once');
    ok($.error.calledWith('Method test does not exist on jQuery.defuscate'), '$.error was passed error msg');

    $.error.restore();
  });

}(jQuery));
