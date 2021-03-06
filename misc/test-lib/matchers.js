// jasmine matcher for expecting an element to have a css class
// https://github.com/angular/angular.js/blob/master/test/matchers.js

/* eslint angular/document-service:0 */
/* eslint angular/definedundefined:0 */
beforeEach(function () {
    jasmine.addMatchers({
        toHaveClass: function () {
            return {
                compare: function (actual, expected) {
                    var result = {
                        pass: actual.hasClass(expected)
                    };

                    if (result.pass) {
                        result.message = 'Expected "' + actual + '" not to have the "' + expected + '" class.';
                    } else {
                        result.message = 'Expected "' + actual + '" to have the "' + expected + '" class.';
                    }

                    return result;
                }
            };
        },
        toBeHidden: function () {
            return {
                compare: function (actual) {
                    var result = {
                        pass: actual.hasClass('ng-hide') || actual.css('display') === 'none'
                    };

                    if (result.pass) {
                        result.message = 'Expected "' + actual + '" not to be hidden';
                    } else {
                        result.message = 'Expected "' + actual + '" to be hidden';
                    }

                    return result;
                }
            };
        },
        toHaveFocus: function () {
            return {
                compare: function (actual) {
                    var result = {
                        pass: document.activeElement === actual[0]
                    };

                    if (result.pass) {
                        result.message = 'Expected "' + actual + '" not to have focus';
                    } else {
                        result.message = 'Expected "' + actual + '" to have focus';
                    }

                    return result;
                }
            };
        },
        toHaveAttr: function toHaveAttr() {
            return {
                compare: function (el, actual, expected) {
                    var attr = $(el[0]).attr(actual);
                    var addendum = typeof expected !== 'undefined' ? ' with value \'' + expected + '\'' : '';
                    var result = {
                        pass: attr === expected
                    };
                    if (result.pass) {
                        result.message = 'Expected element to have attribute \'' + actual + '\'' + addendum;
                    } else {
                        result.message = 'Expected element not to have attribute \'' + actual + '\'' + addendum + ', but had \'' + attr + '\'';
                    }

                    return result;
                }
            };
        }
    });
});
