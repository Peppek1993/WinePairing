<template>
  <div class="componentCard sm:w-2/3 md:w-1/2">
    <h1 class="text-4xl italic">What wine goes best with my dish?</h1>
    <div class="flex flex-col items-center text-md py-4">
      <div class="flex items-baseline">
        <select class="customInput" v-model="selectedFood">
          <option value="" disabled selected>Pick a dish...</option>
          <option
            v-for="dish in items.dishes"
            :key="dish"
            :value="toSnake(dish)"
          >
            {{ dish }}
          </option>
        </select>
        <span>or</span>
        <select class="customInput" v-model="selectedFood">
          <option value="" disabled selected>Pick a cuisine...</option>
          <option
            v-for="cuisine in items.cuisines"
            :key="cuisine"
            :value="toSnake(cuisine)"
          >
            {{ cuisine }}
          </option>
        </select>
      </div>
      <input
        type="number"
        placeholder="Max Price"
        v-model="maxPrice"
        class="customInput"
      />
    </div>
    <button
      class="p-2 text-xl font-hairline border rounded-md mb-4"
      @click="winePairing(selectedFood, maxPrice)"
    >
      Get dish pairing
    </button>
    <div v-show="searched">
      <div class="flex flex-col" v-if="productMatches.length > 0">
        <h1 class="border-t py-4 px-4">{{ pairingText }}</h1>
        <div class="pt-2 border-t text-sm">
          <h1 class="text-xl italic">Suggested wine</h1>
          <h2>{{ productMatches[0].title }}</h2>
          <p>Average rating: {{ productMatches[0].averageRating * 5 }}/5 ★</p>
          <p>{{ productMatches[0].description }}</p>
          <p class="mb-2">Price: {{ productMatches[0].price }}</p>
          <a
            :href="productMatches[0].link"
            target="_blank"
            class="border p-1 rounded-md"
          >
            Buy it now
          </a>
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
    winePairing(dish, maxPrice) {
      if (maxPrice < 0) {
        alert("Max Price needs to be higher than 0.")
      } else if (dish === "") {
        alert("Please select a dish or cuisine")
      } else {
        fetch(
          `https://api.spoonacular.com/food/wine/pairing?food=${dish}&maxPrice=${maxPrice}&apiKey=${this.items.apiKey}`
        )
          .then((res) => res.json())
          .then((data) => {
            this.pairingText = data.pairingText
            this.productMatches = data.productMatches
            this.searched = true
          })
      }
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
      selectedFood: "",
      maxPrice: null,
      pairingText: "",
      productMatches: {},
      searched: false,
    }
  },
}
</script>

<style></style>
