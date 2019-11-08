<template>
  <v-expand-transition>
    <v-card class="ma-2" max-width="272" v-show="this.$store.state.display">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">{{tagClassName}}</v-list-item-title>
          <v-list-item-subtitle>
            <tagButton
              v-for="(item,key1) in tagName"
              :key="key1"
              :tagName="item"
              :color="color"
              :cid="cid"
              :bid="key1"
            ></tagButton>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </v-expand-transition>
</template>

<script>
/* eslint-disable */
import tagButton from "@/components/part/tagButton";
export default {
  props: ["tagName", "tagClassName", "color", "cid"],
  components: { tagButton: tagButton },
  created() {}
};
</script>

<style>
.row {
}
.background {
  background-color: #e3f2fd;
  float: left;
  margin: 1px;
}
.tit_div {
  height: 100%;
  line-height: 100%;
  font-size: 14px;
  width: 80px;
  text-align: center;
}
</style>