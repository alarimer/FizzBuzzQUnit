QUnit.module('FizzBuzz', function () {
    QUnit.test("WhatToSay_NeitherDivisibleByThreeNorFive_ReturnsNumber", function (assert) {
        // arrange
        let expected = 4;

        // act
        let actual = whatToSay(expected);

        // assert
        assert.equal(actual, expected);
    });
});