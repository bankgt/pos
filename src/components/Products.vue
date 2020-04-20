<template>
  <div class="pos-products">
    <div class="p-4">
      <div class="position-relative">
        <el-input
          class="pos-products__input-search"
          placeholder="Search Books"
          v-model="textSearch"
        >
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <div class="pos-products__input-right">
          <div class="pos-products__result">Result 0 Item(s)</div>
          <div class="pos-products__btn-clear">
            <el-button
              size="mini"
              icon="el-icon-close"
              title="Clear"
            ></el-button>
          </div>
        </div>
      </div>
    </div>
    <smooth-scrollbar class="pos-products__list px-4 mb-3">
      <div class="pos-products__grid">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </smooth-scrollbar>
  </div>
</template>

<script>
import Product from "@/components/Product";
export default {
  name: "Products",
  components: { Product },
  data() {
    return {
      textSearch: ""
    };
  }
};
</script>

<style lang="scss">
@include block("products") {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  @include element("input-search") {
    .el-input__inner {
      padding-right: 165px !important;
    }
  }
  @include element("input-right") {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    height: 100%;
    align-items: center;
  }
  @include element("result") {
    color: $--color-primary;
    margin-right: 10px;
    font-size: 14px;
  }
  @include element("btn-clear") {
    margin-right: 8px;
    .el-button--mini {
      padding: 4px;
      font-size: 14px;
    }
  }
  @include element("list") {
    flex-grow: 1;
    .scrollbar-track {
      background-color: transparent;
      right: 2px;
      width: 4px;
      .scrollbar-thumb-y {
        width: 4px;
      }
    }
  }
  @include element("grid") {
    display: grid;
    grid-template-columns: 147px 147px 147px 147px;
    grid-gap: 1.5rem;
  }
}
</style>
