QUnit.module('FizzBuzz', function () {
    QUnit.test("WhatToSay_NeitherDivisibleByThreeNorFive_ReturnsNumber", function (assert) {
        // arrange
        let expected = 4;

        // act
        let actual = whatToSay(expected);

        // assert
        assert.equal(actual, expected);
    });

    QUnit.test("WhatToSay_DivisibleByThree_ReturnsFizz", function (assert) {
        // arrange
        let expected = 'Fizz';

        // act
        let actual = whatToSay(3);

        // assert
        assert.equal(actual, expected);
    });

    QUnit.test("WhatToSay_DivisibleByThree_ReturnsFizz_1", function (assert) {
        // arrange
        let expected = 'Fizz';

        // act
        let actual = whatToSay(6);

        // assert
        assert.equal(actual, expected);
    });
});