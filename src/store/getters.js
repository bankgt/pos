import { DISCOUNT_UNIQUE_ID, DISCOUNT_CONDITION } from "./constants";

export default {
  order(state) {
    return state.order;
  },
  textSearch(state) {
    return state.textSearch;
  },
  loadingProducts(state) {
    return state.loadingProducts;
  },
  products(state) {
    return state.products.filter(
      i =>
        i.title
          .toLocaleLowerCase()
          .includes(state.textSearch.toLocaleLowerCase()) ||
        i.id.includes(state.textSearch)
    );
  },
  cartProducts(state) {
    return state.products
      .filter(i => i._isSelected)
      .sort((a, b) => b._selectedTime - a._selectedTime)
      .reverse()
      .map(i => {
        const total = Number(i.price) * i._qty;
        return { ...i, _total: total };
      });
  },
  summary(state, getters) {
    const cartProducts = getters.cartProducts;
    let discount = 0;
    let subtotal = cartProducts.reduce(
      (a, b) => a + (Number(b._total) || 0),
      0
    );
    let total = subtotal;

    // set discount
    const uniqueProducts = cartProducts.filter(i =>
      DISCOUNT_UNIQUE_ID.includes(i.id)
    );
    const uniqueProductsQty = uniqueProducts.length;
    const discountCondition = DISCOUNT_CONDITION.find(
      i => i.qty == uniqueProductsQty
    );
    if (discountCondition) {
      const discountTotal = uniqueProducts.reduce(
        (a, b) => a + (Number(b.price) || 0),
        0
      );
      discount = Math.round(
        (discountTotal / 100) * discountCondition.percentage
      );
      total = subtotal - discount;
    }

    return { subtotal, discount, total };
  }
};
