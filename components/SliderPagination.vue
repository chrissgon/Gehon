<template>
  <footer class="flex justify-between items-center mt-5">
    <!-- back -->
    <button @click="back" class="btn btn-white rounded-full !p-4 !py-3">
      <i class="bi-chevron-left"></i>
    </button>

    <!-- dots -->
    <div class="flex gap-1">
      <span
        v-for="i in size"
        @click="set(i)"
        :key="i"
        class="w-2 h-2 flex bg-black rounded-full cursor-pointer"
        :class="{ 'opacity-20': i !== item }"
      ></span>
    </div>

    <!-- next -->
    <button @click="next" class="btn btn-white rounded-full !p-4 !py-3">
      <i class="bi-chevron-right"></i>
    </button>
  </footer>
</template>

<script setup lang="ts">
// props
interface IProps {
  size: number;
}
const props = defineProps<IProps>();

// data
const item = ref<number>(1);

// methods
function back(): void {
  if (item.value === 1) return;
  item.value = item.value - 1;
  change();
}
function next(): void {
  if (item.value === props.size) return;
  item.value = item.value + 1;
  change();
}
function set(slide: number): void {
  item.value = slide;
  change();
}
function change(): void {
  emit("change", item.value);
}

// emits
interface IEmits {
  (e: "change", item: number): void;
}
const emit = defineEmits<IEmits>();
</script>

<style scoped></style>
