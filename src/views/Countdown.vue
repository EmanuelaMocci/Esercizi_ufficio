<template>
  <div
    class="min-h-screen bg-cover bg-no-repeat bg-center"
    style="
      background-image: url('https://data.1freewallpapers.com/download/snow-winter-trees-winter-landscape-snowy-2560x1440.jpg');
    "
  >
    <h1 class="text-800 font-extrabold text-6xl pt-20">
      Countdown to 1st Jan 2023
      <!-- <font-awesome-icon icon="fa-solid fa-acorn" /> -->
      <font-awesome-icon icon="fa-solid fa-apple-whole" />
    </h1>
    <CountdownComponent />
  </div>
</template>

<script>
import CountdownComponent from "@/components/CountdownComponent.vue";

export default {
  name: "Countdown",
  components: {
    CountdownComponent,
  },
};
</script>
