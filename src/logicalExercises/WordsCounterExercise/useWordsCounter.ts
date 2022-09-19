import { useState } from 'react';

type WordMap = {
    [key: string]: number
}

export const countRepeatedWords = (sentence: string) => {
    if (sentence === '') {
        return {};
    }
    const strStripped = sentence.replace(/[,.!?]/g, '');
    const words = strStripped.toLowerCase().split(' ');
    const wordMap: WordMap = {};

    for (let i = 0; i < words.length; i += 1) {
        const currentWordCount = wordMap[words[i]];
        const count = currentWordCount || 0;
        wordMap[words[i]] = count + 1;
    }
    return wordMap;
};

const useWordsCounter = () => {
    const [text, setText] = useState('');

    const handleChangeText = (newText: string) => setText(newText);

    return {
        text,
        countRepeatedWords: text ? countRepeatedWords(text) : undefined,
        handleChangeText,
    };
};

export default useWordsCounter;
