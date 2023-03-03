<template>
  <div class="services__header header">
    <div class="header__title">Services</div>
    <div class="header__line"></div>
  </div>
</template>

<script>
export default {
  name: 'Services'
};
</script>

<style lang="scss" scoped>
.services__header {
  display: flex;
  flex-direction: column;
  .header__title {
    align-self: flex-end;
    font-weight: 400;
    font-size: 13px;
    margin-bottom: 9px;
    margin-right: 30px;
  }
  .header__line {
    width: 317px;
    height: 0px;
    border: 1px solid $color-border;
  }
}
</style>
