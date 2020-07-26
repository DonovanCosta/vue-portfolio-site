<template>
    <div class="section project">
        <b-overlay
        :show="show_overlay"
        bg-color="#fff"
        opacity="1"
        >
            <template v-slot:overlay>
                <div class="text-center">
                    <div v-if="fetchingData">
                        <font-awesome-icon :icon="['fa', 'spinner']" spin size="2x" />   
                        <p id="cancel-label">Loading ...</p>
                    </div>
                    <div v-if="fetchingError">
                        <font-awesome-icon :icon="['fa', 'exclamation-triangle']" size="2x" />   
                        <p id="cancel-label">Something went wrong :(</p>

                        <b-button class="back_btn" variant="primary" @click="goBack" >Back to the projects</b-button>
                    </div>
                </div>
            </template>
            <div id="project_title">
                <b-container>
                    <b-row>
                        <b-col class="m-5">
                            <h1>{{projectData.project_name}}</h1>
                        </b-col>
                    </b-row>
                </b-container>
            </div>
            <div id="project_media">
                <b-container>
                    <b-row align-h="center">
                        <b-col class="media" lg="10">
                            <div v-if="projectData.video !== null " class="video_wrapper">
                                <video-player  class="video-player-box"
                                                ref="videoPlayer"
                                                :options="playerOptions"
                                                :playsinline="true"
                                                >
                                </video-player>
                            </div>
                            <div v-else>
                                <b-img :src="projectData.image" fluid alt="Responsive image"></b-img>
                            </div>
                        </b-col>
                    </b-row>
                </b-container>
            </div>
            <div id="project_details">
                <b-container>
                    <b-row align-h="center">
                        <b-col lg="8">
                            <div id="technologies_used" class="mt-3">
                                <p class="lead">Technologies used:</p>
                                <ul class="tech">
                                    <li v-for="technology in projectData.technologies" :key="technology" ><span>{{ technology }}</span></li>
                                </ul>
                                <div class="align-items-center mt-3">
                                    <div class="d-flex outlinks">
                                        <a v-if="projectData.github_link !== null " type="button" class="btn btn-sm link_btn" :href="projectData.github_link" target="_blank">                                     
                                            <label for="">
                                                <font-awesome-icon :icon="['fab', 'github']" />
                                                <span> Source </span>
                                            </label>                                       
                                        </a>
                                        <a v-if="projectData.preview_link !== null " type="button" class="btn btn-sm link_btn" :href="projectData.preview_link" target="_blank">
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
                            <b-button class="back_btn" variant="primary" @click="goBack" >Back to the projects</b-button>
                        </b-col>
                    </b-row>
                </b-container>
            </div>
        </b-overlay>
    </div>
</template>

<script>
import axios from 'axios'
import { videoPlayer } from 'vue-video-player'
import 'video.js/dist/video-js.css'
import '../assets/css/custom_videojs.css'

export default {
    name: "ProjectDetail",
    components: {
        videoPlayer
    },
    data(){
        return{
            projectData: [],
            id:this.$route.params.id,
            show_overlay: true,
            fetchingData: true,
            fetchingError: false,
            playerOptions: {
                // videojs options
                muted: true,
                language: 'en',
                fluid: true,
                autoplay: false,
                aspectRatio: '16:9',
                sources: [],
                poster: "/static/images/author.jpg",
            }
        }
    },
    computed: {
      player() {
        return this.$refs.videoPlayer.player
      },
    },
    methods: {
        goBack(){
            return this.$router.push({name:'Home', hash: '#Projects' })
        }
    },
    async created(){
        await axios.get( process.env.VUE_APP_BACKEND_API + `projects/${this.$route.params.id}`)
        .then( res => { 
            this.projectData = res.data;
            this.show_overlay = false
            this.playerOptions.sources = [{
                type: "video/mp4",
                src: this.projectData.video//'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm',
                }]
                this.player.muted(false)
        })
        .catch(err => {
            this.fetchingData = false;
            this.fetchingError = true;
        })
    }
}
</script>

<style scoped>
    .project{
        margin-bottom: 1rem;
        color: #000;
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
        color: #0096c7;
        background: #fff;
        border: 2px solid #0096c7;
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
        background: #0096c7;  /* fallback for old browsers */
        border: 1px solid #0096c7;
        margin-right: 10px;
    }

    .link_btn:hover {
        color: white;
        background: #00b4d8;
        border: 1px solid #00b4d8;
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

    #project_media{
        background: #0077b6;
        background: linear-gradient(to bottom, #00b4d8, #0096c7 50%); /* Standard syntax (must be last) */
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

    .back_btn{
        background-color: #0096c7;
        color: white;
        border: 1px solid #0096c7;
    }

    .back_btn:hover,
    .back_btn:active {
        background-color: #00b4d8;
    }
    .video_wrapper{
        position: relative;
        width: 100%;
        height: 100%;
    }
</style>