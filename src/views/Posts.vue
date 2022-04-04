<template>
  <div class="flex flex-col">
    <h1 class="mb-6">Posts</h1>
    <div
      v-for="evento in getEventi"
      :key="evento.id"
      class="mt-3 group w-6/12 m-auto"
    >
      <router-link
        :to="{ name: 'PostsDetails', params: { id: evento.id } }"
        class="flex justify-between bg-white text-black font-bold rounded-xl p-4 capitalize"
      >
        <ul>
          <li class="hover:text-blue-400 text-base" @click="postDetails()">
            {{ evento.title }}
          </li>
        </ul>
        <font-awesome-icon
          icon="fas fa-trash-alt"
          class="pl-6 text-black hover:text-red-600 opacity-0 group-hover:opacity-100 pt-1"
          @click.prevent="cancella(evento.id)"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "Posts",
  methods: {
    postDetails() {
      this.$router.push({ path: "/postdetails/:id" });
    },
    cancella(id) {
      this.$store.dispatch("deletePost", id);
    },
  },
  created() {
    this.$store.dispatch("loadEventi");
  },
  computed: {
    ...mapState(["eventi"]),
    ...mapGetters(["getEventi"]),
  },
};
</script>
