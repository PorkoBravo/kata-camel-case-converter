export function convert(words: string): string {

    let wordInCamelCase = "";

    words.split(" ").forEach(word => {
        wordInCamelCase += word.substring(0,1).toUpperCase() + word.substring(1,word.length)
    })

    return wordInCamelCase
    
}