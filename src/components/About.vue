<template>
    <div id="about" class="about mb-5">
        <b-container>
            <b-row justify align-v="center" align-h="center" >
                <b-col cols="12" class="about_text">
                    <h1>About me</h1>
                    <div class="lead" v-html="about_me"></div>
                </b-col>
            </b-row>
            <b-row v-if="experience">
                <b-col cols="12" class="experiences">
                    <h1>experience</h1>
                    <div v-html="experience"></div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    name: "About",
    props: ['about_me', 'experience' ]
}
</script>

<style>
    .about{
        padding: 1em 0;
        color: black;
    }
</style>