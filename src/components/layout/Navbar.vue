<template>
    <b-navbar class="fixed-top" toggleable="lg" type="dark" variant="dark">
        <b-container>
            <b-navbar-brand :to="{ name: 'Home' }">Donovan Costa</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav class="ml-auto">
                <b-navbar-nav class="ml-auto">
                    <b-nav-item :to="{ name:'Home', hash: '#about' }">About</b-nav-item>
                    <b-nav-item :to="{ name:'Home', hash: '#Projects' }">Projects</b-nav-item>
                    <b-nav-item :to="{ name:'Home', hash: '#Contact' }">Contact me</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-container>
    </b-navbar>
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