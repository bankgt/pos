<template>
  <div
    class="pos-product"
    :class="{ 'is-active': isActive }"
    @click="isActive = !isActive"
  >
    <div class="pos-product__image-container">
      <el-image
        class="pos-product__image"
        src="
            https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4088/9781408855652.jpg
          "
        fit="cover"
      >
        <div slot="error">
          <i class="el-icon-picture-outline"></i>
        </div>
      </el-image>
      <div class="pos-product__selected-overlay"></div>
      <div class="pos-product__selected-icon">
        <i class="el-icon-success"></i>
      </div>
    </div>
    <div class="pos-product__code mt-2">
      #9781408855706
    </div>
    <div class="pos-product__name mb-2">
      Harry Potter and the Philosopher's Stone (I)
    </div>
    <div class="pos-product__price">฿270</div>
  </div>
</template>

<script>
export default {
  name: "Product",
  data() {
    return {
      isActive: false
    };
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
