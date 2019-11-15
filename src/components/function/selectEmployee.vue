<template>
  <v-dialog v-model="$store.state.interfaceV.addE" persistent max-width="290" tile>
    <v-card tile style="padding:10px;">
      <v-list>
        <v-list-item>
          <v-select :items="char" label="干员" dense style="width:50%;height:35px"></v-select>
          <v-checkbox
            v-model="fullTrust"
            label="满信赖"
            dense
            style="margin-left:15px;height:48px;font-size:12px"
          ></v-checkbox>
        </v-list-item>
        <v-list-item>
          <v-btn-toggle v-model="elite" tile group dense style="width:74%">
            <v-btn value="0" style="width:29%">未精英</v-btn>
            <v-btn value="1" style="width:29%">精英一</v-btn>
            <v-btn value="2" style="width:29%">精英二</v-btn>
          </v-btn-toggle>
          <span style="font-size:32px;margin-left:12px">{{levelDisplay}}</span>
          <span style="font-size:10px;margin-top:10px">级</span>
        </v-list-item>
        <v-list-item>
          <v-slider
            v-model="level"
            track-color="grey"
            always-dirty
            min="1"
            max="90"
            style="height:40px"
          >
            <template v-slot:prepend>
              <v-icon @click="levelDecrement">mdi-minus</v-icon>
            </template>
            <template v-slot:append>
              <v-icon @click="levelIncrement">mdi-plus</v-icon>
            </template>
          </v-slider>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          <v-btn-toggle v-model="skill" tile group style="margin-top:15px;width:100%" dense>
            <v-btn value="0" style="width:30%">技能一</v-btn>
            <v-btn value="1" style="width:30%">技能二</v-btn>
            <v-btn value="2" style="width:30%">技能三</v-btn>
          </v-btn-toggle>
        </v-list-item>
        <v-list-item>
          <v-slider
            style="margin-top:10px;margin-bottom:10px;height:40px"
            v-model="skillLevel"
            step="1"
            max="10"
            min="1"
            ticks="always"
            tick-size="2"
          ></v-slider>
          <span
            style="font-size:18px;width:50px;margin-bottom:10px;font-weight:600"
          >{{skllLevelDisplay}}</span>
        </v-list-item>
        <v-divider></v-divider>
        <v-subheader>基础面板一览</v-subheader>
        <v-list-item style="padding:0px">
          <div style="width:550px">
            <value title="攻击力" value="1000"></value>
            <value title="最大血量" value="1"></value>
            <value title="防御力" value="1"></value>
            <value title="法术抗性" value="1"></value>
            <value title="攻击间隔" value="1"></value>
            <value title="部署费用" value="1"></value>
            <value title="最大阻挡数" value="1"></value>
            <value title="回sp类型" value="1"></value>
            <value title="触发方式" value="1"></value>
            <value title="技能初动" value="1"></value>
            <value title="技能再动" value="1"></value>
            <value title="释放时间" value="1"></value>
            <value title="再部署时间" value="1"></value>
          </div>
        </v-list-item>
      </v-list>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn icon @click.stop="$store.state.interfaceV.addE = false">
          <v-icon style="color:red">mdi-close</v-icon>
        </v-btn>
        <v-btn icon @click.stop="confirm()">
          <v-icon style="color:green">mdi-check</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import value from "@/components/part/value.vue";
export default {
  /* eslint-disable */
  name: "selectE",
  components: { value },
  data: () => ({
    fullTrust: true,//满信赖
    elite: "2",//精英化
    level: 1,//等级
    skill: "2",//技能
    skillLevel: 10,//技能等级
    char: ["能天使", "艾雅法拉", "银灰", "伊芙利特"]//数据集
  }),
  methods: {
    confirm() {
      this.$store.state.interfaceV.addE = false;
      this.$store.state.mapMeta.char.push({
        name: "干员" + this.$store.state.mapMeta.char.length,
        rate: 6,
        elite: 2,
        level: 90
      });
    },
    levelDecrement() {
      this.slider--;
    },
    levelIncrement() {
      this.slider++;
    }
  },
  computed: {
    levelDisplay() {
      return this.slider < 10 ? "0" + this.slider : this.slider;
    },
    skllLevelDisplay() {
      if (this.skillLevel <= 7) return this.skillLevel + " 级";
      else if (this.skillLevel === 8) return "专一";
      else if (this.skillLevel === 9) return "专二";
      else if (this.skillLevel === 10) return "专三";
    }
  }
};
</script>

<style>
div.v-select__selections {
  text-align: center;
}
</style>