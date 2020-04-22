<template>
  <div class="pos-payment">
    <el-form
      :model="form"
      :rules="rules"
      ref="form"
      label-width="100px"
      class="d-flex align-items-end flex-column"
      @submit.native.prevent="submitForm"
    >
      <el-form-item class="m-0" label="Get Money" prop="money">
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
      <el-button @click="$emit('cancel')">Cancel</el-button>
      <el-button type="primary" @click="submitForm">Confirm</el-button>
    </span>
  </div>
</template>

<script>
export default {
  name: "ProcessOrderPayment",
  data() {
    const validatorMoneyValue = (rule, value, callback) => {
      if (value < this.summary.total) {
        callback(
          new Error("Money must be greater than or equal to the total price.")
        );
      } else {
        callback();
      }
    };
    return {
      form: {
        money: null
      },
      rules: {
        money: [
          { required: true, message: "Money is required" },
          { type: "number", message: "Money must be a number" },
          { validator: validatorMoneyValue, trigger: "blur" }
        ]
      }
    };
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
  },
  created() {
    if (this.money) {
      this.form.money = this.money;
    }
  },
  methods: {
    submitForm() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.$emit("submit", this.form);
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
