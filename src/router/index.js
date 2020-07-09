import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // Project detail route - view a project in more detail.
  // The route contains an id parameter which is passed to the route component.
  {
    path: "/project/:id",
    name: 'ProjectDetailView',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "ProjectDetailView" */ '../views/ProjectDetailView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior:(to, from, savedPosition ) =>{
    if(savedPosition){
        return savedPosition
    } else {
        const position = {}
        if (to.hash) {
            position.selector = to.hash;
            if (to.hash) {
              position.offset = { y: 140 };
            }
            if (document.querySelector(to.hash)) {
              return position;
            }
    
            return false;
          }
        }
  }
})

export default router
