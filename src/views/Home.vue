<template>
  <div class="home">
    <CallToAction message="A developer with a thirst for knowledge and ambition to get things done." />
    <About 
        :about_me="bio.about_me"
        :experience="bio.experience"
    />
    <ProjectList 
        :project-list="projects"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import About from '@/components/About.vue'
import CallToAction from '@/components/CallToAction.vue'
import ProjectList from '@/components/ProjectList.vue'

import axios from 'axios'

export default {
  name: 'Home',
  data(){
      return{
          projects: [],
          bio:[]
      }
  },
  components: {
    About,
    CallToAction,
    ProjectList
  },
  //lifecycle hook
   created(){

        function getBiography() {
            return axios.get('http://127.0.0.1:8000/api/bio/');
        }

        function getProjectsList() {
            return axios.get('http://127.0.0.1:8000/api/projects/');
        }

        Promise.all([getBiography(), getProjectsList()])
        .then( (results) => {
                this.bio = results[0].data
                this.projects = results[1].data 
            }
        )
        .catch(err => console.log(err))
  }
}
</script>
