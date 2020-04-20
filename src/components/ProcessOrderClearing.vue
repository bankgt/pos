<template>
  <div class="pos-order-clearing">
    <el-form
      :model="form"
      ref="form"
      label-width="100px"
      class="d-flex align-items-end flex-column"
    >
      <el-form-item class="" label="Get Money" prop="money">
        <el-input
          class="pos-order-clearing__input"
          type="text"
          v-model.number="form.money"
          autocomplete="off"
          disabled
        ></el-input>
      </el-form-item>
      <el-form-item class="m-0" label="Change" prop="change">
        <el-input
          class="pos-order-clearing__input"
          type="text"
          v-model.number="form.change"
          autocomplete="off"
          readonly
        ></el-input>
      </el-form-item>
    </el-form>

    <span class="d-flex justify-content-end mt-5">
      <el-button>Back</el-button>
      <el-button type="primary">Finish</el-button>
    </span>
  </div>
</template>

<script>
export default {
  name: "ProcessOrderClearing",
  data() {
    return {
      form: {
        money: "฿1,000",
        change: "฿400"
      }
    };
  }
};
</script>

<style lang="scss">
@include block("order-clearing") {
  @include element("input") {
    .el-input__inner {
      text-align: right;
      width: 200px;
      &:read-only {
        border-color: $--color-primary;
      }
    }
  }
}
</style>
