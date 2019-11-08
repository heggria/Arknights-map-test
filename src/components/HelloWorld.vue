<template>
  <div style="width:100%">
    <v-card class="ma-2" max-width="272">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-subtitle>
            <v-btn class="font-weight-medium ma-2" tile style="float:left">组合结果过滤</v-btn>
            <v-btn class="font-weight-medium ma-2" tile style="float:left" @click="onClick()">上传公招数据</v-btn>
            <v-btn class="font-weight-medium ma-2" tile style="float:left">查看公招</v-btn>
            <v-btn
              class="font-weight-medium ma-2"
              tile
              style="float:left"
            >{{this.$store.state.display}}</v-btn>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>
    <tagClass
      v-for="(item,key1) in tagName"
      :key="key1"
      :tagClassName="item.class"
      :tagName="item.name"
      :cid="key1"
      color="blue lighten-4"
    ></tagClass>
  </div>
</template>

<script>
/* eslint-disable */
//import gData from "@/assets/gamedata_const.json";
import tagClass from "@/components/part/tagClass";
export default {
  data: () => ({
    vaule: false,
    x: "blue lighten-4",
    dark: false,
    tagName: [
      { class: "部署位", name: ["远程位", "近战位"] },
      { class: "性别", name: ["男性", "女性"] },
      { class: "资质", name: ["新手", "资深", "高资"] },
      { class: "职业", name: ["近卫", "重装", "狙击", "法师", "特种", "辅助"] },
      {
        class: "定位",
        name: [
          "治疗",
          "支援",
          "输出",
          "群攻",
          "减速",
          "生存",
          "防护",
          "削弱",
          "位移",
          "控场",
          "爆发",
          "召唤",
          "快速复活",
          "费用回复"
        ]
      }
    ]
  }),
  created() {
    for (let index in this.tagName) {
      for (let index2 in this.tagName[index].name) {
        this.$store.state.buttonCofig.push({
          index: index + "-" + index2,
          state: false
        });
      }
    }
    console.log(this.$store.state.buttonCofig);
  },
  methods: {
    onClick() {
      this.$store.state.display = !this.$store.state.display;
    }
  },
  components: { tagClass: tagClass },
  computed: {
    getStoreNum() {
      return this.$store.state.choose;
    }
  },
  watch: {
    getStoreNum() {
      if (this.$store.state.choose === 5) {
        this.onClick();
      }
    }
  }
};
</script>
<style>
</style>
