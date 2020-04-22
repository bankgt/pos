<template>
  <el-dialog
    title="Process Order"
    width="600px"
    :show-close="false"
    :close-on-click-modal="false"
    :destroy-on-close="true"
    :visible="visible"
  >
    <el-steps
      :space="200"
      :active="step"
      finish-status="success"
      align-center
      class="mb-4 justify-content-center"
    >
      <el-step title="Add Cart" :icon="null"></el-step>
      <el-step
        title="Payment"
        :icon="step <= 1 ? 'el-icon-money' : null"
      ></el-step>
      <el-step
        title="Clearing"
        :icon="step <= 2 ? 'el-icon-document-checked' : null"
      ></el-step>
    </el-steps>

    <div class="position-relative">
      <div class="pos-order-total mb-4">
        <div>Price Total :</div>
        <div class="ml-auto">{{ summary.total | price }}</div>
      </div>
      <ProcessOrderPayment
        v-if="step == 1"
        @cancel="setProcessOrder(null)"
        @submit="submitPayment"
        :summary="summary"
        :money="money"
      />
      <ProcessOrderClearing
        v-if="step >= 2"
        @cancel="cancelClearing"
        @submit="submitClearing"
        :summary="summary"
        :money="money"
      />
      <transition name="el-fade-in">
        <SuccessCheckmark v-if="step == 3" />
      </transition>
    </div>
  </el-dialog>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ProcessOrderPayment from "@/components/ProcessOrderPayment";
import ProcessOrderClearing from "@/components/ProcessOrderClearing";
import SuccessCheckmark from "@/components/SuccessCheckmark";
import { ORDER_STATUS } from "@/store";
export default {
  name: "ModalProcessOrder",
  components: { ProcessOrderPayment, ProcessOrderClearing, SuccessCheckmark },
  computed: {
    ...mapGetters({
      order: "order"
    }),
    summary: vm => (vm.order ? vm.order.summary : {}),
    money: vm => (vm.order ? vm.order.money || 0 : 0),
    visible: vm => vm.order !== null,
    step() {
      if (!this.order) return 0;
      switch (this.order.status) {
        case ORDER_STATUS.PAYMENT:
          return 1;
        case ORDER_STATUS.CLEARING:
          return 2;
        case ORDER_STATUS.SUCCESS:
          return 3;
        default:
          return 0;
      }
    }
  },
  methods: {
    ...mapActions({
      setProcessOrder: "setProcessOrder"
    }),
    submitPayment({ money }) {
      this.setProcessOrder({ status: ORDER_STATUS.CLEARING, money });
    },
    cancelClearing() {
      this.setProcessOrder({ status: ORDER_STATUS.PAYMENT });
    },
    submitClearing() {
      this.setProcessOrder({ status: ORDER_STATUS.SUCCESS }).then(() => {
        setTimeout(() => {
          this.setProcessOrder(null);
        }, 1500);
      });
    }
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
