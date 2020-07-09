<template>
    <div id="app">
        <Header>  
            <Navbar />
        </Header>
        <transition name="fade" mode="out-in">
            <router-view :key="$route.path"/>
        </transition>  
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header{
    height: 56px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
   .slide-enter-active,
    .slide-leave-active {
        transition: opacity 1s, transform 1s;
    }

    .slide-enter,
    .slide-leave-to {
        opacity: 0;
        transform: translateX(-30%)
    }

    .moveUp-enter-active {
        animation: fadeIn 1s ease-in;
    }
    @keyframes fadeIn {
        0%{
            opacity: 0;
        }
        50%{
            opacity: 50%;
        }
        100%{
            opacity: 1;
        }
    }

    .moveUp-leave-active{
        animation: moveUp 0.3s ease-in;
    }
    @keyframes moveUp {
        0%{
            transform: translateY(0);
        }
        100%{
            transform: translateY(-400px);
        }
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.3s;
        
    }

    .fade-enter,
    .fade-leave-to {
        /* opacity: 0; */
        animation: fadeIn 1s ease-in;
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
