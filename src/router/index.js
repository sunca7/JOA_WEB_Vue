import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Places from '@/components/Places'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/places',
            name: 'Places',
            component: Places
        }
    ]
})