// @flow

type Article = { id: number, name: string, price: number };
type Item = { article_id: number, quantity: number };
type Cart = { id: number, items: Array<Item> };

function getArticle(articles: Array<Article>, articleId: number): ?Article {
  return articles.find(article => article.id === articleId);
}

function computeItemPrice(articles: Array<Article>, item: Item): number {
  const article = getArticle(articles, item.article_id);
  if (!article) {
    throw 'Article could not be found.';
  }
  return article.price * item.quantity;
}

function computeCartPrice(articles: Array<Article>, cart: Cart): number {
  return cart.items.reduce(
    (sum, item) => sum + computeItemPrice(articles, item),
    0
  );
}

function buildOutput(data: {
  articles: Array<Article>,
  carts: Array<Cart>,
}): { carts: Array<{ id: number, total: number }> } {
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
