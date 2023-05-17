/**
 * Before I start I came up with these basic tests.
 * 
 * Case 1: No given word, returns nothing. ie: "" -> ""
 * Case 2: Given just one letter, returns same letter in uppercase. ie: "a" -> "A"
 * Case 3: Given one word with the first letter already in uppercase, returns same word. ie: "Camel" -> "Camel"
 * Case 4: Given one word with the first letter not in uppercase, returns same word with the first letter in uppercase. ie: "camel" -> "Camel"
 * Case 5: Given two words separate by space, returns the joined words with the first letter in uppercase. ie: "model ship" -> "ModelShip", "Model ship" -> "ModelShip"
 * Case 6: Given two words separate by hyphens, returns the joined words with the first letter in uppercase. ie: "model_ship" -> "ModelShip", "Model-ship" -> "ModelShip"
 * Case 7: Given n words, returns the words joined and with the first letter in uppercase. ie: "this is an amazing text" -> "ThisIsAnAmazingText"
 * Case 8: Given a symbol, return same. ie "#" -> "#"
 */

import { convert } from "../core/camelCase"

describe("camelCase converter should", () => {
    it("returns nothing when no word is given",() => {
        const no_word = ""
        const expected = ""
        
        const result = convert(no_word)

        expect(result).toBe(expected)
    })

    it("given just a letter, returns same letter in uppercase", () => {
        const just_a_letter = "a"
        const expected = "A"

        const result = convert(just_a_letter)

        expect(result).toBe(expected)
    })

    it("given one word with first letter in uppercase, returns same word", () => {
        const word = "Camel"
        const expected = "Camel"

        const result = convert(word)

        expect(result).toBe(expected)
    })

    it("given one word with first letter NOT in uppercase, returns same word with first letter in uppercase", () => {
        const word = "pig"
        const expected = "Pig"

        const result = convert(word)

        expect(result).toBe(expected)
    })

    it("given two words separate by space, returns the joined words with the first letter of each in uppercase", () => {
        const word = "like pigs"
        const expected = "LikePigs"

        const result = convert(word)

        expect(result).toBe(expected)
    })

    it("given two words separate by hyphens, returns the joined words with the first letter of each in uppercase", () => {
        const word = "model-ships"
        const expected = "ModelShips"

        const result = convert(word)

        expect(result).toBe(expected)
    })

    it("given multiple words, returns the joined words with the first letter of each in uppercase", () => {
        const word = "I am in love of bulding model-ships or model Ships because I like crafting"
        const expected = "IAmInLoveOfBuldingModelShipsOrModelShipsBecauseILikeCrafting"

        const result = convert(word)

        expect(result).toBe(expected)
    })

})