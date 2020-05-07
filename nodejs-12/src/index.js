function getProductsById(ids, productsList) {
  const foundIds = productsList.filter((product) => ids.includes(product.id));
  return foundIds.map(function (foundID) {
    return { name: foundID.name, category: foundID.category };
  });
}

function getPromoTypeByProducts(products) {
  const categories = products.map((prods) => prods.category);
  if (new Set(categories).size == 1) return "SINGLE LOOK";
  else if (new Set(categories).size == 2) return "DOUBLE LOOK";
  else if (new Set(categories).size == 3) return "TRIPLE LOOK";
  else if (new Set(categories).size == 4) return "FULL LOOK";
}

function getValidValue(product, promotion) {
  let price;
  const promot = product.promotions;
  for (var i in promot) {
    if (promot[i].looks.includes(promotion)) {
      price = promot[i].price;
      break;
    }
  }

  return price === undefined ? product.regularPrice : price;
}

function getPriceInfo(ids, productsList, promotion) {
  const prods = productsList.filter((product) => ids.includes(product.id));
  let totalNoPromo = prods
    .map((prod) => prod.regularPrice)
    .reduce((prev, next) => prev + next, 0);

  let realValueList = prods.map((prod) => getValidValue(prod, promotion));
  let totalPromo = realValueList.reduce((cur, nex) => cur + nex, 0);
  let discountValue = totalNoPromo - totalPromo;
  let discount = (discountValue / totalNoPromo) * 100;

  return {
    totalPrice: totalPromo.toFixed(2).toString(),
    discountValue: discountValue.toFixed(2).toString(),
    discount: discount.toFixed(2) + "%",
  };
}

function getShoppingCart(ids, productsList) {
  let products = getProductsById(ids, productsList);
  let promotion = getPromoTypeByProducts(products);
  let priceInfos = getPriceInfo(ids, productsList, promotion);
  return {
    products,
    promotion,
    totalPrice: priceInfos.totalPrice,
    discountValue: priceInfos.discountValue,
    discount: priceInfos.discount,
  };
}

module.exports = {
  getShoppingCart,
  getProductsById,
  getPromoTypeByProducts,
  getPriceInfo,
  getValidValue,
};
