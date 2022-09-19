import { getFizzBuzz } from './useFizzBuzz';

describe('FizBuzz Test Exercise', () => {
    describe('Set of tests to getFizzBuzz function', () => {
        it('Should return "fizz" if received number is multiple of 3', () => {
            const fizz = 'fizz';

            expect(getFizzBuzz(3)).toEqual(fizz);
            expect(getFizzBuzz(6)).toEqual(fizz);
            expect(getFizzBuzz(9)).toEqual(fizz);
            expect(getFizzBuzz(12)).toEqual(fizz);
            expect(getFizzBuzz(39)).toEqual(fizz);
        });

        it('Should return "buzz" if received number is multiple of 5', () => {
            const buzz = 'buzz';

            expect(getFizzBuzz(5)).toEqual(buzz);
            expect(getFizzBuzz(10)).toEqual(buzz);
            expect(getFizzBuzz(20)).toEqual(buzz);
            expect(getFizzBuzz(25)).toEqual(buzz);
            expect(getFizzBuzz(50)).toEqual(buzz);
        });

        it('Should return "fizzbuzz" if received number is multiple of 3 and 5', () => {
            const fizzbuzz = 'fizzbuzz';

            expect(getFizzBuzz(0)).toEqual(fizzbuzz);
            expect(getFizzBuzz(15)).toEqual(fizzbuzz);
            expect(getFizzBuzz(30)).toEqual(fizzbuzz);
            expect(getFizzBuzz(45)).toEqual(fizzbuzz);
            expect(getFizzBuzz(60)).toEqual(fizzbuzz);
            expect(getFizzBuzz(75)).toEqual(fizzbuzz);
        });

        it('Should return "numbers" if are not multiple of 3,5 or both', () => {
            expect(getFizzBuzz(1)).toEqual('1');
            expect(getFizzBuzz(2)).toEqual('2');
            expect(getFizzBuzz(4)).toEqual('4');
            expect(getFizzBuzz(7)).toEqual('7');
        });
    });
});
