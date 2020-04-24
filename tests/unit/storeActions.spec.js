import actions from "@/store/actions";
import { MUTATION_TYPES } from "@/store/constants";

describe("Store Actions", () => {
  it("searchProducts", () => {
    const testSearch = "testSearch";
    const commit = (type, value) => {
      expect(type).toBe(MUTATION_TYPES.TEXT_SEARCH);
      expect(value).toBe(testSearch);
    };
    actions.searchProducts({ commit }, testSearch);
  });

  it("setSelectProduct", () => {
    const state = {
      products: [
        {
          cover:
            "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4088/9781408855652.jpg",
          price: "350",
          title: "Harry Potter and the Philosopher's Stone (I)",
          id: "9781408855652"
        }
      ]
    };
    const commit = (type, { index, data }) => {
      expect(type).toBe(MUTATION_TYPES.PRODUCT);
      expect(index).toBe(0);
      expect(data._qty).toBe(1);
      expect(data._isSelected).toBe(true);
      expect(new Date(data._selectedTime).getTime() > 0).toBe(true);
    };
    actions.setSelectProduct(
      { state, commit },
      { value: true, data: state.products[0] }
    );
  });

  it("clearAllSelectProduct", () => {
    const state = {
      products: [
        {
          cover:
            "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4088/9781408855652.jpg",
          price: "350",
          title: "Harry Potter and the Philosopher's Stone (I)",
          id: "9781408855652"
        }
      ]
    };
    const commit = (type, [product]) => {
      expect(type).toBe(MUTATION_TYPES.PRODUCTS);
      expect(product._qty).toBe(1);
      expect(product._isSelected).toBe(false);
    };
    actions.clearAllSelectProduct({ state, commit }, state.products);
  });

  it("setQty", () => {
    const state = {
      products: [
        {
          cover:
            "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4088/9781408855652.jpg",
          price: "350",
          title: "Harry Potter and the Philosopher's Stone (I)",
          id: "9781408855652"
        }
      ]
    };
    const commit = (type, { index, data }) => {
      expect(type).toBe(MUTATION_TYPES.PRODUCT);
      expect(index).toBe(0);
      expect(data._qty).toBe(2);
    };
    actions.setQty({ state, commit }, { value: 2, data: state.products[0] });
  });
});
