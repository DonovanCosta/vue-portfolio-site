<template>
  <div class="home">
    <Navbar />
    <Footer 
        siteName="donovancosta.com"
        />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Footer,
  }
}
</script>
