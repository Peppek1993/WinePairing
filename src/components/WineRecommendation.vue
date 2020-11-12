<template>
  <div class="componentCard sm:w-2/3 md:w-1/2">
    <h1 class="text-4xl italic">Can you recommend me a specific wine?</h1>
    <div class="flex flex-col items-center text-md py-4">
      <select class="customInput" v-model="selectedWine">
        <option value="" disabled selected>Pick a wine...</option>
        <option v-for="wine in items.wines" :key="wine" :value="toSnake(wine)">
          {{ wine }}
        </option>
      </select>
      <div class="flex justify-around w-64">
        <input
          type="text"
          placeholder="Max Price"
          v-model="maxPrice"
          class="customInput"
        />
        <input
          type="text"
          placeholder="Min Rating"
          v-model="minRating"
          class="customInput"
        />
        <input
          type="text"
          placeholder="Amount"
          v-model="number"
          class="customInput"
        />
      </div>
    </div>
    <button
      class="p-2 text-xl font-hairline border rounded-md mb-4"
      @click="wineRecommendation(selectedWine, maxPrice, minRating, number)"
    >
      Get wine recommendation
    </button>
    <div v-show="searched">
      <div v-if="productMatches.length > 0">
        <h1 class="text-xl italic">Suggested wines</h1>
        <div
          class="flex flex-col"
          v-for="(match, index) in productMatches"
          :key="match"
        >
          <h1 class="py-2 px-4">{{ pairingText }}</h1>
          <div class="pt-2 border-t text-sm">
            <h2>{{ productMatches[index].title }}</h2>
            <p>Average rating: {{ productMatches[0].averageRating * 5 }}/5 ★</p>
            <p class="border rounded-md p-2">
              {{ productMatches[index].description }}
            </p>
            <p class="mb-2">Price: {{ productMatches[index].price }}</p>
            <a
              :href="productMatches[0].link"
              target="_blank"
              class="border p-1 rounded-md"
            >
              Buy it now
            </a>
          </div>
        </div>
      </div>
      <div v-else>
        <h1 class="border-t py-4 px-4">{{ pairingText }}</h1>
        <h1 class="text-xl italic pt-2 border-t">
          Unfortunately we don't have any wines matching your criteria.
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  methods: {
    wineRecommendation(wineType, maxPrice, minRating, number) {
      fetch(
        `https://api.spoonacular.com/food/wine/recommendation?wine=${wineType}&maxPrice=${maxPrice}&minRating=${minRating}&number=${number}&apiKey=${this.items.apiKey}`
      )
        .then((res) => res.json())
        .then((data) => {
          this.productMatches = data.recommendedWines
          this.searched = true
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
      maxPrice: null,
      minRating: null,
      number: null,
      searched: false,
      productMatches: {},
    }
  },
}
</script>

<style></style>
