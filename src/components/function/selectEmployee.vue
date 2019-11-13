<template>
  <v-dialog v-model="$store.state.interfaceV.addE" persistent max-width="290" tile>
    <v-card tile>
      <v-list>
        <v-list-item style="margin:25px 10px 0 10px;">
          <v-select :items="items" label="选择干员" dense></v-select>
        </v-list-item>
        <v-list-item>
          <v-btn-toggle v-model="text" tile color="deep-purple accent-3" group dense>
            <v-btn value="left" style="width:34%">未精英化</v-btn>
            <v-btn value="center" style="width:33%">精英一</v-btn>
            <v-btn value="right" style="width:33%">精英二</v-btn>
          </v-btn-toggle>
        </v-list-item>
        <v-list-item>
          <v-slider v-model="slider" class="align-center" :max="90" :min="1">
            <template v-slot:append>
              <v-text-field
                v-model="slider"
                class="mt-0 pt-0"
                hide-details
                single-line
                type="number"
                style="width: 60px"
              ></v-text-field>
            </template>
          </v-slider>
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
export default {
  /* eslint-disable */
  name: "chooseE",
  data: () => ({ text:'',slider: 0, items: ["Foo", "Bar", "Fizz", "Buzz"] }),
  methods: {
    confirm() {
      this.$store.state.interfaceV.addE = false;
      this.$store.state.mapMeta.char.push({
        name: "干员" + this.$store.state.mapMeta.char.length,
        rate: 6,
        elite: 2,
        level: 90
      });
      console.log(this.$store.state.mapMeta.char);
    }
  }
};
</script>

<style>
</style>