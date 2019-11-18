<template>
  <div>
    <v-card style="float:left;width:550px;margin:15px 0 0 0;" tile>
      <v-card-title>存储对象</v-card-title>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">小波数</th>
              <th class="text-left">键</th>
              <th class="text-left">数量</th>
              <th class="text-left">准备时延</th>
              <th class="text-left">间隔</th>
              <th class="text-left">自动寻路</th>
              <th class="text-left">路径为null</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(i,item) in actions" :key="item">
              <td>{{ i.n }}</td>
              <td>{{ i.key }}</td>
              <td>{{ i.count }}</td>
              <td>{{ i.preDelay }}</td>
              <td>{{ i.interval }}</td>
              <td>{{ i.autoPreviewRoute }}</td>
              <td>{{ $store.state.mapMeta.routes[i.routeIndex]===null }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
    <v-card style="float:left;width:300px;margin:15px 0 0 0;" tile>
      <v-card-title>时间轴</v-card-title>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">编号</th>
              <th class="text-left">id</th>
              <th class="text-left">时间点</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(i,item) in timeAxis" :key="item">
              <td>{{ i.n }}</td>
              <td>{{ i.id }}</td>
              <td>{{ i.time }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      actions: [],
      timeAxis: []
    };
  },
  created() {
    let n = 0;
    let wave = this.$store.state.mapMeta.waves[3];
    for (let i = 0; i < wave.fragments.length; i++) {
      for (let j = 0; j < wave.fragments[i].actions.length; j++) {
        let time = 0;
        wave.fragments[i].actions[j].n = i + 1;
        this.actions.push(wave.fragments[i].actions[j]);
        for (let k = 0; k < wave.fragments[i].actions[j].count; k++) {
          if (
            this.$store.state.mapMeta.routes[
              wave.fragments[i].actions[j].routeIndex
            ] !== null
          ) {
            n++;
            time =
              wave.fragments[i].actions[j].preDelay +
              k * wave.fragments[i].actions[j].interval;
            this.timeAxis.push({
              n: n,
              id: wave.fragments[i].actions[j].key,
              time: time
            });
          }
        }
      }
    }
  }
};
</script>

<style>
</style>