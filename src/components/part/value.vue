<template>
  <div class="value">
    <div class="numTitle">{{title}}</div>
    <div class="num">{{value}}</div>
  </div>
</template>

<script>
export default {
  name: "vaule",
  props: ["title", "value"]
};
</script>

<style>
.value {
  float: left;
  margin-top: 0px;
  margin-left:10px
}
.num {
  font-size: 10px;
  line-height: 18px;
  float: left;
  height: 26px;
  -webkit-font-smoothing: antialiased;
  font-weight: 600;
  padding: 3px;
  width: 50px;
  color: rgb(50, 50, 50);
  border: 1px solid rgb(200, 200, 200);
}
.numTitle {
  padding: 4px;
  width: 70px;
  margin-bottom: 6px;
  float: left;
  font-size: 10px;
  line-height: 18px;
  height: 26px;
  background-color: rgb(100, 100, 100);
  color: white;
  -webkit-font-smoothing: antialiased;
  font-weight: 400;
}
</style>