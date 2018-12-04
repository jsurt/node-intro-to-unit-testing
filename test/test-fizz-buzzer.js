const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
    it('should return `fizz-buzz` for multiples of 15', function() {
        [15, 30, 45, 60].forEach(function(number) {
            expect(fizzBuzzer(number)).to.equal('fizz-buzz');
        });
    });
    it('should return `buzz` for multiples of 5', function() {
        [5, 10, 20].forEach(function(number) {
            expect(fizzBuzzer(number)).to.equal('buzz');
        });
    });
    it('should return `fizz` for multiples of 3', function() {
        [3, 6, 9, 12].forEach(function(number) {
            expect(fizzBuzzer(number)).to.equal('fizz');
        });
    });
    it('should return `num` if not a multiple of 3 or 5', function() {
        [4, 7, 11, 19].forEach(function(number) {
            expect(fizzBuzzer(number)).to.equal(number);
        })
    })
    it('should throw an error for inputs that are not numbers', function() {
        ['cow', true, {name: 'dog', color: 'dat purp'}].forEach(function(number) {
            expect(function() {
            fizzBuzzer(number)
            }).to.throw(Error)
        });
    })
});
