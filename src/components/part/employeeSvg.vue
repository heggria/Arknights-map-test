<template>
  <div class="eContainer">
    <svg class="eSvg" width="60" height="60" xmlns="http://www.w3.org/2000/svg">
      <g>
        <rect class="eRect" :x="x" :y="y" :width="width" :height="height" />
        <polygon :points="points" style="fill:#fff;" />
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      direction: 0,
      points: "",
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
  },
  created(){
    this.direction=1;
  },
  watch: {
    direction(val) {
      this.x = this.y = this.width = this.height = 0;
      switch (val) {
        case 1:
          this.x = 52;
          this.width = 8;
          this.height = 60;
          this.points = "52,25 52,35 60,30";
          break;
        case 2:
          this.y = 52;
          this.width = 60;
          this.height = 8;
          this.points = "25,52 35,52 30,60";
          break;
        case 3:
          this.width = 8;
          this.height = 60;
          this.points = "8,25 8,35 0,30";
          break;
        case 4:
          this.width = 60;
          this.height = 8;
          this.points = "25,8 35,8 30,0";
          break;
      }
    }
  }
};
</script>

<style>
.eContainer {
  pointer-events: none;
  position: absolute;
  z-index: 1;
  height: 60px;
  width: 60px;
  text-align: left;
}
.eImg {
  position: absolute;
  height: 60px;
  width: 60px;
}
.eSvg {
  position: absolute;
  height:60;
  width: 60;
}
.eRect {
  fill: rgba(255, 127, 0);
}
</style>