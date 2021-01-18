<template>
  <div>
    <div class="componentCard sm:w-2/3 md:w-1/2" ref="wineDescription">
      <h1 class="text-4xl italic">Can you tell me more about my wine?</h1>
      <div class="flex text-md py-4">
        <select class="customInput" v-model="selectedWine">
          <option value="" disabled selected>Pick your wine...</option>
          <option
            v-for="wine in items.wines"
            :key="wine"
            :value="toSnake(wine)"
          >
            {{ wine }}
          </option>
        </select>
      </div>
      <button
        class="p-2 text-xl font-hairline border rounded-md mb-4"
        @click="wineDescription(selectedWine)"
      >
        Get dish pairing
      </button>
      <h1 class="border-t pt-2">{{ wineDesc }}</h1>
    </div>
    <div class="flex items-center justify-center py-8">
      <button
        @click="items.activeComponent = 'appStart'"
        class="bg-pink-800 w-20 h-10 font-hairline rounded-lg hover:bg-pink-700 duration-200"
      >
        Go back
      </button>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap"
import { mapGetters } from "vuex"
export default {
  methods: {
    wineDescription(wineType) {
      fetch(
        `https://api.spoonacular.com/food/wine/description?wine=${wineType}&apiKey=${this.items.apiKey}`
      )
        .then((res) => res.json())
        .then((data) => (this.wineDesc = data.wineDescription))
    },
    toSnake(payload) {
      return payload
        .split(" ")
        .map((word) => word.toLowerCase())
        .join("_")
    },
  },
  computed: {
    ...mapGetters(["items"]),
  },
  data() {
    return {
      selectedWine: "",
      wineDesc: "",
    }
  },
  mounted() {
    const { wineDescription } = this.$refs
    gsap.from(wineDescription, 0.7, { translateY: -300 })
  },
}
</script>

<style></style>
