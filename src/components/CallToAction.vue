<template>
    <div
        class="cta">
        <b-container>
            <b-row justify align-v="center" align-h="center" >
                <h1>{{message}}</h1>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    name: "CallToAction",
    props: {
        message: String
    }
}
</script>

<style>
    .cta {
        min-height: 100vh;
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        background-image: url('/img/tianyi-ma-WiONHd_zYI4-unsplash.jpg');
        background-size:cover;
        background-position: center;
        color: white;
        font-family: 'Roboto';
    }
</style>