<template>
  <div @paste="handlePaste" class="reviews__comment">
    {{ comment }}
  </div>
</template>

<script>
export default {
  name: 'ReviewsComment',
  data() {
    return {};
  },
  props: { comment: { type: String } }
};
</script>

<style lang="scss" scoped>
.reviews__comment {
  position: relative;
  max-height: 400px;
  padding: 15px;
  font-weight: 400;
  font-size: 14px;
  box-shadow: 0px 4px 10px rgba($color-shadow, 0.1);
  border: 1px solid $color-comment-border;
  background-color: $color-comment;
  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;

    border: 8px solid transparent;
    border-right-color: $color-comment-border;
    transform: rotate(-45deg);

    top: -8px;
    left: 13px;
  }

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;

    border: 7px solid transparent;
    border-right-color: $color-comment;
    transform: rotate(-45deg);

    top: -6px;
    left: 15px;
  }
}
</style>
