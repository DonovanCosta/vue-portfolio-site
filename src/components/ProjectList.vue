<template>
    <div id="Projects">
        <b-container class="p-0">
            <b-row justify-content="center">
                <b-col>
                    <h1 class="Title">Projects</h1>
                    <p class="lead_text">Some of the projects that I have</p>
                </b-col>
            </b-row>
            <b-row class="justify-content-around h-100 mt-5">
                <ProjectCards/>
                <ProjectCards/>
                <ProjectCards/>
                <ProjectCards/>
                <ProjectCards/>
                <ProjectCards/>
                <ProjectCards/>
                <ProjectCards/>
                <ProjectCards/>
                <ProjectCards/>
                <ProjectCards/>
                <ProjectCards/>
                <ProjectCards/>
                <ProjectCards/>
                <ProjectCards/>
                <ProjectCards/>
                <ProjectCards/>
                <ProjectCards/>
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
    }
}
</script>

<style>

</style>