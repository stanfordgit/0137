<template>
  <div class="reviews">
    <ReviewsHeader />
    <div class="reviews__list">
      <div v-for="review in getReviews" :key="review.id" class="list__comment comment">
        <div class="comment__info">
          <ReviewsName :firstname="review.firstname" :lastname="review.lastname" />
          <ReviewsDate :date="review.date" />
        </div>
        <ReviewsComment :comment="review.comment" />
      </div>
    </div>
    <ReviewsSend />
  </div>
</template>

<script>
import ReviewsHeader from '@/components/Reviews/ReviewsHeader';
import ReviewsName from '@/components/Reviews/ReviewsName';
import ReviewsDate from '@/components/Reviews/ReviewsDate';
import ReviewsComment from '@/components/Reviews/ReviewsComment';
import ReviewsSend from '@/components/Reviews/ReviewsSend';
import { mapGetters } from 'vuex';

export default {
  name: 'Reviews',
  data() {
    return {};
  },
  components: {
    ReviewsHeader,
    ReviewsName,
    ReviewsDate,
    ReviewsComment,
    ReviewsSend
  },
  computed: {
    ...mapGetters(['getReviews'])
  }
};
</script>

<style lang="scss" scoped>
.reviews {
  display: flex;
  flex-direction: column;
  width: 100%;

  .reviews__list {
    width: 100%;
    .list__comment {
      margin-top: 17px;
      &:first-child {
        margin-top: 0;
      }
      .comment__info {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
