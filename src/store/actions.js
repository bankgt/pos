import { ORDER_STATUS, MUTATION_TYPES } from "./constants";

export default {
  searchProducts(context, value) {
    context.commit(MUTATION_TYPES.TEXT_SEARCH, value);
  },
  getProducts() {
    // context.commit(MUTATION_TYPES.LOADING_PRODUCTS, true);
    // const request = new Request("https://json-bin.netlify.app/books.json");
    // fetch(request)
    //   .then(response => {
    //     if (response.status === 200) {
    //       return response.json();
    //     } else {
    //       throw new Error("Something went wrong on api server!");
    //     }
    //   })
    //   .then(response => {
    //     context.commit(MUTATION_TYPES.PRODUCTS, response.books);
    //   })
    //   .catch(error => {
    //     this._vm.$message.error(error.message);
    //   })
    //   .finally(() => {
    //     context.commit(MUTATION_TYPES.LOADING_PRODUCTS, false);
    //   });
  },
  setSelectProduct(context, { value, data }) {
    const index = context.state.products.findIndex(i => i.id == data.id);
    data._isSelected = value;
    data._qty = 1;
    if (value) {
      data._selectedTime = new Date().getTime();
    }
    context.commit(MUTATION_TYPES.PRODUCT, { index, data });
  },
  clearAllSelectProduct(context) {
    const products = context.state.products.map(i => ({
      ...i,
      _qty: 1,
      _isSelected: false
    }));
    context.commit(MUTATION_TYPES.PRODUCTS, products);
  },
  setQty(context, { value, data }) {
    const index = context.state.products.findIndex(i => i.id == data.id);
    data._qty = value;
    context.commit(MUTATION_TYPES.PRODUCT, { index, data });
  },
  syncProcessOrder(context) {
    this._vm.$db.ref("order").on("value", snapshot => {
      context.commit(MUTATION_TYPES.ORDER, snapshot.val());
    });
  },
  setProcessOrder({ dispatch, getters, state }, payload) {
    if (payload === null) {
      if (state.order && state.order.status == ORDER_STATUS.SUCCESS) {
        dispatch("clearAllSelectProduct");
      }
      return this._vm.$db.ref("order").remove();
    } else {
      const status =
        payload && payload.state ? payload.state : ORDER_STATUS.PAYMENT;
      return this._vm.$db.ref("order").set({
        summary: getters.summary,
        cartProducts: getters.cartProducts,
        ...state.order,
        status,
        ...payload
      });
    }
  }
};
