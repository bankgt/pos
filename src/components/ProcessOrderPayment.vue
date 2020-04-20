<template>
  <div class="pos-payment">
    <el-form
      :model="form"
      ref="form"
      label-width="100px"
      class="d-flex align-items-end flex-column"
    >
      <el-form-item
        class="m-0"
        label="Get Money"
        prop="money"
        :rules="[
          { required: true, message: 'Money is required' },
          { type: 'number', message: 'Money must be a number' }
        ]"
      >
        <el-input
          class="pos-payment__input"
          type="text"
          v-model.number="form.money"
          autocomplete="off"
          ><template slot="prepend">฿</template></el-input
        >
      </el-form-item>
    </el-form>

    <span class="d-flex justify-content-end mt-5">
      <el-button @click="dialogVisible = false">Cancel</el-button>
      <el-button type="primary">Confirm</el-button>
    </span>
  </div>
</template>

<script>
export default {
  name: "ProcessOrderPayment",
  data() {
    return {
      form: {
        money: 1000
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss">
@include block("payment") {
  @include element("input") {
    .el-input__inner {
      text-align: right;
      width: 200px;
    }
  }
}
</style>
