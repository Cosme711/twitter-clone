<template>
  <svg
    :class="size"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 18 18"
    :aria-labelledby="name"
    role="presentation"
  >
    <title :id="name" lang="en">{{ name }} Icon</title>
    <g :fill="color">
      <slot />
    </g>
  </svg>
</template>

<script lang="ts" setup>
defineProps({
  size: {
    type: String,
    default: "w-10 h-10",
  },
  name: {
    type: String,
    default: "Twitter Clone",
  },
  color: {
    type: String,
    default: "currentColor",
  },
});
</script>
