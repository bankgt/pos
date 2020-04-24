<template>
  <div
    class="pos-product id-product"
    :class="{ 'is-active': data._isSelected }"
    @click="$emit('click')"
  >
    <div class="pos-product__image-container">
      <el-image class="pos-product__image" :src="data.cover" fit="cover">
        <div slot="error">
          <i class="el-icon-picture-outline"></i>
        </div>
      </el-image>
      <div class="pos-product__selected-overlay"></div>
      <div class="pos-product__selected-icon">
        <i class="el-icon-success"></i>
      </div>
    </div>
    <div class="pos-product__code mt-2 id-product-code">#{{ data.id }}</div>
    <div class="pos-product__name mb-2 id-product-name">
      {{ data.title }}
    </div>
    <div class="pos-product__price id-product-price">
      {{ data.price | price }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: {
    data: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss">
@include block("product") {
  &:active {
    transform: translateY(4px);
  }
  @include element("image-container") {
    position: relative;
    cursor: pointer;
    &:hover {
      @include element("selected-overlay") {
        opacity: 1;
      }
    }
  }
  @include element("image") {
    width: 147px;
    height: 220px;
    background-color: #f5f7fa;
    font-size: 58px;
    color: #909399;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
  }
  @include element("selected-overlay") {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    top: 0;
    left: 0;
    transition: opacity 100ms ease-in;
    opacity: 0;
  }
  @include element("selected-icon") {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    opacity: 0;
  }
  @include element("code") {
    font-size: 11px;
    color: #909399;
  }
  @include element("name") {
    font-size: 14px;
  }
  @include element("price") {
    font-weight: 500;
  }
  @include when("active") {
    @include element("selected-overlay") {
      opacity: 1;
    }
    @include element("selected-icon") {
      opacity: 1;
    }
  }
}
</style>
