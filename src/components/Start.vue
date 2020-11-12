<template>
  <div class="cursor-default select-none flex flex-col text-center">
    <h1 class="text-4xl sm:text-5xl md:text-6xl">
      Hello, what can I help you with today?
    </h1>
    <div class="flex flex-wrap justify-center">
      <div
        v-for="task in items.listOfComponents"
        :key="task"
        class="w-48 h-40 border py-4 flex flex-col justify-around m-2 rounded-md cursor-pointer"
        @click="items.activeComponent = task.component"
      >
        <div class="flex justify-center text-4xl">
          <i class="fas fa-wine-glass-alt px-4"></i>
          <i class="fas px-4" :class="task.icon"></i>
        </div>
        <h2 class="text-xl">
          {{ task.title }}
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  computed: {
    ...mapGetters(["items"]),
  },
}
</script>

<style></style>
