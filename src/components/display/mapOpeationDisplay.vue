<template>
  <v-card style="float:left;width:140px;height:300px;margin:15px 0 0 15px;padding-top:10px" tile>
    <value title="最大部署数" :value="$store.state.mapMeta.mapOptions.characterLimit"></value>
    <value title="基地血量" :value="$store.state.mapMeta.mapOptions.maxLifePoint"></value>
    <value title="初始Cost" :value="$store.state.mapMeta.mapOptions.initialCost"></value>
    <value title="最大Cost" :value="$store.state.mapMeta.mapOptions.maxCost"></value>
    <value title="回C时间" :value="$store.state.mapMeta.mapOptions.costIncreaseTime"></value>
    <value title="移动倍数" :value="$store.state.mapMeta.mapOptions.moveMultiplier"></value>
    <value title="可操纵" :value="$store.state.mapMeta.mapOptions.steeringEnabled"></value>
    <value title="训练关卡" :value="$store.state.mapMeta.mapOptions.isTrainingLevel"></value>
    <value title="功能关闭" :value="$store.state.mapMeta.mapOptions.functionDisableMask"></value>
  </v-card>
</template>

<script>
import value from "@/components/part/value.vue";
export default {
  components: { value },
  methods: {}
};
</script>

<style>
</style>