<template>
  <v-card style="float:left;width:100px;height:600px;margin:15px;" tile>
    <v-list style="padding-top:0">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title style="font-size:25px">BOX</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <div v-for="i in $store.state.mapMeta.char" :key="i.name">
        <v-menu offset-x left>
          <template v-slot:activator="{ on }">
            <v-list-item v-on="on">
              <v-list-item-title>{{i.name}}</v-list-item-title>
            </v-list-item>
          </template>
          <v-list dense>
            <v-list-item @click="dialog=!dialog">
              <v-list-item-title>修改属性与技能</v-list-item-title>
            </v-list-item>
            <v-list-item
              @click="$store.state.mapMeta.char.splice($store.state.mapMeta.char.findIndex(item => item === i), 1); "
            >
              <v-list-item-title>从box中删除</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-divider></v-divider>
      </div>
      <v-list-item
        v-if="$store.state.mapMeta.char.length<12"
        @click="$store.state.interfaceV.addE=true"
      >
        <template v-slot:default="{ active, toggle }">
          <v-list-item-content>
            <v-list-item-title>
              <v-icon>mdi-plus</v-icon>
            </v-list-item-title>
          </v-list-item-content>
        </template>
      </v-list-item>
      <v-divider></v-divider>
    </v-list>
    <selectE></selectE>
  </v-card>
</template>

<script>
import selectE from "@/components/function/selectEmployee.vue";
export default {
  /* eslint-disable */
  components: { selectE },
  data: () => ({
    dialog: false
  }),
  created() {
    this.$store.state.mapMeta.char = [
      { name: "艾雅法拉", rate: 6, elite: 2, level: 90 },
      { name: "银灰", rate: 6, elite: 2, level: 90 },
      { name: "能天使", rate: 6, elite: 2, level: 90 }
    ];
  },
  methods: {
    mapChoose(index) {
      this.$store.state.mapMeta.mapName = index;
    }
  }
};
</script>

<style>
</style>