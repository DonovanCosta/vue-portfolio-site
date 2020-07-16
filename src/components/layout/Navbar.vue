<template>
    <b-navbar class="fixed-top" toggleable="lg">
        <b-container>
            <b-navbar-brand :to="{ name: 'Home' }">Donovan Costa</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse">
                <template v-slot:default="{ expanded }">
                    <font-awesome-icon v-if="expanded" :icon="['fas', 'times']" />
                    <font-awesome-icon v-else :icon="['fas', 'bars']" />
                </template>
            </b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav class="ml-auto">
                <b-navbar-nav class="ml-auto">
                    <b-nav-item :to="{ name:'Home', hash: '#about' }">About me</b-nav-item>
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

<style scoped>
    nav {
        background: #0077b6;
        color: #fff;
        /* padding: 0; */
        min-height: 56px;
    }
    @media(min-width: 992px){
        nav {
            padding: 0;
        }
    }
    .navbar-light {
        color: #fff;
    }

    nav .nav-link,
    .navbar-brand {
        color: #fff;
    }

    .navbar .navbar-toggler {
        color: rgba(255,255,255,1);
        border-color: rgba(255,255,255,1);
        width: 45px;
    }

    nav .navbar-nav .nav-item{
        padding: 0 1rem;
    
    }
    nav .navbar-nav .nav-item .nav-link,
    .navbar .navbar-brand{
        color: #fff;
        box-sizing: border-box;
        height: 56px;
        line-height: 56px;
        padding: 0 1rem;
    }

    nav .navbar-nav .nav-item .nav-link:hover,
    nav .navbar-brand:hover
    {
        background-color: #0096c7;
        color: #fff;
    }

    nav .navbar-nav .nav-item a.router-link-exact-active {
        background-color: #0096c7;
        color: #fff;
    }
</style>