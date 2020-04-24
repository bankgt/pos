export default {
  textSearch(state, value) {
    state.textSearch = value;
  },
  loadingProducts(state, value) {
    state.loadingProducts = value;
  },
  products(state, data) {
    state.products = data;
  },
  product(state, { index, data }) {
    state.products.splice(index, 1, { ...data });
  },
  order(state, data) {
    state.order = data;
  }
};
