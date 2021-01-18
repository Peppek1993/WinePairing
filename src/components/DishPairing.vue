<template>
  <div>
    <div class="componentCard sm:w-2/3 md:w-1/2" ref="dishPairing">
      <h1 class="text-4xl italic">I wonder what goes well with my wine.</h1>
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
        @click="dishPairing(selectedWine)"
      >
        Get dish pairing
      </button>
      <h1 class="border-t pt-2">{{ dishText }}</h1>
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
import { mapGetters } from "vuex"
import { gsap } from "gsap"
export default {
  methods: {
    dishPairing(wineType) {
      fetch(
        `https://api.spoonacular.com/food/wine/dishes?wine=${wineType}&apiKey=${this.items.apiKey}`
      )
        .then((res) => res.json())
        .then((data) => {
          this.dishText = data.text
        })
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
      dishText: "",
    }
  },
  mounted() {
    const { dishPairing } = this.$refs
    gsap.from(dishPairing, 0.7, { translateY: -300 })
  },
}
</script>

<style>
select::-ms-expand {
  display: none;
}

select {
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: "";
}
</style>
