<template>
  <div class="cursor-default select-none flex flex-col text-center">
    <h1 ref="header" class="text-4xl sm:text-5xl md:text-6xl">
      Hello, what can I help you with today?
    </h1>
    <div class="flex flex-wrap justify-center">
      <div
        v-for="(task, index) in items.listOfComponents"
        :key="index"
        class="w-40 h-40 border py-4 flex flex-col justify-around m-2 rounded-md cursor-pointer"
        @click="
          currentComponent = task.component
          swapComponents()
        "
        ref="task"
        @mouseover="scaleUp(index)"
        @mouseleave="scaleDown(index)"
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
import { TimelineLite, gsap } from "gsap"
export default {
  computed: {
    ...mapGetters(["items"]),
  },
  mounted() {
    const { header, task } = this.$refs
    const timeline = new TimelineLite()

    timeline.from(header, 1, { opacity: 0, y: -200 }).from(task, 1, {
      opacity: 0,
      scale: 0.5,
      stagger: 0.15,
      ease: "expo",
    })
  },
  methods: {
    scaleUp(index) {
      const { task } = this.$refs
      gsap.to(task[index], 0.5, {
        scale: 1.1,
        backgroundColor: "#ad0958",
      })
    },
    scaleDown(index) {
      const { task } = this.$refs
      gsap.to(task[index], 0.5, { scale: 1, backgroundColor: "transparent" })
    },
    swapComponents() {
      const { task, header } = this.$refs
      const timeline = new TimelineLite()

      timeline
        .to(task, 0.3, {
          opacity: 0,
          scale: 0.5,
          y: -200,
          ease: "expo",
        })
        .to(header, 0.3, { opacity: 0, y: -200 })

      setTimeout(() => {
        this.items.activeComponent = this.currentComponent
      }, 600)
    },
  },
  data() {
    return {
      currentComponent: "",
    }
  },
}
</script>

<style></style>
