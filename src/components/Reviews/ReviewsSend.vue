<template>
  <div class="reviews__send send">
    <textarea
      v-model="comment"
      v-on:keydown.ctrl.enter.prevent="sendReview"
      class="send__input"
      type="text"
      maxlength="200"
    />
    <button @click.prevent="sendReview" class="send__button">Send a message</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'ReviewsSend',
  data() {
    return {
      comment: ''
    };
  },
  methods: {
    sendReview() {
      this.addReview(this.comment);
      this.comment = '';
    },
    ...mapActions(['addReview'])
  }
};
</script>

<style lang="scss" scoped>
.reviews__send {
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: $color-review-background;
  margin-top: 22px;
  margin-left: -20px;
  margin-right: -20px;
  padding: 28px 21px 34px;
  .send__input {
    height: 63px;
    width: 100%;
    border-radius: 1px;
    border: 1px solid #000000;

    resize: none;
  }
  .send__button {
    display: flex;
    justify-content: center;
    width: 281px;
    padding: 10px 50px;
    margin-top: 23px;
    font-weight: 700;
    font-size: 16px;
    border-radius: 23px;
    color: $color-text-black;
    background: $color-review-button;
  }
}
</style>
