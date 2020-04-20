<template>
  <div class="pos-cashier-layout" v-loading="loading">
    <div class="pos-cashier-layout__main">
      <Products />
    </div>
    <div class="pos-cashier-layout__sidebar">
      <Cart />
    </div>
    <ModalProcessOrder :visible="dialogVisible" />
  </div>
</template>

<script>
import Products from "@/components/Products";
import Cart from "@/components/Cart";
import ModalProcessOrder from "@/components/ModalProcessOrder";
export default {
  name: "Cashier",
  components: { Products, Cart, ModalProcessOrder },
  data() {
    return {
      loading: false,
      dialogVisible: false
    };
  }
};
</script>

<style lang="scss">
@include block("cashier-layout") {
  background-color: #fff;
  width: 982px;
  min-width: 982px;
  height: 680px;
  overflow: hidden;
  display: flex;
  margin: 0 auto;
  box-shadow: 4px 0px 50px 0px rgba(0, 0, 0, 0.3);
  @include element("main") {
    width: 100%;
    display: flex;
  }
  @include element("sidebar") {
    width: 400px;
    display: flex;
  }
}
</style>
