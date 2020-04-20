<template>
  <el-dialog
    title=""
    :show-close="false"
    :close-on-click-modal="false"
    :visible.sync="dialogVisible"
    width="500px"
  >
    <div class="pos-customer-thankyou">
      <Checkmark />
      <span>
        Thank you for using our service.
      </span>
    </div>
  </el-dialog>
</template>

<script>
import Checkmark from "@/components/Checkmark";
export default {
  name: "ModalThankyou",
  components: { Checkmark },
  data() {
    return {
      dialogVisible: false
    };
  }
};
</script>

<style lang="scss">
@include block("customer-thankyou") {
  text-align: center;
  & > span {
    color: #52535a;
    margin: 10px 0 20px 0;
    display: inline-block;
    font-size: 24px;
    font-weight: 600;
  }
}
</style>
