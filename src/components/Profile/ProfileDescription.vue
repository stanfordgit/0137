<template>
  <div class="profile__description description">
    <div class="description__value">{{ getUser.description }}<br /></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'ProfileDescription',
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['getUser'])
  }
};
</script>

<style lang="scss" scoped>
.profile__description {
  height: 54px;
  display: flex;
  position: relative;
  align-items: center;
  border: 1px solid $color-border;
  border-radius: 5px;
  background-color: $color-description;
  &::before {
    height: 54px;
    width: 100%;
    position: absolute;
    content: '';
    margin-left: -50px;
    border-top: 1px solid $color-border;
    border-bottom: 1px solid $color-border;
    background-color: $color-description;
  }
  .description__value {
    display: flex;
    max-width: 85%;
    min-width: 220px;
    align-items: center;
    font-size: 14px;
    font-weight: 400;
    color: $color-text-black;
    z-index: 1;
  }
}
</style>
