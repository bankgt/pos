import getters from "@/store/getters";

describe("Store Getters", () => {
  it("products", () => {
    const state = {
      textSearch: "",
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
        }
      ]
    };
    expect(getters.products(state).length).toBe(2);
    state.textSearch = "secrets";
    expect(getters.products(state).length).toBe(1);
  });

  it("cartProducts", () => {
    const state = {
      products: [
        {
          cover:
            "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4088/9781408855652.jpg",
          price: "350",
          title: "Harry Potter and the Philosopher's Stone (I)",
          id: "9781408855652",
          _qty: 2,
          _isSelected: true,
          _selectedTime: 0
        },
        {
          cover:
            "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4088/9781408855652.jpg",
          price: "350",
          title: "Harry Potter and the Philosopher's Stone (I)",
          id: "9781408855652",
          _qty: 1,
          _isSelected: false,
          _selectedTime: 0
        }
      ]
    };
    const products = getters.cartProducts(state);
    expect(products.length).toBe(1);
    expect(products[0]._total).toBe(700);
  });

  it("summary", () => {
    const state = {};
    const cartProducts = [
      {
        cover:
          "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4088/9781408855652.jpg",
        price: "350",
        title: "Harry Potter and the Philosopher's Stone (I)",
        id: "9781408855652",
        _qty: 2,
        _total: 700,
        _isSelected: true,
        _selectedTime: 0
      },
      {
        cover:
          "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4088/9781408855669.jpg",
        price: "350",
        title: "Harry Potter and the Chamber of Secrets (II)",
        id: "9781408855669",
        _qty: 1,
        _total: 350,
        _isSelected: true,
        _selectedTime: 0
      },
      {
        cover:
          "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/2413/9780241392362.jpg",
        price: "260",
        title: "The Fork, the Witch, and the Worm",
        id: "9780241392362",
        _qty: 1,
        _total: 260,
        _isSelected: true,
        _selectedTime: 0
      }
    ];
    const summary = getters.summary(state, { cartProducts });
    expect(summary.subtotal).toBe(1310);
    expect(summary.discount).toBe(70);
    expect(summary.total).toBe(1240);
  });
});
