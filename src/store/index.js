import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cuisines: [
      "African",
      "Cajun",
      "Caribbean",
      "Chinese",
      "French",
      "German",
      "Greek",
      "Indian",
      "Italian",
      "Japanese",
      "Korean",
      "Mexican",
      "Southern",
      "Spanish",
      "Thai",
      "Vietnamese",
    ],
    apiKey: "4b31533d80214ba6bba0dc84f7961415",
    activeComponent: "appStart",
    listOfComponents: [
      {
        component: "appDishPairing",
        title: "Dish Pairing",
        icon: "fa-utensils",
      },
      {
        component: "appWineDescription",
        title: "Wine description",
        icon: "fa-info",
      },
      {
        component: "appWinePairing",
        title: "Wine Pairing",
        icon: "fa-question",
      },
      {
        component: "appWineRecommendation",
        title: "Wine Recommendation",
        icon: "fa-shopping-cart",
      },
    ],
    wines: [
      "Agiorgitiko",
      "Albarino",
      "Assyrtiko",
      "Barbera wine",
      "Bordeaux",
      "Cabernet Sauvignon",
      "Cava",
      "Champagne",
      "Chardonnay",
      "Chenin Blanc",
      "Cream Sherry",
      "Dornfelder",
      "Dry Sherry",
      "Frascati",
      "Gamay",
      "Gavi",
      "Gewurztraminer",
      "Grenache",
      "Gruener Veltliner",
      "Malbec",
      "Merlot",
      "Moscato",
      "Moschofilero",
      "Muscadet",
      "Negroamaro",
      "Nero d Avola",
      "Pinot Grigio",
      "Pinot Noir",
      "Pinotage",
      "Port",
      "Primitivo",
      "Red Burgundy",
      "Riesling",
      "Rioja",
      "Sangiovese",
      "Sauvignon Blanc",
      "Shiraz",
      "Sparkling Red Wine",
      "Sparkling Rose",
      "Tempranillo",
      "Trebbiano",
      "Verdejo",
      "Verdicchio",
      "Vermentino",
      "Viognier",
      "White Burgundy",
      "Zinfandel",
      "Zweigelt",
    ],
    dishes: ["Steak", "Hamburger", "Salad", "Pasta", "Sushi", "Pizza", "Beef"],
  },
  getters: {
    items: (state) => {
      return state
    },
  },
  mutations: {},
  actions: {},
  modules: {},
})
