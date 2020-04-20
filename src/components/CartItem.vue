<template>
  <div class="pos-cart-item">
    <div class="d-flex">
      <div>
        <el-image
          class="pos-cart-item__image mr-3"
          src="
          https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9781/4088/9781408855652.jpg
        "
          fit="cover"
        >
          <div slot="error">
            <i class="el-icon-picture-outline"></i>
          </div>
        </el-image>
      </div>
      <div class="d-flex flex-column">
        <div class="position-relative">
          <el-button
            class="pos-cart-item__btn-delete"
            type="danger"
            icon="el-icon-delete"
            size="mini"
            title="Remove"
          ></el-button>
          <small class="pos-cart-item__code mb-2 pt-1">#9781408855706</small>
          <div class="pos-cart-item__name">
            Harry Potter and the Philosopher's Stone (I)
          </div>
          <div class="pos-cart-item__price">฿250</div>
        </div>
        <div class="d-flex align-items-center mt-auto">
          <InputQty />
          <div class="pos-cart-item__total is-discount ml-auto">
            <small class="pos-cart-item__discount">฿250</small>
            ฿350
          </div>
        </div>
      </div>
    </div>
    <small class="pos-cart-item__remark"
      >&#8226; buy 2 unique series books discount 10%</small
    >
  </div>
</template>

<script>
import InputQty from "@/components/InputQty";
export default {
  name: "CartItem",
  components: { InputQty }
};
</script>

<style lang="scss">
@include block("cart-item") {
  color: #fff;
  @include element("image") {
    width: 80px;
    height: 120px;
    background-color: #f5f7fa;
    font-size: 24px;
    color: #909399;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
  }
  @include element("code") {
    font-size: 11px;
    opacity: 0.6;
    display: block;
  }
  @include element("name") {
    font-size: 12px;
  }
  @include element("price") {
    margin-top: 4px;
    font-size: 14px;
  }
  @include element("total") {
    text-align: right;
    font-size: 14px;
    @include when("discount") {
      color: $--color-primary;
    }
  }
  @include element("discount") {
    color: #fff;
    text-decoration: line-through;
    font-size: 11px;
    display: block;
    line-height: 10px;
    margin-top: 4px;
  }
  @include element("remark") {
    font-size: 12px;
    opacity: 0.6;
    display: block;
    margin-top: 4px;
  }
  @include element("btn-delete") {
    position: absolute;
    right: 0;
    top: 0;
    padding: 4px 4px;
    z-index: 10;
  }
}
</style>
