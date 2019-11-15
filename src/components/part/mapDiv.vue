<template>
  <div
    :class="['mapdiv',type,type==='tile_wall'||type==='tile_flystart'||type==='tile_hole'?'high':'','block']"
    @click="onclick()"
    @mouseover="mouseover()"
    @mouseout="mouseout()"
    @mouseup="mouseup()"
  >
    <div
      :class="{
        heightdiv:height,
        sdiv:true,
        attack1:(this.$store.state.mapMeta.runData[this.index].attackPlace===1&&this.$store.state.mapMeta.attackDisplay===true),
        attack2:(this.$store.state.mapMeta.runData[this.index].attackPlace===2&&this.$store.state.mapMeta.attackDisplay===true),
        hoverall:hover,//hover:all
        clickall:click,
        }"
      @mouseover="mouseover()"
      @mouseout="mouseout()"
    ></div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  props: ["type", "index"],
  data() {
    return {
      height: false,
      hover: false,
      click: false
    };
  },
  created() {
    //this.setAttackArea();
    if (
      this.type === "tile_wall" ||
      this.type === "tile_flystart" ||
      this.type === "tile_hole"
    ) {
      this.height = true;
    }
  },
  methods: {
    onclick() {
      this.click = true;
      this.deployLocationChange();
    },
    deployLocationChange() {
      if (
        this.$store.state.mapMeta.runData[this.index].type ===
          this.$store.state.mapMeta.char[this.$store.state.chooseEIndex]
            .deployLocation ||
        (this.$store.state.mapMeta.runData[this.index].type > 0 &&
          this.$store.state.mapMeta.char[this.$store.state.chooseEIndex]
            .deployLocation === 3)
      ) {
        this.$store.state.mapMeta.char[
          this.$store.state.chooseEIndex
        ].position = this.index;
        this.$parent.setAttackArea();
      }
    },
    mouseover() {
      this.hover = true;
    },
    mouseout() {
      this.hover = false;
      this.click = false;
    },
    mouseup() {
      this.click = false;
    }
  }
}; /*
document.oncontextmenu = function() {
  return false;
};*/
</script>

<style>
:root {
  --stripe-size: 30.5px;
  --color0: rgba(194, 78, 0, 0.5);
  --color1: rgba(194, 0, 0, 0.5);
  --color2: #00000000;
  --duration: 1s;
}
.block {
  background-color: white;
}
.heightdiv {
  position: absolute;
  left: -2px;
  top: -2px;
}
.mapdiv {
  position: relative;
  text-align: center;
  line-height: 60px;
  height: 60px;
  width: 60px;
  float: left;
  margin: 0.5px;
  overflow: hidden;
}
.mapdiv:hover {
  border: 3px black solid;
  line-height: 54px;
}
.mapdiv:active {
  border: 4px black solid;
  line-height: 52px;
  background-color: rgb(211, 197, 0);
}
div.high > div:hover {
  position: absolute;
  left: -3px;
  top: -3px;
}
.hoverall {
  position: absolute;
  left: -3px;
  top: -3px;
}
.clickall {
  position: absolute;
  left: -4px;
  top: -4px;
}
.attack1,
.attack2 {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
}
.attack1::before,
.attack2::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100% + var(--stripe-size));
  height: 100%;
  -webkit-animation: stripeTransform var(--duration) linear infinite;
  animation: stripeTransform var(--duration) linear infinite;
}
.attack1::before {
  background: repeating-linear-gradient(
    135deg,
    var(--color2) 25%,
    var(--color2) 50%,
    var(--color1) 50%,
    var(--color1) 75%
  );
  background-size: var(--stripe-size) var(--stripe-size);
}
.attack2::before {
  background: repeating-linear-gradient(
    135deg,
    var(--color2) 25%,
    var(--color2) 50%,
    var(--color0) 50%,
    var(--color0) 75%
  );
  background-size: var(--stripe-size) var(--stripe-size);
}
@-webkit-keyframes stripeTransform {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(calc(var(--stripe-size) * -1));
    transform: translateX(calc(var(--stripe-size) * -1));
  }
}
@keyframes stripeTransform {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(calc(var(--stripe-size) * -1));
    transform: translateX(calc(var(--stripe-size) * -1));
  }
}
.sdiv {
  height: 60px;
  width: 60px;
  overflow: hidden;
}
.tile_forbidden {
  background-color: rgb(100, 100, 100);
}
.tile_start {
  background-color: rgb(255, 100, 100);
}
.tile_road {
  background-color: rgb(80, 201, 126);
}
.tile_end {
  background-color: rgb(100, 100, 255);
}
.tile_wall {
  background-color: rgb(100, 233, 233);
}
.tile_floor {
  background-color: rgb(180, 180, 180);
}
.tile_telin {
  background-color: rgb(245, 228, 207);
}
.tile_telout {
  background-color: rgb(218, 123, 0);
}
.tile_flystart {
  background-color: rgb(200, 50, 50);
}
.tile_healing {
  background-color: rgb(0, 168, 76);
}
.high {
  border: 2px black solid;
  height: 60px;
  width: 60px;
  line-height: 56px;
}
.tile_hole {
  background-color: white;
}
</style>