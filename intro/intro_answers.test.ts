/**
 * Introduces basic jest concepts of describe, it/test, and matchers
 * Based on this link: https://jestjs.io/docs/en/using-matchers
 */

import sum from './sum';
import combineObjects from './combineObjects';
import combineArrays from './combineArrays';

describe('Sum function', () => {
  it('returns a defined value', () => {
    expect(sum(1, 1)).toBeDefined();
  });

  it('correctly adds two numbers', () => {
    expect(sum(1, 2)).toBe(3);
    // expect(sum(1, 2)).toEqual(3); // Also valid
  });

  it("doesn't give the wrong sum", () => {
    expect(sum(3, 4)).not.toBe(0);
  });

  it('gives a truthy answer correctly', () => {
    expect(sum(3, 4)).toBeTruthy();
  });
});

describe('A string', () => {
  it('matches itself', () => {
    expect('This is a sentence').toMatch(/sentence/i);
  });
});

describe('Combine objects', () => {
  it('returns correct combined object', () => {
    expect(combineObjects({ adam: 'cool' }, { jest: 'cooler' })).toEqual({ adam: 'cool', jest: 'cooler' });
  });
});

describe('Combine arrays', () => {
  it('returns correct combined array', () => {
    expect(combineArrays(['This', 'is'], ['a', 'sentence'])).toContain('This');
  });
});
