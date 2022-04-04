<template>
  <div
    class="flex justify-around flex-wrap mt-20 font-black text-6xl text-black-800"
  >
    <div>
      Days
      <div>
        {{ days }}
      </div>
    </div>
    <div>
      Hours
      <div>
        {{ hours }}
      </div>
    </div>
    <div>
      Minutes
      <div>
        {{ minutes }}
      </div>
    </div>
    <div>
      Seconds
      <div>
        {{ seconds }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CountdownComponent",
  data() {
    return {
      newYears: "17 Apr 2022",
      newYearsDate: "",
      currentDate: "",
    };
  },
  methods: {
    countdown() {
      this.newYearsDate = new Date(this.newYears);
      this.currentDate = new Date();
    },
  },
  computed: {
    totalSeconds: function () {
      return (this.newYearsDate - this.currentDate) / 1000;
    },
    days: function () {
      return Math.floor(this.totalSeconds / 3600 / 24);
    },
    hours: function () {
      return Math.floor(this.totalSeconds / 3600) % 24;
    },
    minutes: function () {
      return Math.floor(this.totalSeconds / 60) % 60;
    },
    seconds: function () {
      return Math.floor(this.totalSeconds) % 60;
    },
  },
  mounted() {
    this.countdown();

    setInterval(this.countdown, 1000);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
