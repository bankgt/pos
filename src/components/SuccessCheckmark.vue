<template>
  <div class="pos-success-checkmark">
    <div class="pos-success-checkmark__checkmark">
      <div class="pos-success-checkmark__check-icon">
        <span
          class="pos-success-checkmark__icon-line pos-success-checkmark__line-tip"
        ></span>
        <span
          class="pos-success-checkmark__icon-line pos-success-checkmark__line-long"
        ></span>
        <div class="pos-success-checkmark__icon-circle"></div>
        <div class="pos-success-checkmark__icon-fix"></div>
      </div>
    </div>
    <div class="pos-success-checkmark__text">Successfully</div>
  </div>
</template>

<script>
export default {};
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
  @include element("checkmark") {
    width: 80px;
    height: 115px;
  }
  @include element("check-icon") {
    width: 80px;
    height: 80px;
    position: relative;
    border-radius: 50%;
    box-sizing: content-box;
    border: 4px solid #67c23a;

    &::before {
      top: 3px;
      left: -2px;
      width: 30px;
      transform-origin: 100% 50%;
      border-radius: 100px 0 0 100px;
    }

    &::after {
      top: 0;
      left: 30px;
      width: 60px;
      transform-origin: 0 50%;
      border-radius: 0 100px 100px 0;
      animation: rotate-circle 4.25s ease-in;
    }

    &::before,
    &::after {
      content: "";
      height: 100px;
      position: absolute;
      background: #ffffff;
      transform: rotate(-45deg);
    }
  }
  @include element("icon-line") {
    height: 5px;
    background-color: #67c23a;
    display: block;
    border-radius: 2px;
    position: absolute;
    z-index: 10;
  }
  @include element("line-tip") {
    top: 46px;
    left: 14px;
    width: 25px;
    transform: rotate(45deg);
    animation: icon-line-tip 0.75s;
  }
  @include element("line-long") {
    top: 38px;
    right: 8px;
    width: 47px;
    transform: rotate(-45deg);
    animation: icon-line-long 0.75s;
  }
  @include element("icon-circle") {
    top: -4px;
    left: -4px;
    z-index: 10;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    position: absolute;
    box-sizing: content-box;
    border: 4px solid rgba(#67c23a, 0.5);
  }
  @include element("icon-fix") {
    top: 8px;
    width: 5px;
    left: 26px;
    z-index: 1;
    height: 85px;
    position: absolute;
    transform: rotate(-45deg);
    background-color: #ffffff;
  }
}

@keyframes rotate-circle {
  0% {
    transform: rotate(-45deg);
  }
  5% {
    transform: rotate(-45deg);
  }
  12% {
    transform: rotate(-405deg);
  }
  100% {
    transform: rotate(-405deg);
  }
}

@keyframes icon-line-tip {
  0% {
    width: 0;
    left: 1px;
    top: 19px;
  }
  54% {
    width: 0;
    left: 1px;
    top: 19px;
  }
  70% {
    width: 50px;
    left: -8px;
    top: 37px;
  }
  84% {
    width: 17px;
    left: 21px;
    top: 48px;
  }
  100% {
    width: 25px;
    left: 14px;
    top: 45px;
  }
}

@keyframes icon-line-long {
  0% {
    width: 0;
    right: 46px;
    top: 54px;
  }
  65% {
    width: 0;
    right: 46px;
    top: 54px;
  }
  84% {
    width: 55px;
    right: 0px;
    top: 35px;
  }
  100% {
    width: 47px;
    right: 8px;
    top: 38px;
  }
}
</style>
