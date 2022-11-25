function whatToSay(number) {
    let sayThis;

    if (number % 3 === 0) {
        sayThis = 'Fizz';
    }

    if (number % 5 === 0) {
        sayThis = sayThis ? sayThis += 'Buzz' : 'Buzz';
    }

    if (sayThis) {
        return sayThis;
    }

    return number;
}