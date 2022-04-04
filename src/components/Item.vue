<template>
  <li class="px-4 border-solid border-l border-white flex items-center">
    <font-awesome-icon class="p-0 lg:pr-2 lg:hidden xl:block" :icon="icon" />
    <span class="hidden sm:hidden lg:block"><slot></slot></span>
  </li>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
};
</script>
