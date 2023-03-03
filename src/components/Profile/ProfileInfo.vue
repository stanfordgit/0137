<template>
  <div class="profile__info info">
    <div class="info__fullname">{{ fullName }}</div>
    <div class="info__position">{{ getUser.position }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'ProfileInfo',
  data() {
    return {};
  },
  computed: {
    fullName() {
      return `${this.getUser.firstname} ${this.getUser.lastname}`;
    },
    ...mapGetters(['getUser'])
  }
};
</script>

<style lang="scss" scoped>
.profile__info {
  .info__fullname {
    height: 20px;
    margin-bottom: 2px;
    font-size: 16px;
    font-weight: 700;
    color: $color-text-black;
  }
  .info__position {
    height: 20px;
    margin-bottom: 2px;
    font-size: 12px;
    font-weight: 400;
    color: $color-text-gray;
  }
}
</style>
