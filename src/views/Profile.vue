<template>
  <div class="profile">
    <ProfileImage />
    <div class="block">
      <ProfileInfo />
      <ProfileDescription />
    </div>
  </div>
</template>

<script>
import ProfileImage from '@/components/Profile/ProfileImage';
import ProfileInfo from '@/components/Profile/ProfileInfo';
import ProfileDescription from '@/components/Profile/ProfileDescription';
export default {
  name: 'Profile',
  data() {
    return {};
  },
  components: {
    ProfileImage,
    ProfileInfo,
    ProfileDescription
  }
};
</script>

<style lang="scss" scoped>
.profile {
  display: flex;
  margin-bottom: 30px;
  .block {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
  }
}
</style>
