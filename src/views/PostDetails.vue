<template>
  <div class="flex items-center flex-col">
    <div
      class="sm:w-6/12 md:w-6/12 lg:w-3/12 text-left bg-white p-5 rounded-xl"
    >
      <div class="text-base">
        <span class="font-bold">Id numero:</span> {{ getEvent(this.id).id }}
      </div>
      <div class="pt-1.5 text-base">
        <span class="font-bold">User Id:</span> {{ getEvent(this.id).userId }}
      </div>
      <div class="pt-1.5 text-base">
        <span class="font-bold">Titolo:</span> {{ getEvent(this.id).title }}
      </div>
      <div class="pt-1.5 text-base">
        <span class="font-bold">Descrizione:</span> {{ getEvent(this.id).body }}
      </div>
    </div>

    <div class="flex">
      <DxButton
        text="Modifica il titolo"
        class="mt-6 mr-4 bg-white p-3 rounded-lg font-bold"
        @click="editTitle = true"
      />
      <DxButton
        text="Modifica la descrizione"
        class="mt-6 mr-4 bg-white p-3 rounded-lg font-bold"
        @click="editBody = true"
      />
    </div>

    <DxTextBox
      type="text"
      v-model="inputTitle"
      class="rounded-lg p-3 mt-6 w-6/12"
      v-if="editTitle"
    >
    </DxTextBox>

    <DxTextArea v-model="inputBody" v-if="editBody" class="p-3 mt-3 w-6/12">
    </DxTextArea>

    <DxButton
      text="Conferma"
      class="mt-6 mb-6 mr-4 bg-white p-3 rounded-lg font-bold"
      @click="update"
    />
  </div>
</template>

<script>
// import axios from "axios";
import { mapGetters } from "vuex";
import DxButton from "devextreme-vue/button";
import DxTextBox from "devextreme-vue/text-box";
import DxTextArea from "devextreme-vue/text-area";

export default {
  components: {
    DxButton,
    DxTextBox,
    DxTextArea,
  },
  name: "PostDetails",
  props: ["id"],
  data() {
    return {
      event: null,
      inputTitle: "",
      editTitle: false,
      inputBody: "",
      editBody: false,
    };
  },
  computed: {
    ...mapGetters(["getEvent"]),
  },
  methods: {
    update() {
      this.$store.dispatch("update", {
        id: this.id,
        obj: {
          id: this.id,
          title: this.inputTitle,
          body: this.inputBody,
          userId: this.id,
        },
      });
      if (this.inputTitle) this.getEvent(this.id).title = this.inputTitle;
      if (this.inputBody) this.getEvent(this.id).body = this.inputBody;
    },
  },
};
</script>
