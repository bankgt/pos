<template>
  <el-input-number
    class="pos-input-qty"
    size="mini"
    :min="1"
    :max="99"
    :value="value"
    @change="val => $emit('input', val)"
  ></el-input-number>
</template>

<script>
export default {
  name: "InputQty",
  props: ["value"]
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
