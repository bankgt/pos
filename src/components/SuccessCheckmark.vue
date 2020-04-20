<template>
  <div class="pos-success-checkmark">
    <Checkmark />
    <div class="pos-success-checkmark__text">Successfully</div>
  </div>
</template>

<script>
import Checkmark from "@/components/Checkmark";
export default {
  name: "SuccessCheckmark",
  components: { Checkmark }
};
</script>

<style lang="scss">
@include block("success-checkmark") {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @include element("text") {
    color: #67c23a;
    font-size: 28px;
  }
}
</style>
