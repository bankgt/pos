<template>
  <div class="pos-cart">
    <Title class="p-3 mb-1" :badge="products.length">
      Cart
      <template v-slot:right>
        <el-button type="text" size="mini" @click="clearAll"
          >Clear All</el-button
        >
      </template>
    </Title>

    <div class="pos-cart__empty mx-3" v-if="!hasProducts">
      <i class="el-icon-receiving"></i>
      <span>
        Cart is empty.
      </span>
    </div>

    <smooth-scrollbar class="pos-cart__products px-3" v-else>
      <div style="min-height: 10px;">
        <div v-for="(product, index) in products" :key="product.id">
          <div class="pos-cart__divider" v-if="index > 0"></div>
          <CartItem :data="product" />
        </div>
      </div>
    </smooth-scrollbar>

    <div class="pos-cart__action p-3 pt-4">
      <div class="pos-cart__total mb-3" v-if="hasProducts">
        <div class="d-flex">
          <div>Subtotal :</div>
          <div class="ml-auto">{{ summary.subtotal | price }}</div>
        </div>
        <div class="d-flex">
          <div>Discount :</div>
          <div class="ml-auto">{{ summary.discount | price }}</div>
        </div>
        <div class="d-flex">
          <div>Total :</div>
          <div class="ml-auto">{{ summary.total | price }}</div>
        </div>
      </div>
      <el-button
        type="primary"
        class="mt-auto w-100"
        :disabled="!hasProducts"
        @click="$emit('processOrder')"
        >PROCESS ORDER</el-button
      >
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CartItem from "@/components/CartItem";
import Title from "@/components/Title";
export default {
  name: "Cart",
  components: { Title, CartItem },
  computed: {
    ...mapGetters({
      loading: "loadingProducts",
      products: "cartProducts",
      summary: "summary"
    }),
    hasProducts() {
      return this.products.length > 0;
    }
  },
  methods: {
    ...mapActions({
      clearAllSelectProduct: "clearAllSelectProduct"
    }),
    clearAll() {
      if (this.products.length <= 1) {
        this.clearAllSelectProduct();
      } else {
        this.$confirm(
          "Yur are sure to clear all product in your card?",
          "Confirm",
          {
            confirmButtonText: "OK",
            cancelButtonText: "Cancel",
            type: "info"
          }
        )
          .then(() => {
            this.clearAllSelectProduct();
            this.$message({
              type: "success",
              message: "Clear all completed"
            });
          })
          .catch(() => {});
      }
    }
  }
};
</script>

<style lang="scss">
@include block("cart") {
  background-color: #34373f;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  @include element("divider") {
    height: 1px;
    background-color: rgba(255, 255, 255, 0.1);
    margin: 20px 0;
  }
  @include element("products") {
    overflow-y: auto;
    height: auto !important;
    .scrollbar-track {
      background-color: transparent;
      right: 2px;
      width: 4px;
      .scrollbar-thumb-y {
        width: 4px;
      }
    }
    .scrollbar-thumb {
      background-color: #52535a;
    }
  }
  @include element("total") {
    background-color: #52535a;
    display: flex;
    flex-direction: column;
    color: #fff;
    padding: 11px 16px;
    border-radius: 4px;
    font-size: 14px;
    line-height: 22px;
  }
  @include element("action") {
    margin-top: auto;
    display: flex;
    flex-direction: column;
  }
  @include element("empty") {
    text-align: center;
    padding: 50px 0;
    i {
      color: #fff;
      font-size: 50px;
      display: block;
      opacity: 0.5;
    }
    span {
      border-radius: 15px;
      background-color: #52535a;
      margin-top: 10px;
      padding: 5px 15px;
      display: inline-block;
      color: rgba(#fff, 0.7);
      font-size: 14px;
    }
  }
}
</style>
