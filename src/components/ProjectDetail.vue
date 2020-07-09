<template>
  <div class="section project">
      <b-container>
          <b-row>
              <b-col class="m-5">
                  <h1>{{projectData.project_name}}</h1>
              </b-col>
          </b-row>
          <b-row>
              <b-col class="media project_media" lg="8">
                   <b-img :src="projectData.image" fluid alt="Responsive image"></b-img>
              </b-col>
              <b-col lg="4">
                <div id="technologies_used">
                    <p>Technologies used:</p>

                    <ul class="tech">
                        <li v-for="technology in projectData.technologies" :key="technology" ><span>{{ technology }}</span></li>
                    </ul>

                    <div class="align-items-center mt-3">
                        <div class="d-flex outlinks">
                            <a type="button" class="btn btn-sm btn-outline-secondary link_btn" :href="projectData.github_link" target="_blank">                                     
                                <label for="">
                                    <font-awesome-icon :icon="['fab', 'github']" />
                                    <span> Source </span>
                                </label>                                       
                            </a>
                            <a type="button" class="btn btn-sm btn-outline-secondary link_btn" :href="projectData.preview_link" target="_blank">
                                <span>
                                    <font-awesome-icon :icon="['fas', 'globe']" />
                                    <span> Preview</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
              </b-col>
              <b-col cols="12">
                    <p class="project_detail_text mt-5" v-html="projectData.content"></p>
                    <b-button variant="primary" @click="goBack" >Back to the projects</b-button>
              </b-col>
          </b-row>
      </b-container>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "ProjectDetail",
    data(){
        return{
            projectData: [],
            id:this.$route.params.id
        }
    },
    methods: {
        goBack(){
            return this.$router.go(-1)
        }
    },
    async created(){
            await axios.get(`http://127.0.0.1:8000/api/projects/${this.$route.params.id}`)
            .then( res => this.projectData = res.data )
            .catch(err => console.log(err))
        
    }
}
</script>

<style scoped>
    .project{
        margin-bottom: 1rem;
    }
    ul {
        display: flex;
        list-style: none;
        padding: 0;
        margin: 0;
        flex-wrap: wrap;
        justify-content: flex-start;
    }

    ul > li {
        /* border: 1px solid #2193b0;  */
        border-radius: 4px; 
        padding: 10px;
        font-weight: 700 ; 
        list-style-type: none;
        /* color: #2193b0; */
        margin: 0 0.4rem 0.4rem 0;
        color: #fff;
        background: #673AB7;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to bottom, #512DA8, #673AB7);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to bottom, #512DA8, #673AB7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }

    .link_btn {
        width: 150px;
        height: 50px;
        line-height: 50px;
        font-size: large;
        padding: 0;
        text-align: center;
        justify-content: center;
        position: relative;
        display: flex;
        color: white;
        background: #673AB7;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to bottom, #512DA8, #673AB7);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to bottom, #512DA8, #673AB7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        margin-right: 10px;
    }

    .link_btn:hover {
         background: none;
        color: white;
        background: #673AB7;  /* Chrome 10-25, Safari 5.1-6 */
        /* background: -webkit-linear-gradient(to top, #673AB7, #673AB7);  
        background: linear-gradient(to top, #673AB7, #673AB7);  */
    }

    .link_btn svg {
        font-size: 30px;
        height:50px;
        line-height: 50px;
        vertical-align: middle;
    }

    .link_btn label {
        display: contents;
    }
    
    .link_btn span {
        height: 100%;
        padding-left: 5px;
    }
    
    .project_media {
        max-height: 400px;
        justify-content: center;
        margin-bottom: 1rem;
    }

    .project_media img {
        max-height: 400px;
    }

    .project_detail_text {
        line-height: 1.8;
        text-align: left;
    }

    @media (min-width: 576px) {  
        .project_media {
            margin-bottom:1rem;
        }
    }
</style>