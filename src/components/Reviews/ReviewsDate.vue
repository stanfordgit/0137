<template>
  <div class="reviews__date">{{ formattingDate(date) }}</div>
</template>

<script>
export default {
  name: 'ReviewsName',
  data() {
    return {};
  },
  methods: {
    formattingDate(value) {
      const date = new Date(value);
      const options = { day: 'numeric', month: 'short', year: 'numeric' };
      const formattedDate = date.toLocaleDateString('en-GB', options);
      return formattedDate;
    }
  },
  props: { date: { type: String } }
};
</script>

<style lang="scss" scoped>
.reviews__date {
  font-weight: 400;
  font-size: 11px;
  color: $color-text-gray;
}
</style>
