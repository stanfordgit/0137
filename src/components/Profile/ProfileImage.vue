<template>
  <div class="profile__image image">
    <img :src="getUser.image" alt="profile-image" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'ProfileImage',
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['getUser'])
  }
};
</script>

<style lang="scss" scoped>
.profile__image {
  z-index: 2;
  max-width: 124px;
  max-height: 124px;
  min-width: 124px;
  min-height: 124px;
  left: 0px;
  right: 0px;
  img {
    width: 100%;
    height: auto;
    left: 0px;
    right: 0px;
    border-radius: 50%;
  }
}
</style>
