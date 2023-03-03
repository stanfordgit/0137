<template>
  <div class="services__footer footer">
    <div class="footer__line"></div>
    <div class="footer__block block">
      <div class="block__title">Total</div>
      <div class="block__quantity">{{ dataCalc }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'ServicesFooter',
  data() {
    return {};
  },
  computed: {
    dataCalc() {
      return this.getServices.reduce((acc, obj) => acc + obj.data, 0);
    },
    ...mapGetters(['getServices'])
  }
};
</script>

<style lang="scss" scoped>
.services__footer {
  display: flex;
  flex-direction: column;
  .footer__block {
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    margin-top: 9px;
    font-size: 16px;
    margin-right: 30px;
  }
  .footer__line {
    width: 317px;
    height: 0px;
    border: 1px solid $color-border;
  }
}
</style>
