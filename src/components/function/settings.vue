<template>
  <v-navigation-drawer
    v-model="$store.state.interfaceV.settingDisplay"
    absolute
    right
    temporary
  >
    <v-list-item style="padding-right:10px;min-height:47px;">
      <div style="font-size:20px;">设置面板</div>
      <v-spacer></v-spacer>
      <v-btn
        icon
        @click.stop="$store.state.interfaceV.settingDisplay = !$store.state.interfaceV.settingDisplay"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-list-item>
    <v-divider></v-divider>
    <v-list subheader two-line flat>
      <v-subheader>基础设置</v-subheader>
      <v-list-item-group multiple v-model="settings">
        <v-list-item>
          <template v-slot:default="{ active, toggle }">
            <v-list-item-action>
              <v-checkbox v-model="active" color="primary" @click="toggle"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>不显示forbidden方块</v-list-item-title>
              <v-list-item-subtitle>开启可以让你更加专注</v-list-item-subtitle>
            </v-list-item-content>
          </template>
        </v-list-item>
        <v-list-item>
          <template v-slot:default="{ active, toggle }">
            <v-list-item-action>
              <v-checkbox v-model="active" color="primary" @click="toggle"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>干员初始朝向</v-list-item-title>
              <v-list-item-subtitle></v-list-item-subtitle>
            </v-list-item-content>
          </template>
        </v-list-item>
        <v-list-item>
          <template v-slot:default="{ active, toggle }">
            <v-list-item-action>
              <v-checkbox v-model="active" color="primary" @click="toggle"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>夜间模式</v-list-item-title>
              <v-list-item-subtitle>保护你的视力</v-list-item-subtitle>
            </v-list-item-content>
          </template>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  /* eslint-disable */
  components: {},
  data: () => ({
    settings: []
  }),
  methods: {
    forbiddenDisplayChange() {
      if (this.$store.state.mapMeta.forbiddenDisplay === true) {
        let flag1 = document.getElementsByClassName("block");
        if (flag1 != undefined && flag1.length > 0)
          for (let div = 0; div < flag1.length; div++) {
            let a = flag1[div];
            a.classList.remove("tile_forbidden");
          }
        this.$store.state.mapMeta.forbiddenDisplay = false;
      } else {
        let flag1 = document.getElementsByClassName("block");
        if (flag1 != undefined && flag1.length > 0)
          for (let div = 0; div < flag1.length; div++) {
            let a = flag1[div];
            a.classList.add("tile_forbidden");
          }
        this.$store.state.mapMeta.forbiddenDisplay = true;
      }
    }
  },
  computed: {
    wsettings() {
      return this.settings[0];
    }
  },
  watch: {
    wsettings(val) {
      if (val === 0) {
        this.$store.state.mapMeta.forbiddenDisplay = true;
      } else {
        this.$store.state.mapMeta.forbiddenDisplay = false;
      }
      this.forbiddenDisplayChange();
    }
  }
};
</script>

<style>
</style>