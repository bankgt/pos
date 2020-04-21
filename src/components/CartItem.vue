<template>
  <div class="pos-cart-item">
    <div class="d-flex">
      <div class="mr-3">
        <el-image class="pos-cart-item__image " :src="data.cover" fit="cover">
          <div slot="error">
            <i class="el-icon-picture-outline"></i>
          </div>
        </el-image>
      </div>
      <div class="d-flex flex-column w-100">
        <div class="position-relative">
          <el-button
            class="pos-cart-item__btn-delete"
            type="danger"
            icon="el-icon-close"
            size="mini"
            title="Remove"
            @click="remove"
          ></el-button>
          <small class="pos-cart-item__code mb-2 pt-1">#{{ data.id }}</small>
          <div class="pos-cart-item__name">
            {{ data.title }}
          </div>
          <div class="pos-cart-item__price">{{ data.price | price }}</div>
        </div>
        <div class="d-flex align-items-center mt-auto">
          <InputQty
            :value="data._qty"
            @input="setQty({ value: $event, data })"
          />
          <div class="pos-cart-item__total ml-auto">
            {{ data._total | price }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import InputQty from "@/components/InputQty";
export default {
  name: "CartItem",
  components: { InputQty },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions(["setSelectProduct", "setQty"]),
    remove() {
      this.setSelectProduct({ value: false, data: this.data });
    }
  }
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
    line-height: 16px;
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
