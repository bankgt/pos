<template>
  <div class="pos-title d-flex align-items-center">
    <el-badge
      :value="badge"
      class="pos-title__counter"
      type="primary"
      v-if="showBadge"
    >
      <h2 class="pos-title__title"><slot></slot></h2>
    </el-badge>
    <h2 class="pos-title__title" v-else><slot></slot></h2>
    <div class="ml-auto" v-if="$slots.right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showBadge: {
      type: Boolean,
      default: true
    },
    badge: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style lang="scss">
@include block("title") {
  @include element("title") {
    color: #fff;
    margin: 0;
  }
  @include element("counter") {
    .el-badge__content {
      color: #fff;
      top: 17px;
      right: -8px;
      border: 0;
      font-weight: 600;
    }
  }
}
</style>
