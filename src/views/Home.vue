<template>
  <div class="home">
    <CallToAction message="A developer with a thirst for knowledge and ambition to get things done." />
    <About />
    <ProjectList />
  </div>
</template>

<script>
// @ is an alias to /src
import About from '@/components/About.vue'
import CallToAction from '@/components/CallToAction.vue'
import ProjectList from '@/components/ProjectList.vue'

export default {
  name: 'Home',
  components: {
    About,
    CallToAction,
    ProjectList
  }
}
</script>
