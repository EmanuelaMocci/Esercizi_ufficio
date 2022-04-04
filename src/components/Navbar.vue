<template>
  <div
    class="bg-gray-700 text-white flex justify-between border-b border-white"
  >
    <ul class="flex font-semibold text-xs h-10 leading-10">
      <li class="px-4 border-solid border-r border-white flex items-center">
        <img style="max-width: 100px" src="../assets/kl-logo.png" alt="" />
      </li>
      <li class="px-4 border-solid border-r border-white">
        <font-awesome-icon icon="fas fa-home" />
      </li>
      <li class="px-4 border-solid border-r border-white flex items-center">
        <font-awesome-icon
          class="p-0 lg:pr-2 lg:hidden xl:block"
          icon="fas fa-search"
        />
        <span class="hidden sm:hidden lg:block">SELECT </span>&nbsp;
        <span class="hidden sm:hidden lg:block"> INSTANCE</span>
      </li>
    </ul>

    <ul class="flex font-semibold text-xs h-10 leading-10">
      <Item v-for="item in items" :key="item.id" :icon="item.icon">
        {{ item.title }}</Item
      >

      <li class="px-4 border-solid border-l border-white flex items-center">
        <span class="hidden sm:hidden lg:block"
          >emanuela.mocci@kleecks.com</span
        >
        <font-awesome-icon
          class="p-0 lg:pl-2 lg:hidden xl:block"
          icon="fas fa-caret-down"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import Item from "./Item.vue";

export default {
  name: "Navbar",
  components: {
    Item,
  },
  data() {
    return {
      items: [
        {
          icon: "fas fa-border-all",
          title: "DASHBOARD",
        },
        {
          icon: "fas fa-cog",
          title: "SETTINGS",
        },
        {
          icon: "fas fa-list",
          title: "PROPERTIES 1",
        },
        {
          icon: "fas fa-list",
          title: "PROPERTIES 2",
        },
        {
          icon: "fas fa-code",
          title: "EDITORS",
        },
      ],
    };
  },
};
</script>
