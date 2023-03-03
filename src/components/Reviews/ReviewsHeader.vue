<template>
  <div class="reviews__header header">
    <div class="header__title title">
      <div class="title__value">Latest reviews</div>
      <div class="title__link">All reviews</div>
    </div>
    <div class="header__stats stats">
      <div class="stats__like like">
        <div class="like__icon">
          <img :src="require('../../assets/images/like.svg')" alt="icon-like" />
        </div>
        <div class="like__count">131</div>
      </div>
      <div class="stats__comment comment">
        <div class="comment__icon">
          <img :src="require('../../assets/images/comment.svg')" alt="icon-comment" />
        </div>
        <div class="comment__count">{{ counterReviews }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'ReviewsHeader',
  data() {
    return {};
  },
  computed: {
    counterReviews() {
      return this.getReviews.length;
    },
    ...mapGetters(['getReviews'])
  }
};
</script>

<style lang="scss" scoped>
.reviews__header {
  display: flex;
  margin-bottom: 13px;
  width: 100%;
  justify-content: space-between;
  .header__title {
    display: flex;
    align-items: center;
    .title__value {
      font-weight: 700;
      font-size: 16px;
      line-height: 16px;
      margin-right: 8px;
    }
    .title__link {
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: $color-link;
      text-decoration: underline;
      cursor: pointer;
    }
  }
  .header__stats {
    display: flex;
    img {
      display: flex;
    }
    .stats__like {
      display: flex;
      align-items: center;
      .like__count {
        margin-left: 3px;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
      }
    }
    .stats__comment {
      display: flex;
      align-items: center;
      margin-left: 16px;
      .comment__count {
        margin-left: 3px;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
      }
    }
  }
}
</style>
