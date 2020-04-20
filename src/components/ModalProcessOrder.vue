<template>
  <el-dialog
    title="Process Order"
    width="600px"
    :visible.sync="dialogVisible"
    :show-close="false"
    :close-on-click-modal="false"
  >
    <el-steps
      :space="200"
      :active="2"
      finish-status="success"
      align-center
      class="mb-4 justify-content-center"
    >
      <el-step title="Add Cart" :icon="false"></el-step>
      <!-- <el-step title="Payment" icon="el-icon-money"></el-step> -->
      <el-step title="Payment" :icon="false"></el-step>
      <el-step title="Clearing" icon="el-icon-document-checked"></el-step>
    </el-steps>

    <div class="position-relative">
      <div class="pos-order-total mb-4">
        <div>Price Total :</div>
        <div class="ml-auto">฿600</div>
      </div>
      <ProcessOrderPayment v-if="!dialogVisible" />
      <ProcessOrderClearing />
      <transition name="el-fade-in">
        <SuccessCheckmark v-if="dialogVisible" />
      </transition>
    </div>
  </el-dialog>
</template>

<script>
import ProcessOrderPayment from "@/components/ProcessOrderPayment";
import ProcessOrderClearing from "@/components/ProcessOrderClearing";
import SuccessCheckmark from "@/components/SuccessCheckmark";
export default {
  name: "ModalProcessOrder",
  components: { ProcessOrderPayment, ProcessOrderClearing, SuccessCheckmark },
  data() {
    return {
      dialogVisible: false
    };
  }
};
</script>

<style lang="scss">
@include block("order-total") {
  background-color: #52535a;
  display: flex;
  color: #fff;
  padding: 11px 16px;
  border-radius: 4px;
  font-size: 14px;
}
</style>
