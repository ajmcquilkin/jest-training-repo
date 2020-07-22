/**
 * Introduces basic jest concepts of describe, it/test, and matchers
 * If you get stuck, answers are located in "./intro/intro_answers.test.ts"
 * Based on this link: https://jestjs.io/docs/en/using-matchers
 */

import sum from '../intro/sum';
import combineObjects from '../intro/combineObjects';
import combineArrays from '../intro/combineArrays';

describe('Sum function', () => {
  it('returns a defined value', () => {
    // Complete the following matcher to check if the returned value is defined
    // Remember: if you're using VSCode you can see matcher options with "ctrl+space"
    // expect(sum(1, 1))
  });

  it('correctly adds two numbers', () => {
    // Write a matcher to check if the function correctly adds two numbers
  });

  it("doesn't give the wrong sum", () => {
    // Write a matcher to check that the answer is not incorrect
  });
});

describe('A string', () => {
  it('matches itself', () => {
    // Write a matcher to check that the following sentence contains the word "sentence"
    // Hint: use the regex /sentence/i in your matcher
    // expect('This is a sentence')
  });
});

describe('Combine objects', () => {
  it('returns correct combined object', () => {
    // Finish the following matcher to check that the following object is returned: "{ adam: 'cool', jest: 'cooler' }"
    // expect(combineObjects({ adam: 'cool' }, { jest: 'cooler' }))
  });
});

describe('Combine arrays', () => {
  it('returns correct combined array', () => {
    // Finish the following matcher to check that the returned array contains "This"
    // expect(combineArrays(['This', 'is'], ['a', 'sentence']))
  });
});
