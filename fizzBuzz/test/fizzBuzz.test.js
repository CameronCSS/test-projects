import { describe, test, it, expect } from "vitest";
import { fizzBuzz } from "../fizzBuzz";

describe('fizzBuzz', () => {
    it('should return FizzBuzz if n is divisible by 3 and 5', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
    });

    it('should return Fizz if n is ONLY divisible by 3', () => {
        expect(fizzBuzz(6)).toBe('Fizz');
    });

    it('should return Buzz if n is ONLY divisible by 5', () => {
        expect(fizzBuzz(10)).toBe('Buzz');
    });

    it('should return error if n is NaN or is not within the function scope', () => {
        expect(fizzBuzz(test)).toBe('Error');
    });

});