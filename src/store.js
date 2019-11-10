import Vue from 'vue';
import Vuex from 'vuex';
import level from "@/assets/levels/obt/campaign/level_camp_02.json";
Vue.use(Vuex);
const state = {
  choose: 0,
  buttonCofig: [],
  interfaceV: {
    chooseMD:false,
    settingDisplay:false
  },
  display: true,
  mapMeta: {
    mapName: '龙门市区',
    mapData: level.mapData,
    runData: [],
    attackDisplay: true,
    forbiddenDisplay: true,
    char: {}
  }
};
const getters = {
};
const mutations = {
};
const actions = {
};
const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
export default store;