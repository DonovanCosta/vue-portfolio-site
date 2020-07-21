<template>
    <div class="cta">
        <b-container>
            <b-row justify align-v="center" align-h="center" >
                <b-col class="cta_wrapper">
                    <h1 class="cta_text">{{typedMessage}}</h1>
                    <transition name="fade">
                        <img v-if="animate" :src="require('@/assets/coding.svg')" alt="programmer illustration">
                    </transition>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    name: "CallToAction",
    props: {
        message: String,
    },

    data(){
        return {
            typedMessage: '',
            messageToType: this.message,
            typingSpeed: 200,
            charIndex: 0,
            animate: false
        }
    },
    methods: {
        typeText() {
            if(this.charIndex < this.messageToType.length) {
                this.typedMessage += this.messageToType.charAt(this.charIndex);
                this.charIndex += 1;
                setTimeout(this.typeText, this.typingSpeed);
            } 
        }
    },
    created() {
      setTimeout(this.typeText);
    },
    mounted(){
        this.animate = true
    }
}
</script>

<style scoped>
    .cta_wrapper{
        height: 100vh;
    }

    .cta{
        height: 100vh;
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
    }
    
    .cta h1 {
        position: relative;
        z-index: 2;
        color: black;
        text-align: start;
        text-transform: uppercase;
        font-weight: bold;
        font-family: 'Roboto', sans-serif;
        padding-top: 1rem;
        line-height: 1.1;
    }

    .cta img {
        position: absolute;
        left: 30%;
        top: auto;
        height: 40vh;
        bottom: 10%;
        margin: auto;
        opacity: 1;
    }

    /* Small devices (landscape phones, 576px and up) */
    @media (min-width: 576px) { 
        .cta_text{
            font-size: 3.5rem;
        }

        .cta img {
            left: 45%;
        }
    }

    /* Medium devices (tablets, 768px and up) */
    @media (min-width: 768px) {  
        .cta_text{
            font-size: 5rem;
        }
    }

    /* Large devices (desktops, 992px and up) */
    @media (min-width: 992px) { 
        .cta_text{
            font-size: 5rem;
        }
        .cta img {
            top: 0;
            left: 45%;
            height: 60vh;
            bottom: 0;
        }
    }

    /* Extra large devices (large desktops, 1200px and up) */
    @media (min-width: 1200px) { 
        .cta_text {
            font-size: 6.5rem;
        }
        .cta img {
            left: 65%;
        }
    }


    .fade-enter-active,
    .fade-leave-active {
        animation: fadeIn 4s linear reverse;
    }

    .fade-enter,
    .fade-leave-to {
        animation: fadeIn 4s linear;
    }

    @keyframes fadeIn {
        0%{
            opacity: 1;
        }
        50%{
            opacity: 50%;
        }
        100%{
            opacity: 0;
        }
    }
</style>