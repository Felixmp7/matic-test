import FibonacciExercise from './FibonacciExercise';
import FizzBuzzExercise from './FizzBuzzExercise';
import WordsCounterExercise from './WordsCounterExercise';

const LogicalExercises = () => (
    <div className="grid w-4/5 mx-auto mt-10 lg:grid-cols-2 xl:grid-cols-3 gap-x-5">
        <FibonacciExercise />
        <WordsCounterExercise />
        <FizzBuzzExercise />
    </div>
);

export default LogicalExercises;
