<template>
  <article class="card">
    <div class="card-body">
      <header class="flex items-center gap-4">
        <!-- avatar -->
        <img :src="review.picture" />

        <!-- info -->
        <h4>
          <b class="text-base font-medium">{{ review.name }}</b>
          <!-- <br> -->
          <p class="flex gap-1">
            <i
              v-for="i in review.stars"
              class="bi bi-star-fill text-xs text-amber-400"
            ></i>
            <i
              v-for="i in maxStars - review.stars"
              class="bi bi-star-fill text-xs text-secondary opacity-50"
            ></i>
          </p>
        </h4>
      </header>

      <!-- comments -->
      <p class="mt-4 text-sm">{{ review.comment }}</p>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { IReview } from "~/interfaces.ts";

// props
interface IProps {
  review: IReview;
}
const props = defineProps<IProps>();

// data
const maxStars = ref<number>(5);
</script>

<style scoped></style>
