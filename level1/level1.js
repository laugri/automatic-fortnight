const output = require('./output.json');
const data = require('./data.json');

function getArticle(articleId) {
  return data.articles.find(article => article.id === articleId);
}

function computeItemPrice(item) {
  return getArticle(item.article_id) * item.quantity;
}

function computeCartPrice(cart) {
  return cart.items.reduce((sum, item) => sum + computeItemPrice(item));
}

function buildOutput() {
  return output;
}

module.exports = {
  buildOutput,
  getArticle,
  computeItemPrice,
  computeCartPrice,
};
