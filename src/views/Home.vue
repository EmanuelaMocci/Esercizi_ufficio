<template>
  <div
    class="min-h-screen bg-cover bg-no-repeat bg-center"
    style="
      background-image: url('https://images.pling.com/img/00/00/61/29/82/1535553/482ab0dc47b24f8aa756c105a8194c7ece1c365ff64eae40db4a0cf08edba3b37d93.jpg');
    "
  >
    <h1 class="text-800 font-extrabold text-6xl pt-60 text-black text-white">
      This is the homepage
    </h1>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getEventById"]),
    ...mapState(["user", "categories"]),
  },
};
</script>
