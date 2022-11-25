function whatToSay(number) {
    let sayThis;

    if (number % 3 === 0) {
        sayThis = 'Fizz';
    }

    if (number % 5 === 0) {
        sayThis = (sayThis ?? '') + 'Buzz';
    }

    return sayThis ?? number;
}