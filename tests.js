QUnit.module('FizzBuzz', function () {
    QUnit.test("WhatToSay_NeitherDivisibleByThreeNorFive_ReturnsNumber", function (assert) {
        // arrange
        let expected = 4;

        // act
        let actual = whatToSay(expected);

        // assert
        assert.equal(actual, expected);
    });

    QUnit.test.each("WhatToSay_DivisibleByThree_ReturnsFizz", [3,6], function (assert, data) {
        // arrange
        let expected = 'Fizz';

        // act
        let actual = whatToSay(data);

        // assert
        assert.equal(actual, expected, 'number: ' + data);
    });

    QUnit.test.each("WhatToSay_DivisibleByFive_ReturnsBuzz", [5,10], function (assert, data) {
        // arrange
        let expected = 'Buzz';

        // act
        let actual = whatToSay(data);

        // assert
        assert.equal(actual, expected, 'number: ' + data);
    });

    QUnit.test.each("WhatToSay_DivisibleByBothThreeAndFive_ReturnsFizzBuzz", [15,30], function (assert, data) {
        // arrange
        let expected = 'FizzBuzz';

        // act
        let actual = whatToSay(data);

        // assert
        assert.equal(actual, expected, 'number: ' + data);
    });
});