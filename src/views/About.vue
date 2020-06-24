<template>
  <div class="about">
   <ProjectDetail />
  </div>
</template>

<script>
// @ is an alias to /src
import ProjectDetail from '@/components/ProjectDetail.vue'

export default {
  name: 'About',
  components: {
    ProjectDetail
  }
}
</script>