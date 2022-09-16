import { useEffect, useState } from 'react';

const getFizzBuzz = (numb: number) => {
    if (numb % 15 === 0) return 'fizzbuzz';
    if (numb % 3 === 0) return 'fizz';
    if (numb % 5 === 0) return 'buzz';
    return String(numb);
};

const useFizzBuzz = () => {
    const [fizzBuzzLogs, setFizzBuzzLogs] = useState<string[]>([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count + 1);
        }, 200);

        if (count === 100) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [count]);

    useEffect(() => {
        if (count < 100 && count > 0) {
            fizzBuzzLogs.push(getFizzBuzz(count));
            setFizzBuzzLogs(fizzBuzzLogs);
        }
    }, [count, fizzBuzzLogs]);

    return fizzBuzzLogs;
};

export default useFizzBuzz;
