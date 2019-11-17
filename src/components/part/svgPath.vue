<template>
  <div class="cont">
    <svg id="cont" xmlns="http://www.w3.org/2000/svg">
      <path id="path1" :d="string" />
      <circle
        v-for="(i,index) in points.check"
        :key="'circle-'+index"
        class="circle"
        :cx="i[0]"
        :cy="i[1]"
      />
      <text
        v-for="(j,index) in points.check"
        :key="'text-'+index"
        id="text1"
        :x="j[0]"
        :y="j[1]"
        class="text"
      >{{j[3]+'s'}}</text>
    </svg>
    <div id="rect1"></div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data: () => ({
    index: [35],
    points: {},
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
      let points = {
        start: [],
        check: [],
        end: []
      };
      let x = this.index[0];
      let rd = this.$store.state.mapMeta.routesData[x];
      points.start[0] = this.positionExchange(rd.startPosition.col);
      points.start[1] = this.positionExchange(rd.startPosition.row);
      for (let i in rd.checkpoints) {
        i = parseInt(i);
        if (
          !(
            rd.checkpoints[i].position.col === 0 &&
            rd.checkpoints[i].position.row === 0
          )
        ) {
          let point = [0, 0, 0, 0];
          point[0] = this.positionExchange(rd.checkpoints[i].position.col);
          point[1] = this.positionExchange(rd.checkpoints[i].position.row);
          if (
            i < rd.checkpoints.length - 1 &&
            rd.checkpoints[i + 1].position.col === 0 &&
            rd.checkpoints[i + 1].position.row === 0
          ) {
            point[2] = rd.checkpoints[i + 1].type;
            point[3] = rd.checkpoints[i + 1].time;
          }
          points.check.push(point);
        }
      }
      points.end[0] = this.positionExchange(rd.endPosition.col);
      points.end[1] = this.positionExchange(rd.endPosition.row);
      this.points = points;
      this.string = " M" + this.points.start[0] + " " + this.points.start[1];
      console.log(rd);
      console.log(this.points);
      for (let i in this.points.check) {
        this.string +=
          " L" + this.points.check[i][0] + " " + this.points.check[i][1];
      }
      this.string += " L" + this.points.end[0] + " " + this.points.end[1];
      document.getElementById("rect1").style["offset-path"] =
        'path("' + this.string + '")';
    },
    positionExchange(i) {
      return 30 + i * 61;
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
  animation: svg-path-animation 4s ease-in-out 0s infinite normal none;
}
.circle {
  stroke: red;
  stroke-width: 1.5;
  fill: white;
  r: 16;
}
.text {
  dominant-baseline: middle;
  text-anchor: middle;
  font-size: 12px;
}
</style>