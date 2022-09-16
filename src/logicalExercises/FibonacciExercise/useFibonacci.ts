import { useState } from 'react';

const isPerfectSquare = (num: number) => {
    const square = parseInt(String(Math.sqrt(num)));
    // eslint-disable-next-line eqeqeq
    return (square * square == num);
};

const isFibonacci = (num = 0) => {
    if (isPerfectSquare(5 * (num * num) - 4) || isPerfectSquare(5 * (num * num) + 4)) {
        return true;
    }
    return false;
};

const useFibonacci = () => {
    const [numberToCheck, setNumberToCheck] = useState(0);

    const handleChangeNumber = (num: number) => setNumberToCheck(num);

    return {
        numberToCheck,
        isFibonacci: isFibonacci(numberToCheck),
        handleChangeNumber,
    };
};

export default useFibonacci;
