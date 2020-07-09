<template>
  <div id="projectDetail">
   <ProjectDetail />
  </div>
</template>

<script>
// @ is an alias to /src
import ProjectDetail from '@/components/ProjectDetail.vue'

export default {
  name: 'ProjectDetailView',
  components: {
    ProjectDetail
  }
}
</script>