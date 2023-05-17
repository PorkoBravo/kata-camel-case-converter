export function convert(words: string): string {
    return words.substring(0,1).toUpperCase() + words.substring(1, words.length)
}