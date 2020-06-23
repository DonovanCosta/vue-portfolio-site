<template>
    <footer>
        <b-container class="h-100">
            <b-row class="align-items-center h-100">
                <b-col cols="6">
                    <b-nav>
                        <b-nav-item active>Active</b-nav-item>
                        <b-nav-item>Link</b-nav-item>
                        <b-nav-item>Another Link</b-nav-item>
                        <b-nav-item>Disabled</b-nav-item>
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
                     <!-- <div class="social-links">
                        <a class="btn btn-linkedin">
                            <i class="fab fa-linkedin-in" aria-hidden="true"></i>
                        </a>
                        <a class="btn btn-github">
                            <i class=" fab fa-github" aria-hidden="true"></i>
                        </a>
                    </div> -->
                </b-col>
                <!-- <b-col cols="12" > 
                    <p class="copyright">&copy; {{ year }}, donovancosta.com</p>
                </b-col> -->
            </b-row>
            <b-row class="text-center">
                <b-col> &copy; {{ year }}, donovancosta.com</b-col>
            </b-row>
        </b-container>
        <!-- <div class="container">
            <b-col cols="6">test</b-col>
            <b-col cols="6">test</b-col>
            <b-col cols="12">test</b-col>
                <div class="menu-items">
                    <ul class="list-unstyled">
                        <li><a href="">Features</a></li>
                        <li><a href="">Solutions</a></li>
                        <li><a href="">Plans</a></li>
                        <li><a href="">Sign in</a></li>
                    </ul>
                </div>
                <div class="social-links">
                    <a class="btn btn-linkedin">
                        <i class="fab fa-linkedin-in" aria-hidden="true"></i>
                    </a>
                    <a class="btn btn-github">
                        <i class=" fab fa-github" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
            <div></div>
            
            <div class="copyright">
                &copy; {{ year }}, donovancosta.com
            </div> 
        </div> -->
    </footer>
</template>

<script>
export default {
    name: "Footer",
    data(){
        return {
            year: new Date().getFullYear()
        };
    }
}
</script>

<style scoped>
 
footer {
    background: #333;
    color: #fff;
    box-shadow: 0px -5px 10px #888888;
    height: 10em;
    position: relative;
    /* justify-content: space-between; */
}

.copyright{
    margin: 0;
}

.social-links svg {
    font-size: 30px;
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