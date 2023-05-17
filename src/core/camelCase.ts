export function convert(words: string): string {
    let wordInCamelCase = "";
    
    const wordSplitterRegExp = /[-_ ]/;
    words.split(wordSplitterRegExp).forEach(word => {
        wordInCamelCase += capitalizeWord(word)
    })
    return wordInCamelCase
}

function capitalizeWord(word: string) {
    return word.substring(0, 1).toUpperCase() + word.substring(1, word.length);
}
