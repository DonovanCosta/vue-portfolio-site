<template>
    <div id="about" class="about">
        <b-container>
            <b-row justify align-v="center" align-h="center" >
                <b-col cols="12" class="about_text">
                    <h1>About me</h1>
                    <div v-html="about_me"></div>
                </b-col>
            </b-row>
             <hr>
            <b-row>
                <b-col cols="12" class="experiences">
                    <h1>experience</h1>
                    <div v-html="experience"></div>
                </b-col>
            </b-row>
            <hr>
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
    }
</style>