<template>
    <footer>
        <b-container>
            <b-row>
                <b-col cols="6">
                    <b-nav class="footer_links">
                        <b-nav-item :to="{ name:'Home', hash: '#about' }">About me</b-nav-item>
                        <b-nav-item :to="{ name:'Home', hash: '#Projects' }">Projects</b-nav-item>
                        <b-nav-item :to="{ name:'Home', hash: '#Contact' }">Contact me</b-nav-item>
                    </b-nav>
                </b-col>
                <b-col cols="6">
                    <div class="social-links">
                        <a class="btn btn-linkedin">
                            <font-awesome-icon :icon="['fab', 'linkedin']" />
                        </a>
                        <a class="btn btn-github">
                            <font-awesome-icon :icon="['fab', 'github']" />
                        </a>
                    </div>
                </b-col>
            </b-row>
            <b-row class="text-center">
                <b-col> &copy; {{ year }}, {{siteName}}</b-col>
            </b-row>
        </b-container>
    </footer>
</template>

<script>
export default {
    name: "Footer",
    data(){
        return {
            year: new Date().getFullYear()
        };
    },
    props:{
        siteName: String
    }
}
</script>

<style scoped>
 
footer {
    background: #0077b6;
    color: #fff;
    position: absolute;
    padding-top: 1em;
    padding-bottom: 0.5em;
    bottom: 0;
    width: 100%;
    height: 170px;
}

@media (min-width: 768px){
    footer{
        height: 95px;
    }
}

.copyright{
    margin: 0;
}

.social-links svg {
    font-size: 30px;
}

footer .footer_links {
    flex-direction: column;
}

@media (min-width:768px) {
    footer .footer_links {
        flex-direction: row;
    }
}

.footer_links .nav-link {
    color: #fff;
    text-decoration: none;
    flex-direction: column;
}

/*
.container {
    display: flex;
    justify-content: center;
    align-content: center;
    height: inherit;
    padding-bottom: 10px;
}

.menu-items,
.social-links{
    width: 300px;
}

.social-links{
    display: inline-flex;
    justify-content: space-evenly;
    align-items: center;
}

.social-links a {
    position: relative;
    border-radius: 5px;
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
    display: flex;
    font-size: 30px;
}

.menu-items,
.copyright{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.copyright {
    align-items: flex-end;

}

.btn-linkedin:hover{
    color: #0077b5;
    background-color: #fff;
}

.btn-github:hover{
    color:#4078c0;
    background-color: #fff;
} */
</style>