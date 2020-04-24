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
          class="pos-order-clearing__input id-input-money"
          type="text"
          v-model="getMoney"
          autocomplete="off"
          disabled
        ></el-input>
      </el-form-item>
      <el-form-item class="m-0" label="Change" prop="change">
        <el-input
          class="pos-order-clearing__input id-input-change"
          type="text"
          v-model="change"
          autocomplete="off"
          readonly
        ></el-input>
      </el-form-item>
    </el-form>

    <span class="d-flex justify-content-end mt-5">
      <el-button class="id-button-cancel" @click="$emit('cancel')"
        >Back</el-button
      >
      <el-button
        class="id-button-submit"
        @click="$emit('submit')"
        type="primary"
        >Finish</el-button
      >
    </span>
  </div>
</template>

<script>
export default {
  name: "ProcessOrderClearing",
  data() {
    return {
      form: null
    };
  },
  computed: {
    getMoney: vm => vm.$options.filters.price(vm.money),
    change: vm => vm.$options.filters.price(vm.money - vm.summary.total)
  },
  props: {
    money: {
      type: Number,
      required: true
    },
    summary: {
      type: Object,
      required: true
    }
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
