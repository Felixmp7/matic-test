import LogicExercise from '../LogicalExercise';
import useWordsCounter from './useWordsCounter';

const WordsCounterExercise = () => {
    const { text, countRepeatedWords, handleChangeText } = useWordsCounter();

    return (
        <LogicExercise
            title="Words Counter"
            description={`
                Given a given input text, Code a program (in javascript or typescript) that
                displays the number of repetitions of each word. Sample text: "Hi how are things? How are you? Are you a developer? I am also a developer"
            `}
        >
            <input
                type="text"
                className="border block mb-4 w-full"
                value={text}
                onChange={(event) => handleChangeText(event.target.value)}
            />
            {countRepeatedWords && (
                <pre className="text-sm">{JSON.stringify(countRepeatedWords, null, 2)}</pre>
            )}
        </LogicExercise>
    );
};

export default WordsCounterExercise;
