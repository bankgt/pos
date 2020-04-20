<template>
  <div class="pos-products">
    <div class="p-4">
      <InputSearch />
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
import InputSearch from "@/components/InputSearch";
import Product from "@/components/Product";
export default {
  name: "Products",
  components: { InputSearch, Product },
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
