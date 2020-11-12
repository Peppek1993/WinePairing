<template>
  <div>
    <div
      class="color flex flex-col justify-between h-screen pt-12 pb-2 px-6 font-hairline"
    >
      <component :is="this.items.activeComponent"></component>
      <footer class="text-sm mx-auto">
        &copy; Copyright 2020, Adam Partyka
      </footer>
    </div>
  </div>
</template>
<script>
import DishPairing from "./components/DishPairing.vue"
import WineDescription from "./components/WineDescription.vue"
import WinePairing from "./components/WinePairing.vue"
import WineRecommendation from "./components/WineRecommendation.vue"
import Start from "./components/Start.vue"

import { mapGetters } from "vuex"

export default {
  computed: {
    ...mapGetters(["items"]),
  },
  components: {
    appStart: Start,
    appDishPairing: DishPairing,
    appWineDescription: WineDescription,
    appWinePairing: WinePairing,
    appWineRecommendation: WineRecommendation,
  },
  data() {
    return {
      testest: false,
    }
  },
}
</script>
<style>
html {
  background-color: #690535;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 1000'%3E%3Cg fill-opacity='0.74'%3E%3Ccircle fill='%23690535' cx='50' cy='0' r='50'/%3E%3Cg fill='%236c0837' %3E%3Ccircle cx='0' cy='50' r='50'/%3E%3Ccircle cx='100' cy='50' r='50'/%3E%3C/g%3E%3Ccircle fill='%236e0b38' cx='50' cy='100' r='50'/%3E%3Cg fill='%23710e3a' %3E%3Ccircle cx='0' cy='150' r='50'/%3E%3Ccircle cx='100' cy='150' r='50'/%3E%3C/g%3E%3Ccircle fill='%2373113c' cx='50' cy='200' r='50'/%3E%3Cg fill='%2376143e' %3E%3Ccircle cx='0' cy='250' r='50'/%3E%3Ccircle cx='100' cy='250' r='50'/%3E%3C/g%3E%3Ccircle fill='%2379163f' cx='50' cy='300' r='50'/%3E%3Cg fill='%237b1941' %3E%3Ccircle cx='0' cy='350' r='50'/%3E%3Ccircle cx='100' cy='350' r='50'/%3E%3C/g%3E%3Ccircle fill='%237e1b43' cx='50' cy='400' r='50'/%3E%3Cg fill='%23801e44' %3E%3Ccircle cx='0' cy='450' r='50'/%3E%3Ccircle cx='100' cy='450' r='50'/%3E%3C/g%3E%3Ccircle fill='%23832046' cx='50' cy='500' r='50'/%3E%3Cg fill='%23862248' %3E%3Ccircle cx='0' cy='550' r='50'/%3E%3Ccircle cx='100' cy='550' r='50'/%3E%3C/g%3E%3Ccircle fill='%2388254a' cx='50' cy='600' r='50'/%3E%3Cg fill='%238b274c' %3E%3Ccircle cx='0' cy='650' r='50'/%3E%3Ccircle cx='100' cy='650' r='50'/%3E%3C/g%3E%3Ccircle fill='%238e294d' cx='50' cy='700' r='50'/%3E%3Cg fill='%23902b4f' %3E%3Ccircle cx='0' cy='750' r='50'/%3E%3Ccircle cx='100' cy='750' r='50'/%3E%3C/g%3E%3Ccircle fill='%23932d51' cx='50' cy='800' r='50'/%3E%3Cg fill='%23963053' %3E%3Ccircle cx='0' cy='850' r='50'/%3E%3Ccircle cx='100' cy='850' r='50'/%3E%3C/g%3E%3Ccircle fill='%23993254' cx='50' cy='900' r='50'/%3E%3Cg fill='%239b3456' %3E%3Ccircle cx='0' cy='950' r='50'/%3E%3Ccircle cx='100' cy='950' r='50'/%3E%3C/g%3E%3Ccircle fill='%239e3658' cx='50' cy='1000' r='50'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: contain;
}
.color {
  color: #f9dbbd;
}
</style>
