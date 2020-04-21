<template>
  <div class="pos-products">
    <div class="p-4">
      <InputSearch
        :value="textSearch"
        @input="search($event)"
        :result-count="data.length"
      />
    </div>
    <smooth-scrollbar class="pos-products__list px-4 mb-3">
      <div class="pos-products__grid">
        <Product
          v-for="item in data"
          :key="item.id"
          :data="item"
          @click="select({ value: !item._isSelected, data: item })"
        />
      </div>
    </smooth-scrollbar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import InputSearch from "@/components/InputSearch";
import Product from "@/components/Product";
export default {
  name: "Products",
  components: { InputSearch, Product },
  computed: {
    ...mapGetters(["textSearch"])
  },
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  methods: {
    ...mapActions({
      search: "searchProducts",
      select: "setSelectProduct"
    })
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
