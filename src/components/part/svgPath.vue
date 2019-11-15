<template>
  <div class="cont">
    <svg id="cont" xmlns="http://www.w3.org/2000/svg">
      <path id="path1" :d="string" />
    </svg>
    <div id="rect1"></div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data: () => ({
    index: [31],
    points: {
      start: [],
      check: [],
      end: []
    },
    string: "M 30 91 L 152 91 L 152 152 L 701 152"
  }),
  created() {
    this.$nextTick(function() {
      document.getElementById("cont").style["width"] =
        61 * this.$store.state.mapMeta.mapData.map[0].length + "px";
      document.getElementById("cont").style["height"] =
        61 * this.$store.state.mapMeta.mapData.map.length + "px";
      this.init();
    });
  },
  methods: {
    init() {
      this.points.start[0] =
        this.$store.state.mapMeta.routesData[this.index[0]].startPosition.col *
          61 +
        30;
      this.points.start[1] =
        this.$store.state.mapMeta.routesData[this.index[0]].startPosition.row *
          61 +
        30;
      for (let i in this.$store.state.mapMeta.routesData[this.index[0]]
        .checkpoints) {
        let point = [0, 0];
        point[0] =
          this.$store.state.mapMeta.routesData[this.index[0]].checkpoints[i]
            .position.col *
            61 +
          30;
        point[1] =
          this.$store.state.mapMeta.routesData[this.index[0]].checkpoints[i]
            .position.row *
            61 +
          30;
        this.points.check.push(point);
      }
      this.points.end[0] =
        this.$store.state.mapMeta.routesData[this.index[0]].endPosition.col *
          61 +
        30;
      this.points.end[1] =
        this.$store.state.mapMeta.routesData[this.index[0]].endPosition.row *
          61 +
        30;
      this.string = " M" + this.points.start[0] + " " + this.points.start[1];
      for (let i in this.points.check) {
        this.string +=
          " L" + this.points.check[i][0] + " " + this.points.check[i][1];
      }
      this.string += " L" + this.points.end[0] + " " + this.points.end[1];
      document.getElementById("rect1").style["offset-path"] = path(this.string);
    }
  }
};
</script>

<style>
.cont {
  width: 100px;
  float: left;
  padding: 0;
  position: absolute;
  z-index: 0;
  pointer-events: none;
}
.cont svg {
  background: rgb(219, 219, 219, 0);
}
.cont svg path {
  stroke: red;
  stroke-width: 3;
  fill: none;
}
@keyframes svg-path-animation {
  from {
    offset-distance: 0%;
  }
  to {
    offset-distance: 100%;
  }
}
.cont #rect1 {
  position: absolute;
  top: 0;
  left: 0;
  width: 16px;
  height: 8px;
  background: rgb(255, 255, 255);
  offset-path: path("M 30 91 L 152 91 L 152 152 L 701 152");
  offset-distance: 0%;
  animation: svg-path-animation 5s ease-in-out 0s infinite normal none;
}
</style>