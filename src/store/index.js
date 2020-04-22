import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const DISCOUNT_UNIQUE_ID = [
  "9781408855652",
  "9781408855669",
  "9781408855676",
  "9781408855683",
  "9781408855690",
  "9781408855706",
  "9781408855713"
];

const DISCOUNT_CONDITION = [
  {
    qty: 2,
    percentage: 10
  },
  {
    qty: 3,
    percentage: 11
  },
  {
    qty: 4,
    percentage: 12
  },
  {
    qty: 5,
    percentage: 13
  },
  {
    qty: 6,
    percentage: 14
  },
  {
    qty: 7,
    percentage: 15
  }
];

export const ORDER_STATUS = {
  PAYMENT: "payment",
  CLEARING: "clearing",
  SUCCESS: "success"
};

export default new Vuex.Store({
  state: {
    textSearch: "",
    loadingProducts: false,
    products: [
      {
        cover:
          "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4088/9781408855652.jpg",
        price: "350",
        title: "Harry Potter and the Philosopher's Stone (I)",
        id: "9781408855652"
      },
      {
        cover:
          "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4088/9781408855669.jpg",
        price: "350",
        title: "Harry Potter and the Chamber of Secrets (II)",
        id: "9781408855669"
      },
      {
        cover:
          "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4088/9781408855676.jpg",
        price: "340",
        title: "Harry Potter and the Prisoner of Azkaban (III)",
        id: "9781408855676"
      },
      {
        cover:
          "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4088/9781408855683.jpg",
        price: "360",
        title: "Harry Potter and the Goblet of Fire (IV)",
        id: "9781408855683"
      },
      {
        cover:
          "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4088/9781408855690.jpg",
        price: "380",
        title: "Harry Potter and the Order of the Phoenix (V)",
        id: "9781408855690"
      },
      {
        cover:
          "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4088/9781408855706.jpg",
        price: "380",
        title: "Harry Potter and the Half-Blood Prince (VI)",
        id: "9781408855706"
      },
      {
        cover:
          "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4088/9781408855713.jpg",
        price: "400",
        title: "Harry Potter and the Deathly Hallows (VII)",
        id: "9781408855713"
      },
      {
        cover:
          "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/5098/9781509889969.jpg",
        price: "270",
        title: "The Order of the Day",
        id: "9781509889969"
      },
      {
        cover:
          "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/2413/9780241392362.jpg",
        price: "260",
        title: "The Fork, the Witch, and the Worm",
        id: "9780241392362"
      },
      {
        cover:
          "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4711/9781471128387.jpg",
        price: "220",
        title: "The Dakota Winters",
        id: "9781471128387"
      },
      {
        cover:
          "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4732/9781473225046.jpg",
        price: "320",
        title: "Mistborn: Secret History",
        id: "9781473225046"
      },
      {
        cover:
          "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/7847/9781784742539.jpg",
        price: "280",
        title: "Professor Chandra Follows His Bliss",
        id: "9781784742539"
      },
      {
        cover:
          "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/9257/9781925773477.jpg",
        price: "180",
        title: "The Rosie Result",
        id: "9781925773477"
      },
      {
        cover:
          "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/5713/9780571351749.jpg",
        price: "275",
        title: "Come Rain or Come Shine",
        id: "9780571351749"
      },
      {
        cover:
          "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/7606/9781760632021.jpg",
        price: "310",
        title: "The Illumination of Ursula Flight",
        id: "9781760632021"
      },
      {
        cover:
          "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4736/9781473667815.jpg",
        price: "290",
        title: "A Shout in the Ruins",
        id: "9781473667815"
      },
      {
        cover:
          "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/8578/9780857844774.jpg",
        price: "260",
        title: "The Ocean Book",
        id: "9780857844774"
      },
      {
        cover:
          "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/1419/9780141979090.jpg",
        price: "220",
        title: "Enlightenment Now",
        id: "9780141979090"
      },
      {
        cover:
          "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/2413/9780241352465.jpg",
        price: "190",
        title: "The New Complete Book of Self-Sufficiency",
        id: "9780241352465"
      },
      {
        cover:
          "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/2419/9780241975367.jpg",
        price: "230",
        title: "The Monk of Mokha",
        id: "9780241975367"
      },
      {
        cover:
          "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/7847/9781784706883.jpg",
        price: "300",
        title: "The Language of Kindness",
        id: "9781784706883"
      },
      {
        cover:
          "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/1419/9780141987392.jpg",
        price: "250",
        title: "Elastic",
        id: "9780141987392"
      },
      {
        cover:
          "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/7887/9781788701495.jpg",
        price: "230",
        title: "Death Row: The Final Minutes",
        id: "9781788701495"
      },
      {
        cover:
          "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4071/9781407192123.jpg",
        price: "310",
        title: "Dog Man 4: Dog Man and Cat Kid",
        id: "9781407192123"
      },
      {
        cover:
          "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4449/9781444941135.jpg",
        price: "180",
        title: "The Colour of the Sun",
        id: "9781444941135"
      },
      {
        cover:
          "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/6014/9781601427991.jpg",
        price: "400",
        title:
          "The Minimalist Home: A Room-By-Room Guide to a Decluttered, Refocused Life",
        id: "9781601427991"
      },
      {
        cover:
          "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4736/9781473659711.jpg",
        price: "120",
        title: "How to Survive the End of the World ",
        id: "9781473659711"
      },
      {
        cover:
          "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/5098/9781509809950.jpg",
        price: "160",
        title: "Solve For Happy",
        id: "9781509809950"
      },
      {
        cover:
          "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4736/9781473634176.jpg",
        price: "345",
        title: "The Confidence Project",
        id: "9781473634176"
      }
    ],
    order: null
  },
  mutations: {
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
  },
  actions: {
    searchProducts(context, value) {
      context.commit("textSearch", value);
    },
    getProducts(context) {
      context.commit("loadingProducts", true);
      const request = new Request("https://json-bin.netlify.app/books.json");
      fetch(request)
        .then(response => {
          if (response.status === 200) {
            return response.json();
          } else {
            throw new Error("Something went wrong on api server!");
          }
        })
        .then(response => {
          context.commit("products", response.books);
        })
        .catch(error => {
          this._vm.$message.error(error.message);
        })
        .finally(() => {
          context.commit("loadingProducts", false);
        });
    },
    setSelectProduct(context, { value, data }) {
      const index = context.state.products.findIndex(i => i.id == data.id);
      data._isSelected = value;
      data._qty = 1;
      if (value) {
        data._selectedTime = new Date().getTime();
      }
      context.commit("product", { index, data });
    },
    clearAllSelectProduct(context) {
      const products = context.state.products.map(i => ({
        ...i,
        _qty: 1,
        _isSelected: false
      }));
      context.commit("products", products);
    },
    setQty(context, { value, data }) {
      const index = context.state.products.findIndex(i => i.id == data.id);
      data._qty = value;
      context.commit("product", { index, data });
    },
    syncProcessOrder(context) {
      this._vm.$db.ref("order").on("value", snapshot => {
        context.commit("order", snapshot.val());
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
  },
  getters: {
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
  }
});
