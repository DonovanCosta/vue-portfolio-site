<template>
    <div id="app">
        <div id="content-wrap">
            <Header>  
                <Navbar />
            </Header>
            <transition name="fade" mode="out-in">
                <router-view :key="$route.path"/>
            </transition>  
        </div>
        <Footer
            siteName="donovancosta.com" 
        />
    </div>
</template>

<script>

import Navbar from '@/components/layout/Navbar.vue'
import Footer from '@/components/layout/Footer.vue'

export default {

    components: {
        Navbar,
        Footer
    }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto');
body{
     box-sizing: border-box;
}
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
    color: #ffffff;
  overflow: hidden;
  background: #ffffff;
  font-family: 'Roboto', sans-serif;
    position: relative;
  min-height: 100vh;

}

header{
    height: 72px;
    width: 100%;
    position: fixed;
    z-index: 1030;
}
@media(min-width: 992px){
    header{
        height: 56px;
    }
}

#content-wrap {
  padding-bottom: 170px;    /* Footer height */
  padding-top: 72px;        /* nabar height mobile */
}


@media(min-width: 992px){
    #content-wrap {
        padding-bottom: 95px;    /* Footer height */
        padding-top: 56px; 
    }
}

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 1.5s ease;
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0
    }
</style>
