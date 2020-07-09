<template>
    <div id="Projects">
        <b-container>
            <b-row justify-content="center">
                <b-col cols="12">
                    <h1 class="Title">Projects</h1>
                    <p class="lead_text">Some of the projects that I have</p>
                </b-col>
            </b-row>
            <b-row class="justify-content-around h-100 mt-5">
                <div 
                    v-for="project in projectList"
                    :key="project.id"
                >
                 <ProjectCards
                    :title="project.project_name"
                    :src="project.image"
                    :short_description="project.short_description"
                    :project_id="project.id"
                 />
                </div>
              
            </b-row>
        </b-container>
    </div>
</template>

<script>
import ProjectCards from '@/components/ProjectCards.vue'
export default {
    name: "ProjectList",
    components: {
        ProjectCards
    },
    props:['project-list']
}
</script>

<style>

</style>