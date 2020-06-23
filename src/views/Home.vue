<template>
  <div class="home">
    <Navbar />
    <CallToAction message="A developer with a thirst for knowledge and ambition to get things done." />
    <About />
    <Footer 
        siteName="donovancosta.com"
        />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import About from '@/components/About.vue'
import CallToAction from '@/components/CallToAction.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Footer,
    About,
    CallToAction
  }
}
</script>
