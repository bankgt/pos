<template>
  <div class="pos-cart">
    <Title class="p-3 mb-1">
      Cart
      <template v-slot:right>
        <el-button type="text" size="mini">Clear All</el-button>
      </template>
    </Title>

    <div class="pos-cart__empty mx-3">
      <i class="el-icon-receiving"></i>
      <span>
        Cart is empty.
      </span>
    </div>

    <!-- <smooth-scrollbar class="pos-cart__products px-3">
      <CartItem />
      <div class="pos-cart__divider"></div>
      <CartItem />
      <div class="pos-cart__divider"></div>
      <CartItem />
      <div class="pos-cart__divider"></div>
      <CartItem />
      <div class="pos-cart__divider"></div>
      <CartItem />
    </smooth-scrollbar> -->

    <div class="pos-cart__action p-3 pt-4">
      <!-- <div class="pos-cart__total mb-2">
        <div>Price Total :</div>
        <div class="ml-auto">฿600</div>
      </div> -->
      <el-button type="primary" class="mt-auto w-100">PROCESS ORDER</el-button>
    </div>
  </div>
</template>

<script>
// import CartItem from "@/components/CartItem";
import Title from "@/components/Title";
export default {
  name: "Cart",
  components: { Title }
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
    color: #fff;
    padding: 11px 16px;
    border-radius: 4px;
    font-size: 14px;
  }
  @include element("action") {
    display: flex;
    flex-grow: 1;
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
