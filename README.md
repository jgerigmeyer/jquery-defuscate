# Defuscate

jQuery Email Defuscator Plugin

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/jgerigmeyer/jquery-defuscate/master/dist/defuscate.min.js
[max]: https://raw.github.com/jgerigmeyer/jquery-defuscate/master/dist/defuscate.js

In your web page:

```html
<a href="mailto:test1(which is 'at' the)test.com" class="email">test1(which is "at" the)test.com</a>
<span class="email">test2(still at)test.com</span>

<script src="jquery.js"></script>
<script src="dist/defuscate.min.js"></script>
<script>
jQuery(function($) {
  $('.email').defuscate();
  // <a href="mailto:test1@test.com" class="email">test1@test.com</a>
  // <span class="email"><a href="mailto:test2@test.com">test2@test.com</a></span>
});
</script>
```

## Release History

* 1.0.0 - (3/14/2014) Add bower.json; remove AMD support
* 0.1.1 - (5/8/2013) Add AMD support
* 0.1.0 - (5/7/2013) Initial beta release
