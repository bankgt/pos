<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600&display=swap");
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";
@import "~bootstrap/scss/grid";
@import "~bootstrap/scss/utilities";

*,
*:before,
*:after {
  box-sizing: border-box;
}
html,
body {
  background-color: #e5e9ec !important;
}
body {
  padding: 80px;
  margin: 0;
  font-family: "Quicksand", sans-serif;
  font-weight: 500;
}
button,
input {
  font-family: "Quicksand", sans-serif;
  font-weight: 500;
}
.v-modal {
  opacity: 0.9 !important;
  background-color: #fff !important;
}
.el-dialog__title {
  font-size: 24px !important;
  font-weight: 600;
}
</style>
