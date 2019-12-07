<template>
  <div class="main" id="main">
    <div v-for="(item,key1) in mapDiv.map" :key="key1" class="divRow">
      <div v-for="(i,key2) in item" :key="key2" class="divRow">
        <employeeSvg v-if="i===$store.state.mapMeta.char[0].position" style="top:0.5px;left:0.5px;z-index:2"></employeeSvg>
        <mapD :type="mapDiv.tiles[i].tileKey" :index="i"></mapD>
      </div>
    </div>
    <svgPath></svgPath>
    <div style="clear:both"></div>
  </div>
</template>

<script>
/* eslint-disable */
import mapD from "@/components/part/mapDiv";
import svgPath from "@/components/part/svgPath";
import employeeSvg from "@/components/part/employeeSvg.vue";
export default {
  data() {
    return {
      mapDiv: this.$store.state.mapMeta.mapData
    };
  },
  components: { mapD, svgPath,employeeSvg },
  created() {
    this.$store.state.mapMeta.char[
      this.$store.state.chooseEIndex
    ].range.direction = 1;
    this.init();
    this.$nextTick(function() {
      document.getElementById("main").style.width =
        61 * this.mapDiv.map[0].length + 12 + "px";
      document.getElementById("app").style["min-width"] =
        61 * this.mapDiv.map[0].length + 12 + 30 + "px";
    });
  },
  methods: {
    setWidth() {},
    init() {
      for (let i = 0; i < this.mapDiv.map.length; i++) {
        for (let j in this.mapDiv.map[i]) {
          let k = { attackPlace: 0, type: 0 };
          let index = parseInt(
            parseInt(i) * parseInt(this.mapDiv.map[0].length) + parseInt(j)
          );
          if (
            this.$store.state.mapMeta.mapData.tiles[index].tileKey ===
            "tile_wall"
          ) {
            k.type = 2;
          } else if (
            this.$store.state.mapMeta.mapData.tiles[index].tileKey ===
            "tile_road"
          ) {
            k.type = 1;
          }
          this.$store.state.mapMeta.runData[index] = k;
        }
      }
      // console.log(this.$store.state.mapMeta.runData);
    },
    ClockwiseRotate(val) {
      let d = this.$store.state.mapMeta.char[this.$store.state.chooseEIndex]
        .range.direction;
      if (val === true) {
        if (d <= 3) d += 1;
        else d = 1;
      } else {
        if (d > 1) d -= 1;
        else d = 4;
      }
      this.$store.state.mapMeta.char[
        this.$store.state.chooseEIndex
      ].range.direction = d;
      this.setAttackArea();
    },
    initMap() {
      for (let i in this.$store.state.mapMeta.runData) {
        this.$set(this.$store.state.mapMeta.runData, i, {
          attackPlace: 0,
          type: this.$store.state.mapMeta.runData[i].type
        });
      }
    },
    setAttackArea() {
      this.initMap();
      let t = this.$store.state.mapMeta.char[this.$store.state.chooseEIndex];
      let position = t.position;
      let direction = t.range.direction;
      let grids = t.range.grids;
      let col = this.$store.state.mapMeta.mapData.map.length;
      let row = this.$store.state.mapMeta.mapData.map[0].length;
      let p = position - (position % row);
      // console.log(((t.position - (t.position % row)) / row + 1) * row);
      for (let x in this.$store.state.mapMeta.runData) {
        for (let i in grids) {
          x = parseInt(x);
          if (
            (direction === 1 &&
              x === position + grids[i].col + row * grids[i].row &&
              x < p + (grids[i].row + 1) * row &&
              x >= p + grids[i].row * row) ||
            (direction === 2 &&
              x === position - grids[i].col * row + grids[i].row &&
              x < p - (grids[i].col - 1) * row &&
              x >= p - grids[i].col * row) ||
            (direction === 3 &&
              x === position - grids[i].col - row * grids[i].row &&
              x < p - (grids[i].row - 1) * row &&
              x >= p - grids[i].row * row) ||
            (direction === 4 &&
              x === position + grids[i].col * row - grids[i].row &&
              x < p + (grids[i].col + 1) * row &&
              x >= p + grids[i].col * row)
          ) {
            this.$store.state.mapMeta.runData[x].attackPlace = 2;
            break;
          }
        }
      }
      //
      this.$store.state.mapMeta.runData[
        this.$store.state.mapMeta.char[this.$store.state.chooseEIndex].position
      ].attackPlace = 1;
      this.animationResart();
    },
    animationResart() {
      let flag1 = document.getElementsByClassName("attack1");
      if (flag1 != undefined && flag1.length > 0)
        for (let div = 0; div < flag1.length; div++) {
          let a = flag1[div];
          if (a != undefined) {
            a.classList.remove("attack1");
            void a.offsetWidth;
            a.classList.add("attack1");
          }
        }
      flag1 = document.getElementsByClassName("attack2");
      if (flag1 != undefined && flag1.length > 0)
        for (let div = 0; div < flag1.length; div++) {
          let a = flag1[div];
          if (a != undefined) {
            a.classList.remove("attack2");
            void a.offsetWidth;
            a.classList.add("attack2");
          }
        }
    }
  }
};
</script>

<style>
.divRow {
  float: left;
  position: relative;
}
.main {
  user-select: none;
  margin: 15px;
  border: 1px black solid;
  padding: 4px 5px 5px 4px;
  float: left;
  position: relative;
}
</style>