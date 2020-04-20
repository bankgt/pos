<template>
  <el-input-number
    class="pos-input-qty"
    size="mini"
    v-model="num4"
  ></el-input-number>
</template>

<script>
export default {
  name: "InputQty",
  components: {}
};
</script>

<style lang="scss">
@include block("input-qty") {
  width: 90px !important;
  .el-input-number__increase,
  .el-input-number__decrease {
    color: #fff;
    background-color: #333;
    border-color: transparent;
  }
  .el-input__inner {
    border-color: transparent;
    background-color: #52535a;
    color: #fff;
  }
}
</style>
