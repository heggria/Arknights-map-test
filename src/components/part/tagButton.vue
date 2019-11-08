<template>
  <div class="btn_div">
    <v-btn
      class="font-weight-medium ma-2"
      tile
      :color="useColor"
      @click="changeState()"
      :dark="dark"
    >{{tagName}}</v-btn>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      vaule: false,
      useColor: this.color,
      dark: false
    };
  },
  props: ["tagName", "color", "cid", "bid"],
  methods: {
    changeState() {
      this.vaule = !this.vaule;
      if (this.vaule === true) {
        this.useColor = "green darken-1";
        this.dark = true;
        this.$store.state.choose += 1;
        for (let index in this.$store.state.buttonCofig) {
          //console.log(index)
          if (
            this.$store.state.buttonCofig[index].index ===
            this.cid + "-" + this.bid
          ) {
            this.$store.state.buttonCofig[index].state = true;
            break;
          }
        }
      } else {
        this.useColor = this.color;
        this.dark = false;
        this.$store.state.choose -= 1;
        for (let index in this.$store.state.buttonCofig) {
          //console.log(index)
          if (
            this.$store.state.buttonCofig[index].index ===
            this.cid + "-" + this.bid
          ) {
            this.$store.state.buttonCofig[index].state = false;
            break;
          }
        }
      }
    }
  }
};
</script>

<style>
.btn_div {
  float: left;
  font-weight: bold;
}
</style>