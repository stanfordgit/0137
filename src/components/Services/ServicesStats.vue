<template>
  <div class="services__stats stats">
    <div class="stats__list list">
      <div
        v-for="service in getServices"
        :key="service.id"
        class="list__item item"
        :style="{
          'width': (service.data / dataCalc) * 100 + '%',
          'background-color': service.color
        }"
      >
        <div class="item__value">{{ service.value }}</div>
        <div class="item__data">{{ service.data }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'ServicesStats',
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
.services__stats {
  width: 317px;
  margin-top: 15px;
  margin-bottom: 15px;
  .stats__list {
    display: flex;
    flex-direction: column;
    border-left: 1px solid $color-border;
    position: relative;
    .list__item {
      display: flex;
      height: 24px;
      max-width: 100%;
      margin-bottom: 2px;
      border-radius: 0px 3px 3px 0px;
      &:last-child {
        margin-bottom: 0;
      }
      .item__value {
        position: absolute;
        margin-left: 6px;
      }
      .item__data {
        position: absolute;
        font-weight: 700;
        right: 30px;
      }
    }
  }
}
</style>
