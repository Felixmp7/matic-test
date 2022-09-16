import clsx from 'clsx';
import LogicExercise from '../LogicalExercise';
import useFibonacci from './useFibonacci';

const FibonacciExercise = () => {
    const { numberToCheck, isFibonacci, handleChangeNumber } = useFibonacci();

    return (
        <LogicExercise
            title="Check if is fibonacci"
            description={`
                In mathematics, the Fibonacci sequence or series is the following infinite
                sequence of natural numbers: 0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597
                ... where f (0) = 0, f (1) = 1 and f (n) = f (n-1) + f (n-2). Code a program (in javascript
                or typescript) that solves for any number in the Fibonacci series.
            `}
        >
            <input
                type="number"
                min={0}
                className="border block mb-4"
                value={numberToCheck}
                onChange={(event) => handleChangeNumber(
                    Number(event.target.value),
                )}
            />
            <span className={clsx(isFibonacci ? 'text-green-800' : 'text-red-500')}>
                {
                    isFibonacci
                        ? 'Pertenece a la secuencia Fibonacci'
                        : 'No pertenece a la secuencia fibonacci'
                }
            </span>
        </LogicExercise>
    );
};

export default FibonacciExercise;
