import { isFibonacci } from './useFibonacci';

describe('Fibonacci Test Exercise', () => {
    describe('Set of tests to isFibonacci function', () => {
        it('Should return "true" or "false" if received number belongs to the Fibonacci series.', () => {
            expect(isFibonacci(0)).toBeTruthy();
            expect(isFibonacci(1)).toBeTruthy();
            expect(isFibonacci(2)).toBeTruthy();
            expect(isFibonacci(3)).toBeTruthy();
            expect(isFibonacci(4)).toBeFalsy();
            expect(isFibonacci(5)).toBeTruthy();
            expect(isFibonacci(6)).toBeFalsy();
            expect(isFibonacci(7)).toBeFalsy();
            expect(isFibonacci(8)).toBeTruthy();
            expect(isFibonacci(9)).toBeFalsy();
            expect(isFibonacci(13)).toBeTruthy();
            expect(isFibonacci(21)).toBeTruthy();
            expect(isFibonacci(34)).toBeTruthy();
            expect(isFibonacci(55)).toBeTruthy();
            expect(isFibonacci(89)).toBeTruthy();
            expect(isFibonacci(144)).toBeTruthy();
            expect(isFibonacci(233)).toBeTruthy();
            expect(isFibonacci(377)).toBeTruthy();
            expect(isFibonacci(610)).toBeTruthy();
            expect(isFibonacci(987)).toBeTruthy();
            expect(isFibonacci(1597)).toBeTruthy();
        });
    });
});
