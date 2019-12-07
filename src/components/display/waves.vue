<template>
  <div>
    <v-card style="float:left;width:460px;margin:15px 0 0 0;" tile>
      <v-card-title>时间轴：{{this.$store.state.mapMeta.waves[this.w].name===null?'默认':this.$store.state.mapMeta.waves[this.w].name}} 波次</v-card-title>
      <v-data-table
        dense
        :headers="headers"
        :items="timeAxis"
        :items-per-page="20"
        item-key="n"
        show-select
      >
        <template v-slot:item.id="item">
          <p>{{getName(item.value)}}</p>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      actions: [],
      timeAxis: [],
      headers: [
        { text: "序号", value: "n", width: 70 },
        { text: "名字", value: "id", width: 250 },
        { text: "时间点", value: "time", width: 80, sortable: true }
      ],
      timeBWave: [],
      selected: [],
      w: 0
    };
  },
  created() {
    this.getEnemyData();
    let n = 0;
    let coefficient = 1;
    let wave = this.$store.state.mapMeta.waves[this.w];
    let sumTime = wave.preDelay;
    for (let i = 0; i < wave.fragments.length; i++) {
      sumTime += wave.fragments[i].preDelay * coefficient;
      console.log(wave.fragments[i].preDelay);
      for (let j = 0; j < wave.fragments[i].actions.length; j++) {
        wave.fragments[i].actions[j].n = i + 1;
        if (
          this.$store.state.mapMeta.routes[
            wave.fragments[i].actions[j].routeIndex
          ] !== null &&
          wave.fragments[i].actions[j].actionType !== 1
        ) {
          this.actions.push(wave.fragments[i].actions[j]);
          for (let k = 0; k < wave.fragments[i].actions[j].count; k++) {
            n++;
            let time = wave.fragments[i].actions[j].preDelay;
            if (k !== 0) time += wave.fragments[i].actions[j].interval * k;
            this.timeAxis.push({
              n: i + 1 + "/" + n,
              d: wave.fragments[i].actions[j].preDelay,
              sd: wave.fragments[i].preDelay,
              id: wave.fragments[i].actions[j].key,
              time: (sumTime + time).toFixed(3)
            });
          }
        }
      }
      let sum = 0;
      for (let index = 0; index < wave.fragments[i].actions.length; index++) {
        let flagx =
          wave.fragments[i].actions[index].preDelay +
          (wave.fragments[i].actions[index].count - 1) *
            wave.fragments[i].actions[index].interval;
        if (sum <= flagx) sum = flagx;
      }
      sumTime += sum;
    }
    //console.log(this.timeAxis);
  },
  methods: {
    getEnemyData() {
      let enemyDBC = [];
      for (let i in this.$store.state.mapMeta.baseEnemiesData) {
        for (let j in this.$store.state.enemyDB) {
          if (
            this.$store.state.enemyDB[j].Key ===
            this.$store.state.mapMeta.baseEnemiesData[i].id
          ) {
            if (
              this.$store.state.mapMeta.baseEnemiesData[i].overwrittenData ===
              null
            ) {
              enemyDBC.push({
                id: this.$store.state.enemyDB[j].Key,
                level: this.$store.state.mapMeta.baseEnemiesData[i].level,
                value: this.$store.state.enemyDB[j].Value[
                  this.$store.state.mapMeta.baseEnemiesData[i].level
                ].enemyData,
                correction: false
              });
            } else {
              let def = this.$store.state.mapMeta.baseEnemiesData[i]
                .overwrittenData;
              for (let key in def) {
                //console.log(def[key]);
                if (
                  def[key] !== null &&
                  def[key].m_defined !== undefined &&
                  def[key].m_defined === false
                ) {
                  def[key] = this.$store.state.enemyDB[j].Value[
                    this.$store.state.mapMeta.baseEnemiesData[i].level
                  ].enemyData[key];
                } else {
                  for (let key2 in def["attributes"]) {
                    if (def["attributes"][key2].m_defined === false) {
                      def["attributes"][key2] = this.$store.state.enemyDB[
                        j
                      ].Value[
                        this.$store.state.mapMeta.baseEnemiesData[i].level
                      ].enemyData["attributes"][key2];
                    }
                  }
                }
                enemyDBC.push({
                  id: this.$store.state.enemyDB[j].Key,
                  level: this.$store.state.mapMeta.baseEnemiesData[i].level,
                  value: this.$store.state.mapMeta.baseEnemiesData[i]
                    .overwrittenData,
                  correction: true
                });
                break;
              }
            }
          }
        }
      }
      this.$store.state.mapMeta.enemyDBC = enemyDBC;
      //console.log(enemyDBC);
    },
    getDName(value) {
      for (let i in this.$store.state.mapMeta.enemyDBC) {
        if (this.$store.state.mapMeta.enemyDBC[i].id === value)
          return this.$store.state.mapMeta.enemyDBC[i].value.name.m_value;
      }
    }
  },
  computed: {
    getName() {
      return function(value) {
        return this.getDName(value);
      };
    }
  }
};
</script>

<style>
</style>