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
export default {
  /* eslint-disable */
  name: "App",
  components: { settings, chooseMap, chooseEmployee, mapP },
  data: () => ({
    test: false
  }),
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
