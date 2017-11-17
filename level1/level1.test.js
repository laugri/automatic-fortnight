const level1 = require('./level1.js');
const data = require('./data.json');
const output = require('./output.json');

describe('Level 1', () => {
  const mockArticles = data.articles;
  const mockCart = data.carts[0];
  const mockItem = mockCart.items[0];

  describe('buildOutput', () => {
    test('on data.json object outputs output.json object', () => {
      expect(level1.buildOutput(data)).toEqual(output);
    });
  });

  describe('getArticle', () => {
    test('(1) returns article with id 1', () => {
      expect(level1.getArticle(mockArticles, 1)).toEqual({
        id: 1,
        name: 'water',
        price: 100,
      });
    });

    test('(3) returns article with id 3', () => {
      expect(level1.getArticle(mockArticles, 3)).toEqual({
        id: 3,
        name: 'mango',
        price: 400,
      });
    });

    test('returns undefined for unknown id', () => {
      expect(level1.getArticle(mockArticles, 10)).toBe(undefined);
    });
  });

  describe('computeItemPrice', () => {
    test('computes correct item price for existing item', () => {
      expect(level1.computeItemPrice(mockArticles, mockItem)).toBe(600);
    });

    test('throws if article does not exist', () => {
      expect(() => {
        level1.computeItemPrice(mockArticles, { article_id: 10, quantity: 1 });
      }).toThrow('Article could not be found.');
    });
  });

  describe('computeCartPrice', () => {
    test('computes correct amount', () => {
      expect(level1.computeCartPrice(mockArticles, mockCart)).toBe(2000);
    });
  });
});
