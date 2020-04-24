<template>
  <div class="pos-search">
    <el-input
      class="pos-search__search"
      placeholder="Search Books"
      :value="value"
      @input="$emit('input', $event)"
    >
      <i slot="prefix" class="el-input__icon el-icon-search"></i>
    </el-input>
    <div class="pos-search__right" v-if="value">
      <div class="pos-search__result" id="id-search-result-count">
        Result {{ resultCount }} Item(s)
      </div>
      <div class="pos-search__btn-clear">
        <el-button
          id="id-button-clear-search"
          size="mini"
          icon="el-icon-close"
          title="Clear"
          @click="$emit('input', '')"
        ></el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputSearch",
  props: {
    value: {
      type: String,
      required: true
    },
    resultCount: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style lang="scss">
@include block("search") {
  position: relative;
  @include element("input") {
    .el-input__inner {
      padding-right: 165px !important;
    }
  }
  @include element("right") {
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
}
</style>
