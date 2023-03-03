<template>
  <Profile />
  <Services />
  <Reviews />
</template>

<script>
import Profile from '@/views/Profile';
import Services from '@/views/Services';
import Reviews from '@/views/Reviews';
export default {
  name: 'App',
  components: { Profile, Services, Reviews }
};
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  min-width: 360px;
  max-width: 720px;
  margin: 20px;
}
</style>
