import Vue from 'vue'
import Router from 'vue-router'

//组件模块
import map from './components/map'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/map', name: 'map', component: map },
    ]
})