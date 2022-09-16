import FibonacciExercise from './FibonacciExercise';
import FizzBuzzExercise from './FizzBuzzExercise';
import WordsCounterExercise from './WordsCounterExercise';

const LogicalExercises = () => (
    <section className="grid grid-cols-3 gap-x-5 mx-auto w-4/5 mt-10">
        <FibonacciExercise />
        <WordsCounterExercise />
        <FizzBuzzExercise />
    </section>
);

export default LogicalExercises;
