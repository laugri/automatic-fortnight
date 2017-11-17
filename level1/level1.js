function getArticle(articles, articleId) {
  return articles.find(article => article.id === articleId);
}

function computeItemPrice(articles, item) {
  const article = getArticle(articles, item.article_id);
  if (!article) {
    throw 'Article could not be found.';
  }
  return article.price * item.quantity;
}

function computeCartPrice(articles, cart) {
  return cart.items.reduce(
    (sum, item) => sum + computeItemPrice(articles, item),
    0
  );
}

function buildOutput(data) {
  const computedCarts = data.carts.reduce((cartAccumulator, cart) => {
    const cartId = cart.id;
    cartAccumulator.push({
      id: cartId,
      total: computeCartPrice(data.articles, cart),
    });
    return cartAccumulator;
  }, []);
  return { carts: computedCarts };
}

module.exports = {
  buildOutput,
  getArticle,
  computeItemPrice,
  computeCartPrice,
};
