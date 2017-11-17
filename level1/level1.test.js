const level1 = require('./level1.js');
const data = require('./data.json');
const output = require('./output.json');

describe('Level 1', () => {
  describe('buildOutput', () => {
    test('on data.json object outputs output.json object', () => {
      expect(level1.buildOutput(data)).toEqual(output);
    });
  });
  describe('getArticle', () => {
    test('(1) returns article with id 1', () => {
      expect(level1.getArticle(1)).toEqual({
        id: 1,
        name: 'water',
        price: 100,
      });
    });

    test('(3) returns article with id 3', () => {
      expect(level1.getArticle(3)).toEqual({
        id: 3,
        name: 'mango',
        price: 400,
      });
    });

    test('returns undefined for unknown id', () => {
      expect(level1.getArticle(10)).toBe(undefined);
    });
  });
});
