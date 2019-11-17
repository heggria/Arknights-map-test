<template>
  <div id="app" data-app="true">
    <v-app-bar dense dark>
      <v-toolbar-title>
        Arknights 地图模拟器
        <span style="font-size:10px"></span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        @click.stop="$store.state.interfaceV.chooseMD = !$store.state.interfaceV.chooseMD"
      >{{$store.state.mapMeta.mapName}}</v-btn>
      <v-btn
        icon
        @click.stop="$store.state.interfaceV.chooseED = !$store.state.interfaceV.chooseED"
      >
        <v-icon>mdi-face-recognition</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="$store.state.interfaceV.settingDisplay = !$store.state.interfaceV.settingDisplay"
      >
        <v-icon>mdi-settings</v-icon>
      </v-btn>
    </v-app-bar>
    <mapP style="float:left;"></mapP>
    <v-card style="float:left;width:40px;height:300px;margin:15px 0 0 0;" tile>
      <v-btn
        icon
        @click.stop="$store.state.interfaceV.settingDisplay = !$store.state.interfaceV.settingDisplay"
      >
        <v-icon>mdi-settings</v-icon>
      </v-btn>
    </v-card>
    <mapOpeationD></mapOpeationD>
    <chooseEmployee></chooseEmployee>
    <chooseMap></chooseMap>
    <settings></settings>
  </div>
</template>

<script>
import mapP from "@/components/map.vue";
import settings from "@/components/function/settings.vue";
import chooseMap from "@/components/function/chooseMap.vue";
import chooseEmployee from "@/components/function/chooseEmployee.vue";
import mapOpeationD from "@/components/display/mapOpeationDisplay.vue";
import range1 from "@/assets/range_table.json";
export default {
  /* eslint-disable */
  name: "App",
  components: { settings, chooseMap, chooseEmployee, mapP, mapOpeationD },
  data: () => ({
    test: false
  }), //
  created() {
    this.$store.state.mapMeta.char = [
      {
        name: "艾雅法拉",
        rate: 6,
        fullTrust: true,
        elite: 2,
        level: 90,
        skill: 3,
        skillLevel: 10,
        position: -1, //部署位置
        deployLocation: 2, //1地面，2高台，3都可以
        range: range1["3-1"], //攻击范围和方向
        charBaseData: {}, //干员基础数据，从解包数据复制而来
        charPanelData: {}, //干员面板数据，使用charBaseData计算而来
        charBattleData: {}, //干员实时战斗面板数据，使用charPanelData计算而来
        charData: {} //干员战斗过程数据，使用charBattleData计算而来
      }
    ];
  },
  methods: {}
};
</script>
<style>
#app {
  user-select: none;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
