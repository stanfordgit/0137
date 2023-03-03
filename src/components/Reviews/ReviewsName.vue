<template>
  <div class="reviews__name">{{ fullName }}</div>
</template>

<script>
export default {
  name: 'ReviewsName',
  data() {
    return {};
  },
  computed: {
    fullName() {
      return `${this.firstname} ${this.lastname}`;
    }
  },
  props: { firstname: { type: String, default: 'No' }, lastname: { type: String, default: 'Name' } }
};
</script>

<style lang="scss" scoped>
.reviews__name {
  font-weight: 700;
  font-size: 14px;
  margin-right: 8px;
}
</style>
