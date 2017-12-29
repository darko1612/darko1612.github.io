import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Gallery from './components/Gallery.vue'
import Contact from './components/Contact.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes : [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/o_nama',
            component: About,
        },
        {
            path: '/galerija',
            component: Gallery
        },
        {
            path: '/kontakt',
            component: Contact
        }
    ]
})

export default router