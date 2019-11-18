<template>
  <div class="contianer">
    <svg id="contianer" xmlns="http://www.w3.org/2000/svg">
      <g v-for="(x,ind) in index" :key="'path-'+ind">
        <path :d="pathStr[ind]" />
        <g v-for="(i,index) in points[ind].check" :key="'circle-'+index">
          <circle v-if="i[2]!==0" class="circle" :cx="i[0]" :cy="i[1]" />
          <text v-if="i[2]!==0" :x="i[0]" :y="i[1]" class="text">{{i[3]+'s'}}</text>
        </g>
      </g>
    </svg>
    <div v-for="(x,ind) in index" :key="'rect-'+ind" class="rect" :id="'rect'+ind"></div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data: () => ({
    index: [3, 4, 5, 6, 7],
    points: [],
    pathStr: []
  }),
  created() {
    this.$nextTick(function() {
      document.getElementById("contianer").style["width"] =
        61 * this.$store.state.mapMeta.mapData.map[0].length + "px";
      document.getElementById("contianer").style["height"] =
        61 * this.$store.state.mapMeta.mapData.map.length + "px";
      for (let i = 0; i < this.pathStr.length; i++) {
        document.getElementById("rect" + i).style["offset-path"] =
          'path("' + this.pathStr[i] + '")';
      }
    });
    this.init();
  },
  methods: {
    init() {
      for (let a = 0; a < this.index.length; a++) {
        //保存//console.log(rd,this.points);
        this.points[a] = this.getPoint(
          this.$store.state.mapMeta.routesData[this.index[a]]
        );
        this.pathStr[a] = this.pathSave(this.points[a]);
      }
    },
    getPoint(rd) {
      let points = {
        start: [],
        check: [],
        end: []
      };
      points.start[0] = this.positionExc(rd.startPosition.col);
      points.start[1] = this.positionExc(rd.startPosition.row);
      for (let i in rd.checkpoints) {
        i = parseInt(i);
        if (
          rd.checkpoints[i].position.col !== 0 &&
          rd.checkpoints[i].position.row !== 0
        ) {
          let point = [0, 0, 0, 0];
          point[0] = this.positionExc(rd.checkpoints[i].position.col);
          point[1] = this.positionExc(rd.checkpoints[i].position.row);
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
      points.end[0] = this.positionExc(rd.endPosition.col);
      points.end[1] = this.positionExc(rd.endPosition.row);
      return points;
    },
    pathSave(points) {
      let string = " M" + points.start[0] + " " + points.start[1];
      for (let i in points.check) {
        string += " L" + points.check[i][0] + " " + points.check[i][1];
      }
      string += " L" + points.end[0] + " " + points.end[1];
      return string;
    },
    positionExc(i) {
      return 30 + i * 61;
    }
  }
};
</script>

<style>
.contianer {
  width: 100px;
  float: left;
  padding: 0;
  position: absolute;
  pointer-events: none;
}
.contianer svg {
  background: rgb(219, 219, 219, 0);
}
.contianer svg path {
  stroke: red;
  stroke-width: 2.5;
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
.contianer .rect {
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