export function convert(text: string): string {
    const words = text.split(getWordSplitterPattern());
    return words.map(word => {
        return capitalizeWord(word)
    }).join('')
}

function getWordSplitterPattern(): RegExp {
    return /[-_ ]/;
}

function capitalizeWord(word: string) {
    return word.substring(0, 1).toUpperCase() + word.substring(1, word.length);
}
