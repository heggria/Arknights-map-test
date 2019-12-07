import Vue from 'vue';
import Vuex from 'vuex';
import level from "@/assets/levels/obt/campaign/level_camp_03.json";
import enemyDB from "@/assets/levels/enemydata/enemy_database.json";
Vue.use(Vuex);
const state = {
  choose: 0,
  buttonCofig: [],
  interfaceV: {
    chooseMD: false,
    settingDisplay: false,
    chooseED: false,
    addE: false
  },
  display: true,
  chooseEIndex: 0,
  enemyDB: enemyDB.enemies,
  mapMeta: {
    mapOptions: level.options,
    mapName: '龙门市区',
    mapData: level.mapData,
    routesData: level.routes,
    globalBuffs: [],//全体buff
    routes: level.routes,
    baseEnemiesData: level.enemyDbRefs,
    waves: level.waves,
    runData: [],
    enemyDBC: {},
    attackDisplay: true,
    forbiddenDisplay: true,
    char: {},
    enemies: {}
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