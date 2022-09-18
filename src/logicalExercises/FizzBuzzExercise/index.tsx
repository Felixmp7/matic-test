import LogicExercise from '../LogicalExercise';
import useFizzBuzz from './useFizzBuzz';

const FizzBuzzExercise = () => {
    const fizzBuzLogs = useFizzBuzz();

    return (
        <LogicExercise
            title="Fizz Buzz"
            description={`
                Code a program (in javascript or typescript) that displays the numbers from
                1 to 100 on the screen, substituting the multiples of 3 for the word "fizz", the
                multiples of 5 for "buzz" and the multiples of both, that is, the multiples of 3
                and 5, by the word "fizz buzz".
            `}
        >
            <ul className="grid grid-flow-row grid-cols-5 gap-4 text-xs text-slate-600">
                {fizzBuzLogs.map((value, index) => <li key={index}>{value}</li>)}
            </ul>
        </LogicExercise>
    );
};

export default FizzBuzzExercise;
