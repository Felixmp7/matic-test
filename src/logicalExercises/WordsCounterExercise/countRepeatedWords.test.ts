import { countRepeatedWords } from './useWordsCounter';

describe('Words Counter Exercise', () => {
    describe('Set of tests to countRepeatedWords function', () => {
        it('Should return an object with key "hello" and value = 2 ', () => {
            const textExample = 'Hello, hello';
            const wordsCounted = countRepeatedWords(textExample);

            const desiredObject = {
                hello: 2,
            };

            expect(wordsCounted).toEqual(desiredObject);
        });

        it('Should return an object with key "111" and value = 1 ', () => {
            const textExample = '111';
            const wordsCounted = countRepeatedWords(textExample);

            const desiredObject = {
                111: 1,
            };

            expect(wordsCounted).toEqual(desiredObject);
        });

        it('Should return an object with keys with special characters', () => {
            const textExample = '[Hab] [{23131 asd, [{23131';
            const wordsCounted = countRepeatedWords(textExample);

            const desiredObject = {
                '[hab]': 1,
                '[{23131': 2,
                asd: 1,
            };

            expect(wordsCounted).toEqual(desiredObject);
        });

        it('Should return an empty object if pass an empty string', () => {
            const textExample = '';
            const wordsCounted = countRepeatedWords(textExample);

            const desiredObject = {};

            expect(wordsCounted).toEqual(desiredObject);
        });

        it('Should return an object with correct keys and values', () => {
            const textExample = 'Hi how are things? How are you? Are you a developer? I am also a developer';
            const wordsCounted = countRepeatedWords(textExample);

            const desiredObject = {
                a: 2,
                also: 1,
                am: 1,
                are: 3,
                developer: 2,
                hi: 1,
                how: 2,
                i: 1,
                things: 1,
                you: 2,
            };

            expect(wordsCounted).toEqual(desiredObject);
        });
    });
});
