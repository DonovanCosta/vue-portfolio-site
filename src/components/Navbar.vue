<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-container>
                <b-navbar-brand href="#">NavBar</b-navbar-brand>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav class="ml-auto">
            <b-navbar-nav class="ml-auto">
                <b-nav-item href="#">About</b-nav-item>
                <b-nav-item href="#">Projects</b-nav-item>
                <b-nav-item href="#">Contact me</b-nav-item>
            </b-navbar-nav>

            </b-collapse>
             </b-container>
            

            
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: "Navbar",
    props: {
        sticky: {
            type: Boolean,
            default: true
        },
        position: {
      type: String,
      default: 'relative'
    },
    }

}
</script>

<style>

</style>