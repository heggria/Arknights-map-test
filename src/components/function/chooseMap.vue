<template>
  <v-navigation-drawer v-model="$store.state.interfaceV.chooseMD" absolute right temporary style="width:200px;">
    <v-list-item style="padding-right:10px;min-height:47px;">
      <div style="font-size:20px;">选择地图</div>
      <v-spacer></v-spacer>
      <v-btn icon @click.stop="$store.state.interfaceV.chooseMD = !$store.state.interfaceV.chooseMD">
        <v-icon>mdi-check</v-icon>
      </v-btn>
    </v-list-item>
    <v-divider></v-divider>
    <v-list dense>
      <v-list-group v-for="item in items" :key="item.title" v-model="item.active" no-action>
        <template v-slot:activator>
          <v-list-item-content>
            <span style="font-size:17px;width:50px;">{{item.title}}</span>
          </v-list-item-content>
        </template>
        <div v-if="item.items[0].items===undefined">
          <v-list-item link v-for="(y, i1) in item.items" :key="i1" @click="mapChoose(y.title)">
            <v-list-item-title v-text="y.title"></v-list-item-title>
          </v-list-item>
        </div>
        <div v-else>
          <v-list-group sub-group v-for="(x, i) in item.items" :key="i" no-action>
            <template v-slot:activator>
              <v-list-item-content>
                <span style="font-size:15px;width:50px;">{{x.title}}</span>
                <span style="font-size:10px;color:#ccc">{{x.name}}</span>
              </v-list-item-content>
            </template>
            <v-list-item v-for="(y, i2) in x.items" :key="i2" @click="mapChoose(y.title)">
              <v-list-item-title v-text="y.title"></v-list-item-title>
            </v-list-item>
          </v-list-group>
        </div>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import config from "@/assets/config.json";
export default {
  /* eslint-disable */
  components: {},
  data: () => ({
    items: config.levelName
  }),
  methods: {
    mapChoose(index) {
      this.$store.state.mapMeta.mapName = index;
    }
  },
};
</script>

<style>
</style>